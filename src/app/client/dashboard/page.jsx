"use client";
import { useSession } from "next-auth/react";

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

	return <div>Dashboard Client</div>;
};

// // pages/admin.jsx
// AdminDashboard.auth = {
//     role: "admin",
//     loading: <AdminLoadingSkeleton/>,
//     unauthorized: "/login-with-different-user" // redirect to this url
// }

export default Dashboard;
