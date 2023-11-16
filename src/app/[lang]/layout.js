import "../globals.css";
import Header from "@/components/header";
import Providers from "@/context/Providers";
import Toaster from "../Toaster";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "../dictionaries";

// import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Legal Advice",
	description: "Fullstucks",
};

export function generateStaticParams() {
	return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({ children, params: { lang } }) {
	const dict = await getDictionary(lang);
	let messages;
	try {
		const baseLanguage = await import(`../../i18n/languages/${lang}.json`);
		messages = baseLanguage.default;
	} catch (error) {
		console.log(error);
		notFound();
	}

	return (
		<html lang={lang}>
			<body className={inter.className}>
				{/* <Sidebar /> */}
				{/* pl-16 lg:pl-64 */}
				<div className="w-full min-h-screen flex flex-col">
					<Providers lang={lang} messages={messages}>
						<Header lang={lang} dict={dict} />
						<Toaster
							position="top-center"
							reverseOrder={false}
							gutter={5}
							containerClassName=""
							containerStyle={{}}
							toastOptions={{
								success: {
									style: {
										background: "green",
										color: "white",
									},
								},
								error: {
									style: {
										background: "red",
										color: "white",
										border: "1px solid black",
									},
								},
							}}
						/>
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
}
