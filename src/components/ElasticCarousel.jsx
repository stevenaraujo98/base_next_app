import Carousel, { consts } from "react-elastic-carousel";
import { useRef } from "react";
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 3 },
];

export default function ElasticCarousel(props) {
	const {
		children,
		size,
		infiniteLoop = true,
		autoPlaySpeed = 5000,
		itemsToShow = 1,
		showArrows = true,
		pagination = true,
		enableAutoPlay = true,
		enableMouseSwipe = true,
		otherArrow = false,
	} = props;
	const carouselRef = useRef(null);
	let resetTimeout; //declare at state level

	function myArrow({ type, onClick, isEdge }) {
		const pointer = type === consts.PREV ? "👈" : "👉";
		return (
			<button onClick={onClick} disabled={isEdge}>
				{pointer}
			</button>
		);
	}

	return (
		<div>
			<div>
				<Carousel
					pagination={pagination}
					enableAutoPlay={enableAutoPlay}
					enableMouseSwipe={enableMouseSwipe}
					itemsToShow={itemsToShow}
					showArrows={showArrows}
					autoPlaySpeed={autoPlaySpeed}
					renderArrow={myArrow && otherArrow}
					// breakPoints={breakPoints}
					// onChange={(currentItem, pageIndex) => console.log(currentItem, pageIndex, elastic.length - 1)}
					ref={carouselRef}
					onNextEnd={({ index }) => {
						if (index + 1 === size && infiniteLoop) {
							if (carouselRef?.current?.goTo) {
								clearTimeout(resetTimeout);
								resetTimeout = setTimeout(() => {
									if (carouselRef?.current?.goTo) {
										carouselRef.current.goTo(0);
									}
								}, autoPlaySpeed);
							}
						}
					}}
				>
					{children}
				</Carousel>
			</div>
		</div>
	);
}
