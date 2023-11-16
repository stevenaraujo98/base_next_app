"use client";
import SimpleTable from "@/components/SimpleTable";
import { useSession } from "next-auth/react";
import data from "../../../../data/MOCK_DATA.json";
import dayjs from "dayjs";

const Dashboard = () => {
	const { status } = useSession({
		required: true,
		// onUnauthenticated() {
		//   // The user is not authenticated, handle it here.
		//   console.log("*** onUnauthenticated ***");
		// },
	});

	if (status === "loading") {
		return "Loading or not authenticated...";
	}

	const columns = [
		{ header: "ID", accessorKey: "id", footer: "Total" },
		{
			header: "Nombres",
			columns: [
				{ header: "Nombre", accessorKey: "first_name", footer: "Mi nombre" },
				{ header: "Apellido", accessorKey: "last_name", footer: "Mi apellido" },
			],
		},
		{ header: "Names", accessorFn: row => `${row.first_name} ${row.last_name}` },
		// { header: "First Name", accessorKey: "first_name" },
		// { header: "Last Name", accessorKey: "last_name" },
		{ header: "Email", accessorKey: "email" },
		{ header: "Gender", accessorKey: "gender" },
		{
			header: "Date of Birth",
			accessorKey: "dateOfBirth",
			cell: info => dayjs(info.getValue()).format("DD/MM/YYYY"),
		},
	];

	return (
		<div>
			Dashboard Client <SimpleTable data={data} columns={columns} />
		</div>
	);
};

// // pages/admin.jsx
// AdminDashboard.auth = {
//     role: "admin",
//     loading: <AdminLoadingSkeleton/>,
//     unauthorized: "/login-with-different-user" // redirect to this url
// }

export default Dashboard;
