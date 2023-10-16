const Shimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array(20).fill("").map((ele,index)=><div className="w-52 h-72 bg-gray-100 m-4" key={index}></div>)}
        </div>
    )
};

export default Shimmer;