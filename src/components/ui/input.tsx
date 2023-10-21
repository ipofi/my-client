
type Props = {
    label?: string, error?: string
} & React.ComponentProps<'input'>;

const Input = ({ label, error, ...rest }: Props) => {
    return (
        <>

            {label && <label htmlFor="" className="block text-left text-[.8rem]">{label}</label>}
            <input className="w-full px-3 py-[0.4rem] placeholder:italic rounded-md" {...rest} />
            {error && <small className="block text-red-600 text-left italic">{error}</small>}
        </>
    )
}

export default Input