"use client";
import PriceCard from "@/components/priceCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const benefits = ["1 User", "All UI components", "Lifetime access", "Free updates"];

const Page = () => {
	const router = useRouter();
	const { status } = useSession();

	useEffect(() => {
		if (status === "authenticated") router.replace("/");
	}, [router, status]);

	return (
		<div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-8 xl:gap-10 lg:space-y-0">
			<PriceCard title="Documentos" price="59" benefits={benefits} buttonName="Choose personal" />
			<PriceCard title="Suscripciones" price="199" benefits={benefits} buttonName="Choose business" />
			{/* <PriceCard title="Suscripciones" price="199" benefits={benefits}/> */}
		</div>
	);
};

export default Page;
