import React, { useState } from 'react'
import Head from 'next/head'
export async function getStaticProps() {
    return {
        props: {
            soma: "swapnil"
        },
    }
}

const contact = ({ soma }) => {
    console.log(soma)
    const [formLoading, setFormLoading] = useState(false)
    const [s, set] = useState()
    const [form, setForm] = useState({
        email: "",
        name: "",
        message: ""

    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })

            if (response.ok) {
                alert("o bhai maro mujhe maro ek second ye maja ho raha hai maro")
            }
            alert("le beta")

        } catch (error) {
            alert("le beta")
        }
    }

    return (
        <>
            <Head>
                <title>contact swapnil </title>
                <meta name='description' content='this is main descriptiion for this page' />
                <meta name='author' content='hybrowlabs website' />
                <link rel="icon" href='/download.ico' />
            </Head>
            <form onSubmit={handleSubmit} action="#" className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-600 p-6">
                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="name">Name boss</label>

                    <input onChange={(e) => handleInputChange(e)} value={form.name} name='name' className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="name" type="text" placeholder="Your name" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="email">Email</label>

                    <input onChange={handleInputChange} value={form.email} name="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="Your email" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="message">Message</label>

                    <textarea onChange={handleInputChange} value={form.message} name='message' className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="message" rows="4" placeholder="Your message"></textarea>
                </div>

                <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                    {formLoading ? "sending boss" : "send message"}
                </button>
            </form>
        </>
    )
}

export default contact
