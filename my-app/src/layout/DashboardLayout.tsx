import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout(){
    return(
        <>
            <div>
                <Navbar/>
            </div>       
            <Outlet/> 
        </>
    )
}