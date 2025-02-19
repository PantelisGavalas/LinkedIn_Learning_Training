import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    // Outlet: leaves a space in the JSX of this component that the matching page
    // for the current route will be rendered into.
    // It basically represents whatever page is currently being displayed.
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Layout;
