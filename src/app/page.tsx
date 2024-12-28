import HeaderLogo from "@/components/common/HeaderLogo";

export default function Home() {
  return (
    <>
      <HeaderLogo />
      <main className="main_content flex flex-col gap-12">
        <div className="flex justify-between">
          <p className="font-semibold text-primary text-md">
            Tasks <span className="ml-1 text-white rounded-lg py-[2px] px-2 bg-lightGray text-sm">0</span>
          </p>
          <p className="font-semibold text-secondary text-md">
            Completed <span className="ml-1 text-white rounded-lg py-[2px] px-2 bg-lightGray text-sm">0</span>
          </p>
        </div>
      </main>
    </>
  );
}
