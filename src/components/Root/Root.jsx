import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"

const Root = () => {
    return (
        <div>
            <h2 className="text-5xl">hellow from Root</h2>
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;