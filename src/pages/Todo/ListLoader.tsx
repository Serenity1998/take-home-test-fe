import Skeleton from "@/components/ui/Skeleton"

const FormListLoader = () => {
    return <div className="flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, index) => <Skeleton key={`skeleton_form-list-${index}`} width="w-full" height="h-14" />)}
    </div>
}

export default FormListLoader