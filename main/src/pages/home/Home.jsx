import { useState } from "react";
import "./Home.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Home = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

  return (
    <main className="container">
        <h1>BSIT 2-A</h1>
        <h2>Text: {count}</h2>
        <Button btnName="Addition Count" onclick={increment}/>
        <Button btnName="Subtraction Count" onclick={decrement}/>
    </main>
  );
}

export default Home;