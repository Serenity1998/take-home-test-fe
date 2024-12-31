'use client'

import Image from "next/image"
import Button from "@/components/ui/Button"

import delete_icon from "@/assets/icons/back_arrow.svg"
import Link from "next/link"
import addIcon from "@/assets/icons/add.svg"
import { COLORS } from "@/config/Api.constants"
import { useState } from "react"

const TodoForm = () => {
    const [colorInx, setColorInx] = useState(0)

    return <div className="flex flex-col justify-start gap-12">
        <Link href={'/'}>
            <Image className="p-1" src={delete_icon} width={24} height={24} alt="arrow_left" />
        </Link>
        <div className="flex flex-col gap-2">
            <p className="text-md font-semibold text-primary">Title</p>
            <input placeholder="Ex. Brush you teeth"></input>
            <p className="mt-4 text-md font-semibold text-primary">Color</p>
            <div className="flex gap-4">
                {
                    COLORS.map((i, inx) => <div key={`colors_${inx}`} className="cursor-pointer" onClick={() => setColorInx(inx)}>
                        <div className={`w-[52] h-[52] rounded-full`} style={{ backgroundColor: i.value }}></div>
                    </div>)
                }
            </div>
        </div>
        <Button className="btn primary flex items-center gap-2" onClick={() => { }}>
            <p className="mr-2">Add Task</p> <Image src={addIcon} width={16} height={16} alt="add" />
        </Button>
    </div>
}

export default TodoForm