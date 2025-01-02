export interface SkeletonProps {
    height: string;
    width: string;
}

const Skeleton = (props: SkeletonProps) => {
    return <div className={`animate-pulse ${props.width} ${props.height} rounded-md bg-gray200`}></div>
}

export default Skeleton