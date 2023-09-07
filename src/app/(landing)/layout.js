import Footer from "@/components/footer";

const Layout = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default Layout;
