import Carousel from "@/components/carrousel";
import Cards from "@/components/cards";

const images = [
	{
		url: "https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg",
		key: "imag1",
	},
	{
		url: "https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg",
		key: "image2",
	},
	{
		url: "https://www.presuntoinocente.com/wp-content/uploads/2022/12/que-es-un-abogado-penalista-1536x691.jpg",
		key: "image3",
	},
];

export default function Home() {
	return (
		<div className="mx-8 self-center justify-items-center content-center ">
			<Carousel images={images} />
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
