import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
    title : String , 
    description : string ,
    Icon : LucideIcon ,    
    iconColor?:String , 
    bgColor ?:String    
}
const Heading = ({
    title , 
    description , 
    Icon , 
    iconColor,
    bgColor
} : HeadingProps)=> {

    return (
        <div>
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
                <div className={cn("p-2 w-fit rounded-md" , bgColor)}>
                <Icon className={cn("w-10 h-10" , iconColor)}/>
                </div>

            <div className="text-2xl font-bold">
                {title}
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
            </div>

            </div>
        </div>
    )
}

export default Heading; 