"use client";
import { useTranslations } from "next-intl";

const host = process.env.NEXT_AUTH_HOST;
const db = process.env.DB_HOST;

const page = () => {
	const t = useTranslations();

	const handldclick = () => {
		console.log("ALGO", host, db);
	};

	return (
		<div>
			Página <button onClick={handldclick}>usuarios</button>
			<p>{t("message", { name: "Jane" })}</p>
			<table className="min-w-full text-left text-sm font-light">
				<thead className="border-b font-medium dark:border-neutral-500">
					<tr>
						<th scope="col" className="px-6 py-4">
							Id
						</th>
						<th scope="col" className="px-6 py-4">
							Nombre
						</th>
						<th scope="col" className="px-6 py-4">
							Apellido
						</th>
						<th scope="col" className="px-6 py-4">
							Usuario
						</th>
						<th scope="col" className="px-6 py-4">
							Tipo
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b dark:border-neutral-500">
						<td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
						<td className="whitespace-nowrap px-6 py-4">Mark</td>
						<td className="whitespace-nowrap px-6 py-4">Otto</td>
						<td className="whitespace-nowrap px-6 py-4">@mdo</td>
						<td className="whitespace-nowrap px-6 py-4">cliente</td>
					</tr>
					<tr className="border-b dark:border-neutral-500">
						<td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
						<td className="whitespace-nowrap px-6 py-4">Jacob</td>
						<td className="whitespace-nowrap px-6 py-4">Thornton</td>
						<td className="whitespace-nowrap px-6 py-4">@fat</td>
						<td className="whitespace-nowrap px-6 py-4">abogado</td>
					</tr>
					<tr className="border-b dark:border-neutral-500">
						<td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
						<td className="whitespace-nowrap px-6 py-4">Larry</td>
						<td className="whitespace-nowrap px-6 py-4">Wild</td>
						<td className="whitespace-nowrap px-6 py-4">@twitter</td>
						<td className="whitespace-nowrap px-6 py-4">cliente</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default page;
