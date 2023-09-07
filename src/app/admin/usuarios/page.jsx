"use client";
const host = process.env.NEXT_AUTH_HOST;
const db = process.env.DB_HOST;

const page = () => {
	const handldclick = () => {
		console.log("ALGO", host, db);
	};
	return (
		<div>
			page <button onClick={handldclick}>sdasd</button>
		</div>
	);
};

export default page;
