import { useState } from "react";

const CandyCard = ({ candy }) => {
    const[showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return (
        <div className="candy-card">
            <img 
                src={candy.image}
                alt={candy.description}
                style={{
                    padding: "10px 20px",
                    textAlign: "center",
                    color: "goldenrod",
                    background: "rgb(227, 136, 136)",
                    width: "150px",
                }}
            />
            <h3>{candy.name}</h3>
            <p>Ingredients: {candy.ingredients}</p>

            <button onClick={handleOpenModal}>Show Calories</button>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>Calorie Information</h4>
                        <p>{candy.calories} calories</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CandyCard;