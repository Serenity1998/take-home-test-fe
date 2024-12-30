'use client'

import { useEffect, useState } from "react"
import { useLazyGetTaskListQuery } from "@/store/CommonApi"
import { TaskModel } from "@/types/global"
import Tag from "@/components/ui/Tag"
import TodoListItem from "./TodoListItem"


const TodoList = () => {
    const [getList, loading] = useLazyGetTaskListQuery()
    const [list, setList] = useState<TaskModel[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await getList()
        setList(result.data?.tasks ?? [])
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
        {
            list.map((i, inx) => <div key={`list_item-${inx}`}>
                <TodoListItem
                    model={i}
                    onComplete={() => { console.log("complete") }}
                    onDelete={() => { console.log("delete") }} />
            </div>)
        }
    </>
}

export default TodoList