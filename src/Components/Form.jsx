import React, { useState } from 'react'
import { Button } from './ui/button';

const Form = () => {

    const loginFormat = {
        email: "",
        password: "",
    };

    const [login, setLoginFormat] = useState(loginFormat);


    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormat((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(login);
    };

    const loginSubmitHandler = async () => {
        try {
            const response = await axios.post(
                ``,
                login,
                {}
            );
            console.log(response.data);



        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form>
            <div className="gap-9 flex flex-col items-center justify-center p-12">
                <div className="flex flex-col gap-3 overflow-hidden">
                    <div className="flex flex-col">
                        <label className="text-[#c1c1c3]" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="bg-transparent outline-none text-[#dadada] border-b border-[#dadada] focus:border-white transition duration-300 ease-in-out"
                            type="email"
                            id="email"
                            name="email"
                            value={login.email}
                            onChange={handleLoginChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#b9b9bb]" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="bg-transparent outline-none text-[#dadada] border-b-2 border-[#dadada] focus:border-white transition duration-300 ease-in-out"
                            type="password"
                            id="password"
                            name="password"
                            value={login.password}
                            onChange={handleLoginChange}

                        />
                    </div>

                    <div className="justify-center items-center flex flex-col gap-3 mt-8">

                        <Button
                            variant={"extraOrdinary"}
                            className="lg:w-[400px] w-[290px] h-[50px] bg-slate-100 text-black"
                            type="submit"
                            onClick={loginSubmitHandler}
                        >
                            Login
                        </Button>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form