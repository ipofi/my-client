import Input from "@/components/ui/input"
import { HelperMethods } from "@/helpers/methods.helper";
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export type Credentials = {
    email: string,
    password: string
};

const index = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState<Partial<Credentials>>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Partial<Credentials>>({});

    // handle input values onchange
    const handleInput = (input: EventTarget & HTMLInputElement) => {
        setCredentials(prev => ({ ...prev, [input.name]: input.value }))
    }

    // validate fields on input blur
    const handleInputBlur = () => {
        let tempErrors: Partial<Credentials> = {};

        const res = HelperMethods.filterObject({ ...credentials });
        tempErrors = { ...tempErrors, ...res };

        setErrors(tempErrors);
    }

    // validate fields on input blur
    const handleLogin = async (ev: FormEvent<HTMLFormElement>) => {

        ev.preventDefault()

        let tempErrors: Partial<Credentials> = {}

        const res = HelperMethods.filterObject({ ...credentials })
        tempErrors = { ...tempErrors, ...res }

        setErrors(tempErrors)


        if (!Object.keys(tempErrors).length) {
            // dispatch LOGIN_API
            navigate('/')
        }
    };

    const ERROR_MESSAGES = {
        email: 'Email is required',
        password: 'Password is required'
    } as Credentials

    return (
        <main className='grid place-items-center h-[80vh]'>
            <form onSubmit={handleLogin}>
                <div className="space-y-3 my-2 text-center">
                    <div>
                        <Input type="text" name="email" placeholder="Email" onChange={({ target }) => handleInput(target)} onBlur={handleInputBlur} error={errors.hasOwnProperty('email') ? ERROR_MESSAGES.email : ''} />
                    </div>
                    <div>
                        <Input type="password" name="password" placeholder="Password" onChange={({ target }) => handleInput(target)} onBlur={handleInputBlur} error={errors.hasOwnProperty('password') ? ERROR_MESSAGES.password : ''} />
                    </div>
                    <button className="w-full py-1 bg-[#1a1a1a]" type="submit">Login</button>
                </div>
            </form>
        </main>
    )
}

export default index