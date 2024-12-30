import HeaderLogo from "@/components/layout/HeaderLogo";
import { TodoList } from "@/pages/Todo";

export default function Home() {

  return (
    <>
      <HeaderLogo />
      <main className="main_content flex flex-col gap-12">
        <TodoList />
      </main>
    </>
  );
}
