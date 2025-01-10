import CandyCard from "./CandyCard";
import candies from "./candyData.js";

const CandyList = () => {
    return (
        <div className="candy_container">
            {candies.map((candy, index) => (
                <CandyCard key={index} candy={candy} />
            ))}
        </div>
    );
}
export default CandyList;