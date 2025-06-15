import logo from './logo.svg';
import './App.css';
// Import images from the assets folder
import IceCreamCart1 from "./assets/images/IceCreamCart1.jpg";
import MrSoftee1 from "./assets/images/mrsoftee1.jpeg";
import IceCreamCart2 from "./assets/images/icecreamcart2.jpg";
import Raspados1 from "./assets/images/raspados1.png";


import FruitCart from "./assets/images/fruitstand1.avif";
import PinchoCart from "./assets/images/pincho cart.jpg";
import FruitCart2 from "./assets/images/fruitstand2.jpg";
import MrSoftee2 from "./assets/images/mrsoftee2.jpg";
import HotdogCart from "./assets/images/hotdogcart1.jpg";
import HotdogCart2 from "./assets/images/hotdogcart2.jpg";

const IceCreamCard = (props) => {
  return (
    <div className="ice-cream-card">
      <p> {props.name}</p>
      <p> {props.location}</p>
      <p> {props.days}</p>
      <img src={props.image} alt={props.name} />


    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Jamaica Ave Treats</h1>

      <div className = "ice-cream-grid">
      <IceCreamCard
        name="Italian Ices"
        location="123 Main Street"
        days="M-F"
        image={IceCreamCart1} />

      <IceCreamCard
        name="Mister Softy"
        location="456 Elm Street"
        days="Sat-Sun"
        image={MrSoftee1}/>

      <IceCreamCard
        name="Italian Ices"
        location="789 Oak Avenue"
        days="Sat-Sun"
        image={IceCreamCart2} />

      <IceCreamCard
        name="Raspados"
        location="789 Oak Avenue"
        days="Mon-Fri"
        image={Raspados1} />


      <IceCreamCard
        name="Fresh Fruit Vendor"
        location="123 Pine Street"
        days="M-F"
        image={FruitCart} />

      <IceCreamCard
        name = "Skewer vendor"
        location="jamaica ave"
        days= "Sat-Sun"
        image={PinchoCart} />

      <IceCreamCard
        name="Fresh fruit vendor 2"
        location="Central Park"
        days="Everyday"
        image={FruitCart2} />

      <IceCreamCard
        name="Ice Cream Truck"
        location="Downtown"
        days="Everyday"
        image={MrSoftee2} />

      <IceCreamCard
        name="Hot dog cart"
        location="Brooklyn Bridge"
        days="Everyday"
        image={HotdogCart} />

      <IceCreamCard
        name="Hot dog cart 2"
        location="Times Square"
        days="Everyday"
        image={HotdogCart2} />
      </div>


    </div>
  );
};


export default App;
