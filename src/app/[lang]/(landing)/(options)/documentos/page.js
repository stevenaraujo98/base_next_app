import { getDictionary } from "@/app/dictionaries";
import Cards from "@/components/cards";
import DocumentCard from "@/components/documentCard";

const Page = async ({ params: { lang } }) => {
	const dict = await getDictionary(lang);

	return (
		<div className="grid gap-5">
			<DocumentCard
				title={dict.Contracts.title}
				content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
			/>

			<DocumentCard
				title={dict.Contracts.title}
				content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
			/>
		</div>
	);
};

export default Page;
