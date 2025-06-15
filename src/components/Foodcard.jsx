const FoodCard = ({ name,location, image }) => {
    return ( 
    <div className = "food-card">
        <img src = {image} alt = {name} />
        <h3>{name}</h3>
        <p>{location}</p>
    </div>
    );
};
        
export default FoodCard;

