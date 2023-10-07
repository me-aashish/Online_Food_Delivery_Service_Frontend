const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(20).fill("").map((ele,index)=><div className="simmer-card" key={index}></div>)}
        </div>
    )
};

export default Shimmer;