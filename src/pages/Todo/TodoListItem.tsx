'use client'

import Image from "next/image";
import Link from "next/link";
import { TaskRequest } from "@/types/global";
import completed_circle from "@/assets/icons/completed_icon.svg";
import delete_icon from "@/assets/icons/delete.svg";
import Button from "@/components/ui/Button";

interface TodoListItemProps {
    model: TaskRequest;
    loading: boolean;
    onComplete: (item: TaskRequest) => void;
    onDelete: () => void;
}

const TodoListItem = (props: TodoListItemProps) => {
    const activeClassname = 'bg-gray200 border-[1px] border-lightGray'
    const inActiveClassname = 'bg-gray200 border-[1px] border-gray200'

    const activeBtn = <div className="w-4 h-4 border-[2px] border-primary rounded-xl"></div>
    const inActiveBtn = <Image src={completed_circle} width={18} height={18} alt="" />

    return <div className={`p-4 rounded-md flex items-center gap-3 ${props.model.completed ? inActiveClassname : activeClassname}`}>
        <Button onClick={() => props.onComplete(props.model)} loading={props.loading}>
            {props.model.completed ? inActiveBtn : activeBtn}
        </Button>
        <Link href={`/detail?id=${props.model.id}`} className="flex-1 text-md text-stroke p-0 hover:opacity-90">
            <h6 className={props.model.completed ? 'text-strike text-gray100' : ''}>{props.model.title}</h6>
        </Link>
        <Button onClick={props.onDelete} className="p-2 text-gray100" loading={props.loading}>
            <Image src={delete_icon} width={14} height={18} alt="" />
        </Button>
    </div>
}

export default TodoListItem