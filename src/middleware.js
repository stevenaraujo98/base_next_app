import { NextResponse } from "next/server";
import { validateTypeUser } from "./utils/user";

// si se necesita ejecutar aqui en el middleware se usa https://www.npmjs.com/package/jose
// import { jwtVerify } from "jose"; // await jwtVerify(token, new TextDecoder().encode(secret), { algorithms: ["HS256"] });
// import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
// este middleware evita el error con lastpass
export async function middleware(request) {
	// console.log(request.url);
	console.log("middleware", request.nextUrl.pathname, request.nextUrl.pathname.includes("/client"));

	// Verificar si se encontró el token
	if (request.cookies.has("next-auth.session-token")) {
		const cookie = request.cookies.get("next-auth.session-token");
		const sessionToken = cookie.value;

		// console.log("Token encontrado:", sessionToken);
		const typeUser = validateTypeUser(sessionToken);
		console.log(typeUser === 3 && request.nextUrl.pathname === "/client");
		console.log(typeUser === 1 && request.nextUrl.pathname === "/admin");

		if (request.nextUrl.pathname === "/admin" && typeUser === 1) {
			console.log("admin");
			return NextResponse.rewrite(new URL("/admin/usuarios", request.url));
		}
		if (request.nextUrl.pathname === "/client" && typeUser === 3) {
			console.log("client");
			return NextResponse.rewrite(new URL("/client/dashboard", request.url));
		}

		// path "/" ya que se sabe es un usuario
		if (request.nextUrl.pathname == "/" || (request.nextUrl.pathname.startsWith("/client") && typeUser !== 3)) {
			if (typeUser === 1) {
				return NextResponse.redirect(new URL("/admin/usuarios", request.url));
			}
		}
	} else {
		console.log("Token no encontrado en las cookies.");
		if (request.nextUrl.pathname.startsWith("/client") || request.nextUrl.pathname.startsWith("/admin")) {
			const requestedPage = request.nextUrl.pathname;
			const url = request.nextUrl.clone();
			url.pathname = "/auth/signIn";
			url.search = `p=${requestedPage}`;

			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next();
}

// See "Matching Routes" section below to learn more
export const config = {
	matcher: ["/", "/client/:path*", "/admin/:path*"],
};
