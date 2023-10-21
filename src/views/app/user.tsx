import Avatar from "@/components/ui/avatar";
import Input from "@/components/ui/input"
import { HelperMethods } from "@/helpers/methods.helper";
import { ArrowLeft } from "@phosphor-icons/react";
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export type UserFields = {
    company_name: string,
    number_of_users: string
    number_of_products: string
};

const index = () => {

    const navigate = useNavigate();

    const [userFields, setUserFields] = useState<Partial<UserFields>>({
        company_name: '',
        number_of_users: '',
        number_of_products: ''
    });
    const [errors, setErrors] = useState<Partial<UserFields>>({});

    // handle input values onchange
    const handleInput = (input: EventTarget & HTMLInputElement) => {
        setUserFields(prev => ({ ...prev, [input.name]: input.value }))
    }

    // validate fields on input blur
    const handleInputBlur = () => {
        let tempErrors: Partial<UserFields> = {};

        const res = HelperMethods.filterObject({ ...userFields });
        tempErrors = { ...tempErrors, ...res };

        setErrors(tempErrors);
    }

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {

        ev.preventDefault()

        let tempErrors: Partial<UserFields> = {}

        const res = HelperMethods.filterObject({ ...userFields })
        tempErrors = { ...tempErrors, ...res }

        setErrors(tempErrors)

        if (!Object.keys(tempErrors).length) {
            // update user fields
            console.log(userFields)
        }
    };

    const ERROR_MESSAGES = {
        company_name: 'Company Name is required',
        number_of_users: 'Number of Users is required',
        number_of_products: 'Number of Products is required',
    } as UserFields

    return (
        <main className='grid place-items-center h-[80vh]'>
            <form className="w-[25rem]" onSubmit={handleSubmit}>
                <div className="border-b-2 border-slate-700 text-[1.5rem] mb-5 flex items-center gap-x-3 cursor-pointer" onClick={() => navigate(-1)}>
                    <ArrowLeft size={16} weight="bold" />
                    <h2>Users</h2>
                </div>
                <div className="text-center">
                    <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                </div>
                <div className="space-y-3 my-2 text-center">
                    <div>
                        <Input label="Company Name" type="text" name="company_name" placeholder="Company Name" onChange={({ target }) => handleInput(target)} onBlur={handleInputBlur} error={errors.hasOwnProperty('company_name') ? ERROR_MESSAGES.company_name : ''} />
                    </div>
                    <div>
                        <Input label="Number of Users" type="number" name="number_of_users" placeholder="0" onChange={({ target }) => handleInput(target)} onBlur={handleInputBlur} error={errors.hasOwnProperty('number_of_users') ? ERROR_MESSAGES.number_of_users : ''} />
                    </div>
                    <div>
                        <Input label="Number of Products" type="number" name="number_of_products" placeholder="0" onChange={({ target }) => handleInput(target)} onBlur={handleInputBlur} error={errors.hasOwnProperty('number_of_products') ? ERROR_MESSAGES.number_of_products : ''} />
                    </div>
                    <div>
                        <Input label="Percentage" type="number" placeholder="0%" disabled />
                    </div>
                    <button className="w-full py-1 bg-[#1a1a1a]" type="submit">Submit</button>
                </div>
            </form>
        </main>
    )
}

export default index