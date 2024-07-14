import React, {useState} from 'react'
import Image from "next/image"
import Diagram from "@/assets/images/home.svg"
import { Input } from "@/components/UI/Input/input"
import { emailCheck, pass } from "@/utils/function"
import Head from "@/assets/images/head.svg"
import Lock2 from "@/assets/images/lock2.svg"
import Eye from "@/assets/images/eye.svg"
import Eye2 from "@/assets/images/eye2.svg"
import Button from "@/components/UI/Button/button"
import Link from "next/link";
import {useRouter} from "next/router";




const loginData = [
    {
        label: "Email Address",
        name: "userName",
        placeholder: "Email Address",
        type: "text",
        svg: Head,
        label: "Email Address",
        validator: emailCheck,
        errorMessage: "Please enter a valid email address",
    },
    {
        label: "Password",
        name: "password",
        placeholder: "Password",
        type: "password",
        label: "Password",
        validator: pass,
        svg: Lock2,
    svg2: Eye,
    svg3: Eye2,
        errorMessage: "Incorrect Password",
    },
]

const Login = () => {
    const router = useRouter();
    const [data, setData] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };


    const submit = async (e) => {
        e.preventDefault();
        router.push("/dashboard")
    }

  return (
      <main>
          <div className="flex h-screen">
            <div className="w-1/2 flex items-center">
                <Image src={Diagram} alt=""/>

            </div>
            <div className="w-1/2 h-full flex flex-start items-center p-[0px_50px] bg-white shadow-[0px_15px_90px_0px_rgba(0,0,0,0.03)]">
                <div>
                    <p className='text-deepBlue text-[40px] font-bold '>Welcome!</p>
                    <p className='text-gray text-[20px]'>Enter your details to login</p>
                    <form>
                        {loginData.map((item, i) => (
                            <Input
                                value={data[item.name]}
                                onChange={handleChange}
                                isValid={item.validator(data[item.name])}
                                key={i}
                                {...item}
                            />

                        ))}
                          <Link href="#">
          <p className="text-[12px] text-blue leading-[15px] tracking-[0.04em] font-regular font-[600]">
            Forgot Password
          </p>
        </Link>
                        <div>
                            <Button text="Login" onClick={submit} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
      </main>
          
  )
}

export default Login;