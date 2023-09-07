"use client";
import NavBar from "@/components/navBar";
import RequestCard from "@/components/requestCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
	const router = useRouter();
	const { status } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") router.replace("/");
	}, [router, status]);

	if (status === "authenticated")
		return (
			<div className="grid gap-5">
				<NavBar />
				<RequestCard />
				<RequestCard />
			</div>
		);

	return <p>Cargando...</p>;
};

export default Page;
