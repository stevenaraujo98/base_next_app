import Footer from "@/components/footer";

const Layout = ({ children }) => {
	return (
		<>
			<div className="flex-grow ">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
