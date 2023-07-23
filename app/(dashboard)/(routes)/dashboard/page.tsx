import { UserButton } from "@clerk/nextjs"
export default function DashboardPage() {
  return (
    <div>
   <p className="text-6xl">Hello</p>
      <UserButton afterSignOutUrl="/"></UserButton> 
   </div>
      
  )
}
   