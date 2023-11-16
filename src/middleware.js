import { NextResponse } from "next/server";
import { validateTypeUser } from "./utils/user";
import { i18n } from "./i18n/i18n.config";
import createMiddleware from "next-intl/middleware";

// si se necesita ejecutar aqui en el middleware se usa https://www.npmjs.com/package/jose
// import { jwtVerify } from "jose"; // await jwtVerify(token, new TextDecoder().encode(secret), { algorithms: ["HS256"] });
// import jwt from "jsonwebtoken";

const locales = i18n.locales;
const defaultLocale = i18n.defaultLocale;

export default createMiddleware({
	locales,
	defaultLocale,
});

// This function can be marked `async` if using `await` inside
// este middleware evita el error con lastpass
export async function middleware(request) {
	const { nextUrl, url, cookies } = request;
	const pathname = nextUrl.pathname;

	// Verificar si se encontró el token
	if (cookies.has("next-auth.session-token")) {
		const { value: sessionToken } = cookies.get("next-auth.session-token");

		const typeUser = await validateTypeUser(sessionToken);

		// termina en admin y es tipo  administrador
		if (!!pathname.match(/\/(admin)$/) && typeUser === 1) {
			return NextResponse.rewrite(
				// si esta en la lista de los idiomas y si no esta. Va con el default ya que necesita el idioma
				new URL(`${!locales.includes(pathname.slice(1, 3)) && defaultLocale}${pathname}/usuarios`, url),
			);
		}

		// termina en client y es tipo  cliente
		if (!!pathname.match(/\/(client)$/) && typeUser === 3) {
			return NextResponse.rewrite(
				// si esta en la lista de los idiomas y si no esta. Va con el default ya que necesita el idioma
				new URL(`${!locales.includes(pathname.slice(1, 3)) && defaultLocale}${pathname}/dashboard`, url),
			);
		}

		// path "/" ya que se sabe es un usuario
		if (
			pathname === "/" ||
			locales.includes(pathname.slice(1)) ||
			(!!pathname.match(/\/(admin)$/) && typeUser !== 1) ||
			(!!pathname.match(/\/(client)$/) && typeUser !== 3)
		) {
			if (typeUser === 1) {
				return NextResponse.redirect(
					new URL(`${locales.includes(pathname.slice(1, 3)) ? pathname : ""}/admin/usuarios`, url),
				);
			}
			if (typeUser === 3) {
				return NextResponse.redirect(
					// si esta dentro de los idiomas retorna el pathname tal cual sino esta es un "/" por lo cual se envia vacio para el default
					new URL(`${locales.includes(pathname.slice(1, 3)) ? pathname : ""}/client/dashboard`, url),
				);
			}
		}
	} else {
		console.log("Token no encontrado en las cookies.");
		// [termina en] no es client or admin or lawyer
		if (!!pathname.match(/\/(client|admin|lawyer)$/)) {
			const searchParams = new URLSearchParams(nextUrl.searchParams);
			searchParams.set("next", pathname);

			// const requestedPage = pathname;
			const url = nextUrl.clone();
			url.pathname = "/auth/signin";
			url.search = searchParams;
			return NextResponse.redirect(url);
		}
	}

	// Verifica el locale, si no lo tiene
	const pahtnameIsMissingLocale = locales.every(local => !pathname.startsWith(`/${local}`));

	// el que no tiene el locale y (no termine en) => [no es una imagen y no es client or admin or lawyer]
	// "!!" convierte el valor a booleano y ! para obtener la negacion
	if (
		pahtnameIsMissingLocale &&
		!!!pathname.match(/(\.(jpg|png|svg)$)/) &&
		!!!pathname.match(/\/(client|admin|lawyer)$/)
	) {
		// cuando no tiene la ruta para el idioma se agrega el default
		return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, url));
	}

	return NextResponse.next();
}

// See "Matching Routes" section below to learn more
export const config = {
	matcher: ["/", "/client/:path*", "/admin/:path*", "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
