import React from "react";

const PriceCard = ({ title, price, benefits, buttonName }) => {
	return (
		<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
			<h3 className="mb-4 text-xl font-semibold text-left my-3">{title}</h3>
			<div className="flex justify-center items-baseline my-5">
				<span className="mr-2 text-3xl font-extrabold">${price}</span>
				<span className="text-gray-500 dark:text-gray-400">/year</span>
			</div>
			<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-3">
				Best option for personal use & for your next project.
			</p>

			<ul role="list" className="mb-8 space-y-4 text-left">
				{benefits &&
					benefits.map((benefit, index) => {
						return (
							<li key={index} className="flex items-center space-x-3">
								<span>{benefit}</span>
							</li>
						);
					})}
			</ul>
			<a
				href="#"
				className="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
			>
				{buttonName}
			</a>
		</div>
	);
};

export default PriceCard;
