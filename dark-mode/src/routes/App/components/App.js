import React, { useState, useLocalStorage } from "react";
// import useLocalStorage from 'use-local-storage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";
import "../../../styles/_dark-mode.scss";

function App() {
  const [state, setState] = useState(false);
  const [classmode, setClassmode] = useState(
    "app__dark-mode-btn-toggled icon level-right"
  );
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    // theme === "light" ? setTheme("dark") : setTheme("light");

    if (state === true) {
      console.log("It's dark mode");
      setState(!state);
      setClassmode("app__dark-mode-btn-toggled icon level-right");
      setTheme("dark");
    } else {
      console.log("It's light mode");
      setState(!state);
      setClassmode("app__dark-mode-btn icon level-right");
      setTheme("light");
    }
  };

  return (
    <div className={theme === "light" ? "app" : "app dark-mode"}>
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>
        <button className={classmode} onClick={toggle}>
          {state ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );

  // if toggled, change its state
}

export default App;
