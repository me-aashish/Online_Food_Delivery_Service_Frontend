const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(20).fill("").map(()=><div className="simmer-card"></div>)}
        </div>
    )
};

export default Shimmer;