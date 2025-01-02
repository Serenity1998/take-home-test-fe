
import Image from "next/image";
import not_found_icon from "@/assets/icons/not_found.svg";

const NotFound = () => {
    return <div className="my-12 flex flex-col items-center gap-4 text-gray100">
        <Image src={not_found_icon} width={56} height={56} alt="not found icon" />
        <h1 className="font-semibold">You don't have any tasks registered yet.</h1>
        <p className="font-light"> Create tasks and organize your to-do items.</p>
    </div >
}

export default NotFound