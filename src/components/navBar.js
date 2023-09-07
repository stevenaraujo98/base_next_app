import React from "react";

const NavBar = () => {
	return (
		<div>
			<ul className="flex">
				<li className="flex-1 mr-2">
					<a
						className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
						href="#"
					>
						Historial
					</a>
				</li>
				<li className="flex-1 mr-2">
					<a
						className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
						href="#"
					>
						Recientes
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
