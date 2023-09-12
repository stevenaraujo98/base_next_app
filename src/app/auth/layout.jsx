const AuthLayout = ({ children }) => {
	return (
		<div className="w-1/2 flex flex-col items-center justify-center px-6 py-10 mx-auto flex-grow lg:py-0">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div>{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
