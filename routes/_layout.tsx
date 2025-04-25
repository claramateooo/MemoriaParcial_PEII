import { PageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";
const Layout= (props: PageProps) =>{
    const Component= props.Component;
    return(
        <div>
        <h1></h1>
        <Navbar />
        <Component />
        </div>
    );
};
export default Layout;