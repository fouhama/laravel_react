import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { axiosClient } from "@/api/axios"
const formShecma = z.object({
  username : z.string().min(2,{
    message: "Username must be greater than 2 characters."
  }).max(50, 'Username must be less than 50 characters.'),
  password: z.string().min(5, {message : 'password must be greater than 5 characters.'})
  .max(50, 'passwor must be less than 50 characters.')
})
const Login = () => {
  const form = useForm<z.infer <typeof formShecma>>({
    resolver: zodResolver(formShecma),
    defaultValues: {
      username:'',
      password: ''
    }
  }) 
const  submit = async(values : z.infer<typeof formShecma>)=>{
    await axiosClient.post('/login', values).then((res)=>{
      console.log(res.data)
    }
    ).catch((err)=>{
      console.log(err)
    }
    )
    
    
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
        <div className="border border-gray-300 rounded-2xl w-2xl p-5 shadow-sm">
          <h1 className="text-3xl text-gray-500 bold mb-3 text-center">Autentifiaction</h1>
          <Form {...form}>
              <form  onSubmit={form.handleSubmit(submit)} className="space-y-7">
              <FormField 
              name="username"
                render={({field})=>(
                  <FormItem>
                    <FormLabel> Username</FormLabel>
                    <FormControl>
                       <Input placeholder="Username" {...field} className="bg-white focus:border-none focus:outline-none"/>
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              
              />
              <FormField    name="password" render={({field})=>(
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field}  className=" bg-white focus:border-none focus:outline-none" type="password"/>
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}/>

              <Button type="submit" className="float-end w-40 cursor-pointer">Submit</Button>
              </form>
          </Form>
        </div>



    </div>
  )
}

export default Login