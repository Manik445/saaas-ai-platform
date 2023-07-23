import { Button } from "@/components/ui/button";
import Link from "next/link"; 

const LandingPage = ()=>{
    return (
        <div>
            this si (unprotected)    
            <Link href="/sign-in">
            <Button>Sign-In</Button>
            </Link>
            <Link href="/sign-up">
            <Button>Register</Button>
            </Link>
        </div>  
    )
}

export default LandingPage;            