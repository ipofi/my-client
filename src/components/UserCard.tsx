import { CaretRight } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

type UserCardProps = {
    id: string,
    companyName: string
};

const UserCard = ({ id, companyName }: UserCardProps) => {

    return (
        <>
            <NavLink className="flex items-center p-3 text-[#ffffffde] hover:text-[#ffffffde] hover:bg-[#343434]" to={id}>
                <div className="flex-1 border-r-2 border-slate-700 leading-3">
                    <p className="text-sm">{companyName}</p>
                </div>
                <div className="flex-shrink-0 p-2">
                    <CaretRight size={16} weight="bold" />
                </div>
            </NavLink>
        </>
    )
}

export default UserCard