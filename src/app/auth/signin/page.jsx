"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { handleSubmit, register } = useForm({ mode: "onChange" });
	const router = useRouter();

	const onSubmit = async ({ email, password }) => {
		setIsLoading(true);
		const credentials = {
			email,
			password,
			redirect: false,
			callbackUrl: "/",
		};

		try {
			const result = await signIn("credentials", credentials);

			if (result.ok) {
				console.log(result);
				// result.ok   result.status === 200
				router.push("/admin");
				toast.success("Inicio de sesión exitoso");
			} else {
				// result.error
				toast.error("Usuario o contraseña incorrectos");
			}
		} catch (error) {
			console.error("Error al iniciar login", error);
			toast.error("Error al iniciar sesión");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input
						label="Correo"
						register={register}
						name="email"
						required
						type="email"
						placeholder="nombre@dominio.com"
					/>
				</div>
				<div>
					<Input
						label="Contraseña"
						register={register}
						name="password"
						required
						type="password"
						placeholder="••••••••"
					/>
				</div>

				<Button block type="submit" isLoading={isLoading}>
					Iniciar sesión
				</Button>
			</form>
			<div className="text-sm text-center font-semibold">
				<Link href="/auth/signup" className=" text-gray-600 dark:text-gray-200 hover:underline">
					¿Olvidó su contraseña?
				</Link>
			</div>
			<div className="flex items-center justify-between pb-6 ">
				<p className="mb-0 mr-2">¿No tienes una cuenta? </p>
				<Link
					href="/auth/signup"
					className="inline-block rounded border-2 border-red px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-600 hover:bg-opacity-10 text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 border-red-700 active:text-red-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
				>
					Regístrate
				</Link>
			</div>
		</div>
	);
};

export default Login;
