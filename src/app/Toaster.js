"use client";
import dynamic from "next/dynamic";
// para importar en el layout del lado del cliente

const Toaster = dynamic(
	async () => {
		const { Toaster } = await import("react-hot-toast");
		return Toaster;
	},
	{
		ssr: false,
	},
);

export default Toaster;
