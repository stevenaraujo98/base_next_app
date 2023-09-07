import React from "react";

const DocumentCard = ({ title, content }) => {
	return (
		<div className="flow-root max-w-full p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

			<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
			<button className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 float-right rounded">
				Solicitar
			</button>
		</div>
	);
};

export default DocumentCard;
