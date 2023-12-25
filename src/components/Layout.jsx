import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="bg-white min-h-screen">
                <Outlet/>
            </div>
            <Footer />
        </>
    );
}

export default Layout;