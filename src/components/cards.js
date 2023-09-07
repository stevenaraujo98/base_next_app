import Image from "next/image";

const Cards = ({ image, title, content }) => {
	return (
		<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<Image className="rounded-t-lg" src={image} alt="" width={320} height={50} />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
				<a href="#" className="inline-flex items-center text-blue-600 hover:underline">
					Ver mas
				</a>
			</div>
		</div>
	);
};

export default Cards;
