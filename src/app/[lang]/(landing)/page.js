"use client";
import Cards from "@/components/cards";
import ElasticCarousel from "@/components/ElasticCarousel";
// import { getDictionary } from "@/app/dictionaries";
import items from "../../../../public/items.json";
import { useTranslations } from "next-intl";

export default function Home({ params: { lang } }) {
	// const dict = await getDictionary(lang);
	const t = useTranslations();

	return (
		<div className="mx-8 my-6 self-center justify-items-center content-center ">
			<ElasticCarousel size={items.elastic.length}>
				{items.elastic.map(item => (
					<div
						key={item.id}
						style={{ backgroundImage: `url(${item.imageUrl})` }}
						className="relative z-10 w-full h-80	"
					>
						{/* <div> */}
						{/* <Image src={item.imageUrl} height={100} width={100} className="animate-fadeIn" /> */}
						<h3>{item.title} </h3>
						{/* </div> */}
					</div>
				))}
			</ElasticCarousel>

			<p className="bg-red-400 dark:bg-slate-900 font-sans">{"dict.hello"}</p>
			<p className="bg-red-400 dark:bg-slate-900 font-sans">{t("hello")}</p>
			<div className="grid justify-items-center grid-cols-3 gap-3 mt-10">
				<Cards
					image="https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg"
					title="Documento de prueba"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, harum."
				/>
				<Cards
					image="https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg"
					title="Documento de prueba"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, harum."
				/>
				<Cards
					image="https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg"
					title="Documento de prueba"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, harum."
				/>
				<Cards
					image="https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg"
					title="Documento de prueba"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, harum."
				/>
				<Cards
					image="https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg"
					title="Documento de prueba"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, harum."
				/>
			</div>
		</div>
	);
}
