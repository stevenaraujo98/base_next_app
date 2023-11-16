const Button = ({ children, isLoading, block, outline, onClick }) => {
	return (
		<button
			disabled={isLoading}
			className={`inline-flex items-center px-4 py-2 text-sm font-semibold 
				leading-6 transition duration-150 ease-in-out shadow rounded-md
				${outline ? "text-red-400 border-2 border-red-400 hover:bg-gray-200" : "text-white bg-yellow-500 hover:bg-yellow-700"}
				${block && "justify-center w-full"} 
				${isLoading && "cursor-not-allowed"}
				focus:ring-4 focus:outline-none focus:ring-primary-300 
				dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 
				`}
			onClick={onClick}
		>
			{isLoading && (
				<svg
					className={`w-5 h-5 mr-3 -ml-1 ${outline ? "text-red-500" : "text-white"} animate-spin`}
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
			)}
			{children}
		</button>
	);
};

export default Button;
