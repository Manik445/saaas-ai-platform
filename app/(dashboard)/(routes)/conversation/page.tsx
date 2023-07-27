"use client"
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import {useForm} from "react-hook-form"; 
import * as z from "zod" ;  
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, 
    FormControl,
     FormField,
      FormItem } from "@/components/ui/form";
import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
   
const ConversationPage = ()=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),

        defaultValues : {
            prompt:""
        }
    }); 
  
        const isLoading = form.formState.isSubmitting; 
        const onSubmit = async (values : z.infer<typeof formSchema>)=>{
            console.log(values); 
        }         
    return (
        <div>
        <Heading
         title="Conversation"
         description="The Most Advanced Ai Powered Conversation with our AI Buddy"
         Icon={MessageSquare}
         iconColor="text-voilet-500"
         bgColor="bg-violet-500/10"
        ></Heading>
        <div className="px-4 lg:px-8">
            <div>
                <Form {...form}>  
                {/* by using ... we uses all the properties of the form that is defined above */}
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="
                       rounded-lg
                       border
                       w-full
                       p-4
                       px-4
                       md:px-6
                       focus-within:shadow-sm
                       grid
                       grid-cols-12
                       gap-2
                      "
                      >
                  <FormField
                      name="prompt"
                      render={({field})=>(
                          <FormItem className="col-span-12 lg:col-span-18">
                        <FormControl className="m-0 p-0 ">
                            <Input className="
                            border-0 outline-none 
                            focus-visible:ring-0 
                            focus-visible:ring-transparent
                            "
                            disabled={isLoading}
                            placeholder="Ask Buddy Questions here"
                            {...field} // destructure the properties like onchange , onBlur etc in the field present in react-hook-form
                            />  
                        </FormControl>   
                        </FormItem>
                        )}
                      />
                      <Button
                      className="col-span-12 lg:col-span-2 w-full"
                      disabled={isLoading}
                      >Generate</Button>
                      </form>   
                    </Form>
            </div>  
            <div className="space-y-4 mt-4">
                Messages Content
            </div>
                </div>
                        </div>   
    )    
}    

export default ConversationPage; 