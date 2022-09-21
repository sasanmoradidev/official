import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hey there!</p>
    </div>
  );
}

const myname = "sasan";
const Search = () => {
  const Salam = ({ num2: { num22 } }) => {
    const [arri, arri2, set] = ['ali', 'reza', 'hasan']
    console.log(set);
    return (<p>{'salam' + num22 + ' ' + arri2}</p>)
    // return (<p>salam</p>)
  }
  let name = "sasan";
  let sound = "hi";
  const skier = {
    name,
    sound,
    powderYell() {
      let yell = this.sound.toUpperCase();
      console.log(`${yell} ${yell} ${yell}!!!`);
    },
    newfetch() {
      fetch("https://dummy.restapiexample.com/api/v1/employees")
        .then(res => res.json())
        .then(data => data.data)
        .then(console.log)
        .catch(console.error);
    },
    speed(mph = myname) {
      this.speed = mph;
      console.log("speed:", mph);
    }
  };
  skier.powderYell();
  skier.speed();
  // skier.newfetch();

  const createScream = function (logger) {
    return function (message) {
      logger(message.toUpperCase() + "!!!");
    };
  };
  const scream = createScream(message => console.log(message));
  scream("functions can be returned from other functions");
  scream("createScream returns a function");
  scream("scream invokes that returned function");

  function step1(path) {
    return function (stepvalue) {
      path(stepvalue + "!!!")
    }
  };
  const step2 = step1(stepvalue => {
    stepvalue += 5;
    return console.log(stepvalue)
  });

  step2(10);


  let ournames = {
    num1: 'Ali',
    num2: {
      num21: 'Reza',
      num22: 'Hasan'
    },
    number: 8
  };

  function names(name, number) {
    name.number = number;
    return name;
  }

  console.log(names(ournames, 3).number);
  console.log(ournames.number);




  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const ali = hasan => reza => hasan(reza);
  ali((inp) => console.log(inp))("mine number");
  
  const elem = 
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "2 lb salmon"),
    React.createElement("li", null, "5 sprigs fresh rosemary"),
    React.createElement("li", null, "2 tablespoons olive oil"),
    React.createElement("li", null, "2 small lemons"),
    React.createElement("li", null, "1 teaspoon kosher salt"),
    React.createElement("li", null, "4 cloves of chopped garlic")
    );
  console.log( elem )

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <div>{Salam(ournames)}</div>
    </div>
  );
};
export { App, Search };
