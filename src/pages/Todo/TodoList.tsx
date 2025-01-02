'use client'

import { useEffect, useState } from "react"
import { useLazyDeleteTaskByIdQuery, useLazyGetTaskListQuery, useLazyUpdateTaskQuery } from "@/store/CommonApi"
import { TaskRequest } from "@/types/global"
import Tag from "@/components/ui/Tag"
import { FormListLoader, NotFound, TodoListItem, } from "@/pages/Todo"


const TodoList = () => {
    const [isActionLoading, setActionLoading] = useState<boolean>(false)
    const [isLoading, setLoading] = useState(true)
    const [selected, setSelected] = useState<string>('')
    const [getList] = useLazyGetTaskListQuery()
    const [updateTask] = useLazyUpdateTaskQuery()
    const [deleteTask] = useLazyDeleteTaskByIdQuery()
    const [list, setList] = useState<TaskRequest[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await getList()
        setList(result.data?.tasks ?? [])
        setTimeout(() =>
            setLoading(false), 200)
    }

    const onComplete = async (item: TaskRequest) => {
        setActionLoading(true)
        setSelected(item.id)
        await updateTask({ ...item, completed: !item.completed }).then((response) => {
            console.log(response)
        }).catch(() => alert("Something is wrong with Task Update action"))
        setActionLoading(false)
    }

    const onDelete = async (id: string) => {
        setActionLoading(true)
        setSelected(id)
        await deleteTask(id).then((response) => {
            console.log(response)
        }).catch(() => alert("Something is wrong with Task Update action"))
        setActionLoading(false)
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
                isLoading ? <FormListLoader /> : list.length == 0 ? <NotFound /> : list.map((i, inx) => <div key={`list_item-${inx}`}>
                    <TodoListItem
                        model={i}
                        onComplete={onComplete}
                        onDelete={onDelete}
                        loading={isActionLoading}
                        selected={selected} />
                </div>)
            }
        </div>
    </>
}

export default TodoList