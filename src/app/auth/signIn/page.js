"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { signIn } from "next-auth/react";
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
				router.push("/");
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
		<div className="w-1/2 flex flex-col items-center justify-center px-6 py-10 mx-auto flex-grow lg:py-0">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
						<Button block isLoading={isLoading}>
							Iniciar sesión
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
