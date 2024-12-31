'use client'

import { useEffect, useState } from "react"
import { useLazyDeleteTaskByIdQuery, useLazyGetTaskListQuery, useLazyUpdateTaskQuery } from "@/store/CommonApi"
import { TaskRequest } from "@/types/global"
import Tag from "@/components/ui/Tag"
import TodoListItem from "./TodoListItem"


const TodoList = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [getList, loading] = useLazyGetTaskListQuery()
    const [updateTask] = useLazyUpdateTaskQuery()
    const [deleteTask] = useLazyDeleteTaskByIdQuery()
    const [list, setList] = useState<TaskRequest[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await getList()
        setList(result.data?.tasks ?? [])
    }

    const onComplete = async (item: TaskRequest) => {
        setLoading(true)
        await updateTask({ ...item, completed: !item.completed }).then((response) => {
            console.log(response)
        }).catch(() => alert("Something is wrong with Task Update action"))
        setLoading(false)
    }

    const onDelete = async (id: string) => {
        setLoading(true)
        await deleteTask(id).then((response) => {
            console.log(response)
        }).catch(() => alert("Something is wrong with Task Update action"))
        setLoading(false)
    }

    return <>
        <div className="flex justify-between">
            <Tag
                color="primary"
                title={'tasks'}
                content={`${list.length}`}
            />
            <Tag
                color="secondary"
                title={'completed'}
                content={`${list.filter(i => i.completed).length == 0 ? 0 : `${list.filter(i => i.completed).length} of ${list.length}`}`}
            />
        </div>
        <div className="flex flex-col gap-3">
            {
                list.map((i, inx) => <div key={`list_item-${inx}`}>
                    <TodoListItem
                        model={i}
                        onComplete={onComplete}
                        onDelete={onDelete}
                        loading={isLoading} />
                </div>)
            }
        </div>
    </>
}

export default TodoList