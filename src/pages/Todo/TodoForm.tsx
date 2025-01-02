'use client'

import { useEffect, useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from 'next/navigation'

import Button from "@/components/ui/Button"
import { COLORS } from "@/config/Api.constants"
import { useCreateTaskMutation, useLazyUpdateTaskQuery, useLazyGetTaskQuery } from "@/store/CommonApi"
import delete_icon from "@/assets/icons/back_arrow.svg"
import addIcon from "@/assets/icons/add.svg"
import { TaskRequest } from "@/types/global"

const TodoForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams?.get("id");

    const [createTask, { isLoading: isCreating }] = useCreateTaskMutation()
    const [updateTask, { isLoading: isUpdating }] = useLazyUpdateTaskQuery()
    const [getTask] = useLazyGetTaskQuery()
    const [colorInx, setColorInx] = useState(0)
    const [title, setTitle] = useState<string>('')
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [errorTxt, setErrorTxt] = useState<string>()

    useEffect(() => {
        if (id) fetchData(id)
    }, [])

    const fetchData = async (id: string) => {
        await getTask(id)
            .then(result => {
                const data = result.data?.tasks
                const colorInx = COLORS.findIndex((i) => i.color == data?.color)
                setTitle(data?.title || "")
                setColorInx(colorInx)
                setIsComplete(data?.completed || false)
            })
            .catch(err => setErrorTxt(err))
    }

    const onCreateAndEdit = async () => {
        const color = COLORS.find((i, inx) => inx == colorInx)?.color
        if (title.trim() === '') return setErrorTxt("Title can't be empty")

        let task = {
            title: title,
            color: color || COLORS[0].color,
            completed: isComplete
        }
        if (id) {
            await updateTask({ ...task, id })
                .then((result) => {
                    console.log("Updated:", result)
                    if (result.data?.success) return router.back()
                    else setErrorTxt("Somethings wrong try again");
                })
                .catch((_) => setErrorTxt("Unable to connect to the server."))
        }

        else {
            await createTask(task)
                .then((result) => {
                    console.log("Created:", result)
                    if (result.data?.success) return router.back()
                    else setErrorTxt(result.data?.message)
                })
                .catch((_) => setErrorTxt("Unable to connect to the server."))
        }
    }

    return <div className="flex flex-col justify-start gap-12">
        <Link href={'/'}>
            <Image className="p-1" src={delete_icon} width={24} height={24} alt="arrow_left" />
        </Link>
        <div className="flex flex-col gap-2">
            <p className="text-md font-semibold text-primary">Title</p>
            <input placeholder="Ex. Brush you teeth" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <p className="mt-4 text-md font-semibold text-primary">Color</p>
            <div className="flex gap-4 overflow-scroll">
                {
                    COLORS.map((i, inx) => <div key={`colors_${inx}`} className="cursor-pointer" onClick={() => setColorInx(inx)}>
                        <div className="w-[52] h-[52] rounded-full" style={{ backgroundColor: i.value, border: colorInx == inx ? "solid 2px white" : "none" }}></div>
                    </div>)
                }
            </div>
            {errorTxt && <p className="text-error mt-4">{errorTxt}</p>}
        </div>
        <Button className="btn primary flex items-center gap-2" onClick={onCreateAndEdit} loading={isCreating || isUpdating}>
            <p className="mr-2">Add Task</p> <Image src={addIcon} width={16} height={16} alt="add" />
        </Button>
    </div>
}

export default TodoForm