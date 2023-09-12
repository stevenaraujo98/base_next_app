"use client";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
	const pathname = usePathname();
	const topic = pathname.charAt(1).toUpperCase() + pathname.slice(2);

	return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">{topic}</h1>
				</div>
			</header>
			{children}
		</>
	);
};

export default Layout;
