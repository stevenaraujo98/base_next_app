"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const SigninButton = () => {
	const { status, data: session } = useSession();

	if (session && status === "authenticated") {
		return (
			<div className="flex gap-4 ml-auto">
				<button onClick={() => signOut({ redirect: true, callbackUrl: "/" })} className="text-red-600">
					Cerrar sesión
				</button>
			</div>
		);
	} else if (status === "loading") {
		return (
			<div>
				<svg
					className={`w-5 h-5 mr-3 -ml-1 text-white animate-spin`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			</div>
		);
	}

	return (
		<button
			className="text-white bg-yellow-500 p-1 rounded-md hover:bg-yellow-300"
			type="button"
			onClick={() => signIn()}
		>
			Iniciar sesión
		</button>
	);
};
