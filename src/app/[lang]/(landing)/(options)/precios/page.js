import PriceCard from "@/components/priceCard";

const benefits = ["1 User", "All UI components", "Lifetime access", "Free updates"];

const Page = () => {
	return (
		<div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-8 xl:gap-10 lg:space-y-0">
			<PriceCard title="Documentos" price="59" benefits={benefits} buttonName="Choose personal" />
			<PriceCard title="Suscripciones" price="199" benefits={benefits} buttonName="Choose business" />
			{/* <PriceCard title="Suscripciones" price="199" benefits={benefits}/> */}
		</div>
	);
};

export default Page;
