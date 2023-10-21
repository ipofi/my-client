import { SignOut } from "@phosphor-icons/react"
import { Outlet, useNavigate } from "react-router-dom"

type Props = {}

const Layout = (props: Props) => {
    const navigate = useNavigate()
    return (
        <>
            <main>
                <header className="flex items-center justify-between p-5 font-semibold border-b border-b-slate-700">
                    <h2 className="text-[1.5rem]">My Client</h2>
                    <SignOut size={30} weight="bold" onClick={() => navigate('/auth')} />
                </header>
                <section className="p-5">
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Layout