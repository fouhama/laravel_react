import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { axiosClient } from "@/api/axios"
import { getCookie } from "@/api/getCookie"
import { useNavigate } from "react-router-dom"
import { Loader } from "lucide-react"
import { useContext } from "react"
import { Context, ContextType } from "@/Context/ContextProvider"
export  const  DASHBORAD_STUDANT = '/dashboard'
const formShecma = z.object({
  email: z.string().email(),
  password: z.string().min(5, { message: 'password must be greater than 5 characters.' })
    .max(50, 'passwor must be less than 50 characters.')
})



const Login = () => {
  const { setAuth } = useContext(Context) as ContextType
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formShecma>>({
    resolver: zodResolver(formShecma),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const submit = async (values: z.infer<typeof formShecma>) => {
    await axiosClient.get('/sanctum/csrf-cookie');
    // Ensure CSRF cookie is set
    await axiosClient.post('/login', values, {
      headers: {
        'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') || '',
      }
    }).then((response) => {
      if (response.status === 204) {
        setAuth({ isAuth: true, email: form.getValues('email') })
        navigate(DASHBORAD_STUDANT)
      }
    }).catch((error) => {
      form.setError('email',{
        message: error.response.data.errors.email
      })
    });

  }
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="border border-gray-300 rounded-2xl w-[450px] p-5 shadow-sm">
        <h1 className="text-3xl text-gray-500 bold mb-3 text-center">Autentifiaction</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-7">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} type="email" className="bg-white focus:border-none focus:outline-none" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}

            />
            <FormField name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} className=" bg-white focus:border-none focus:outline-none" type="password" />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )} />

            <Button type="submit" disabled={form.formState.isSubmitting} className="float-end w-40 cursor-pointer">
            {form.formState.isSubmitting && <Loader className="mx-2 animate-spin" /> }
            Login
            </Button>
          </form>
        </Form>
      </div>



    </div>
  )
}

export default Login

