interface TagProps {
    color?: string;
    title: string;
    content: string;
}

const Tag = ({ color = "primary", title, content }: TagProps) => {
    const textColor = {
        primary: "text-primary",
        secondary: "text-secondary",
    }[color] || "text-primary";

    return <p className={`font-semibold ${textColor} text-md capitalize`}>
        {title} <span className="ml-1 text-white rounded-lg py-[2px] px-2 bg-lightGray text-sm">{content}</span>
    </p>
}

export default Tag