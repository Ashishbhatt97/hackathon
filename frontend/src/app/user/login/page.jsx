"use client"

import Form from "@/components/Form"

const page = () => {

    return (
        <div className='flex h-[80vh] w-full flex-col'>
            <div className="flex items-center justify-center flex-col">
                <div className='h-[150px] font-bold  tracking-wider text-[80px] w-full items-center justify-center flex '>
                    <h2>User Login Page</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <div className=''>
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page