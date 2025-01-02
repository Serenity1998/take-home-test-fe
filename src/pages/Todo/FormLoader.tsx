import Skeleton from "@/components/ui/Skeleton"

const FormSkeletonLoader = () => {
    return <div className="flex flex-col items-start gap-2">
        <div className="mt-10">
            <Skeleton width="w-6" height="h-4" />
        </div>
        <Skeleton width="w-full" height="h-2" />
        <Skeleton width="w-full" height="h-8" />
        <Skeleton width="w-full" height="h-2" />
        <Skeleton width="w-full" height="h-8" />
        <div className="mt-10">
            <Skeleton width="w-full" height="h-8" />
        </div>
    </div>
}

export default FormSkeletonLoader