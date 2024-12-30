import HeaderLogo from "@/components/layout/HeaderLogo"
import { TodoForm } from "@/pages/Todo"

const TaskDetail = ({ params }: { params: { id: string } }) => {
    return <>
        <HeaderLogo />
        <main className="main_content flex flex-col gap-12">
            <TodoForm />
        </main>
    </>
}

export default TaskDetail