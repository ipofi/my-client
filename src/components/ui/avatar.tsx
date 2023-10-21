
type Props = {
    src: string
}

const Avatar = ({ src }: Props) => {
    return (
        <>
            <img
                className="inline-block h-20 w-20 rounded-full border-2 border-slate-700"
                src={src}
                alt=""
            />
        </>
    )
}

export default Avatar