import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/context/Providers";
import { Toaster } from "./Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Legal Advice",
	description: "Fullstucks",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">
					<Providers>
						<Header />
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