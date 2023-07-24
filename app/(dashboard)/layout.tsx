import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";

const DashboardLayout = ({
    children    
} : {    
    children : React.ReactNode; 
}) =>{
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex  md:w-72
             md:flex-col md:fixed md:inset-y-0 z-[80]   
             bg-gray-900">
                <SideBar/>
                <div>
                <p>Hello and Welcome</p>
                </div>
            </div>       
            <div className="md:pl-72">
                hello contents
                <Navbar/>
                {children}
            </div>
        </div>
    ); 
}

export default DashboardLayout; 