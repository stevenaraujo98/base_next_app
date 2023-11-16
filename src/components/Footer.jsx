import Image from "next/image";

const Footer = () => {
	return (
		<div className="p-10 mt-10 flex justify-center flex-col  bg-gray-800 text-white">
			<div className="flex items-center justify-around">
				Footer
				<div>Seccion 1</div>
				<div>Seccion 2</div>
			</div>
			<hr className="h-px my-8 bg-gray-500  border-0 dark:bg-gray-700"></hr>
			<div className="flex items-center justify-around">
				<div className="flex-shrink-0 flex items-center">
					<Image className="h-9 w-9 mr-2" src="/logo-white.svg" alt="Legal Advice" width={100} height={100} />
					Legal Advice
				</div>
				<div className="text-sm">© 2023 Legal Advice - All Rights Reserved</div>
				<div>
					<Image
						className="h-8 w-8"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
						alt="Your Company"
						width={100}
						height={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
