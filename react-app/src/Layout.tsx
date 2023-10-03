import { Outlet } from "react-router-dom";
import { Header } from "./components/Navigation/Header";
import { Footer } from "./components/Footer/Footer";

export function Layout() {
    return (
        <>
            <Header />
            <section>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}