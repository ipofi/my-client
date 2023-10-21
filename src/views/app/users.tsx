import UserCard from "@/components/UserCard";

export type UserFields = {
    company_name: string,
    number_of_users: string
    number_of_products: string
};

const index = () => {
    return (
        <main className='grid place-items-center h-[80vh]'>
            <div>
                <div className="border-b-2 border-slate-700 text-[1.5rem]">
                    <h2>Users</h2>
                </div>

                <div className="gap-y-3 divide-y-2 divide-[#333333] my-2 w-[25rem]">
                    <UserCard id='a1' companyName="Steam" />
                    <UserCard id='b2' companyName="Gray Matter" />
                    <UserCard id='c3' companyName="Ocullus" />
                </div>
            </div>
        </main>
    )
}

export default index

