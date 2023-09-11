import { useCallback, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({ label, register, name = label, required, type, ...props }) => {
	const [isPassword, setIsPassword] = useState(type);

	const togglePasswordVisibility = useCallback(event => {
		event.preventDefault();
		setIsPassword(prevState => (prevState === "password" ? "text" : "password"));
	}, []);

	return (
		<>
			<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
			<div className="relative">
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					{...register(name, { required })}
					type={isPassword}
					{...props}
				/>
				{name === "password" && (
					<button
						className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
						onClick={togglePasswordVisibility}
					>
						{isPassword === "password" ? (
							<AiFillEye className=" text-2xl " />
						) : (
							<AiFillEyeInvisible className=" text-2xl " />
						)}
					</button>
				)}
			</div>
		</>
	);
};

export default Input;
