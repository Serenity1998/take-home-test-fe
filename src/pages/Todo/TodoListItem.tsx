'use client'

import Image from "next/image";
import { TaskModel } from "@/types/global";
import completed_circle from "@/assets/icons/completed_icon.svg";
import delete_icon from "@/assets/icons/delete.svg"

interface TodoListItemProps {
    model: TaskModel;
    onComplete: () => void;
    onDelete: () => void;
}

const TodoListItem = (props: TodoListItemProps) => {
    const activeClassname = 'bg-lightGray border-white'
    const inActiveClassname = 'bg-gray200'

    const activeBtn = <div className="w-[17.45] h-[17.45] border-[2px] border-primary rounded-xl"></div>
    const inActiveBtn = <Image src={completed_circle} width={18} height={18} alt="" />

    return <div className={`p-4 rounded-md flex items-center gap-3 ${props.model.completed ? activeClassname : inActiveClassname}`}>
        <button onClick={props.onComplete}>
            {props.model.completed ? inActiveBtn : activeBtn}
        </button>
        <p className="flex-1 text-md p-0">{props.model.title}</p>
        <button onClick={props.onDelete} className="p-2 text-gray100">
            <Image src={delete_icon} width={14} height={18} alt="" />
        </button>
    </div>
}

export default TodoListItem