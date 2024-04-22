import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";
import { animals } from "./animalsList";
import { useState } from "react";

function App() {
  const [animalsData, setAnimalsData] = useState(animals);
  const removeCard = (animal) => {
    const updatedArray = animalsData.filter((item) => item.name !== animal);
    setAnimalsData(updatedArray);
  };

  //console.log(animal, "remove card was triggered");

  const likesHeandler = (animal, action) => {
    const updatedArray = animalsData.map((item) => {
      if (item.name === animal) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 };
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item;
      }
    });
    setAnimalsData(updatedArray);

    //console.log(animal, "add likes was triggered");
  };

  return (
    <>
      <Header />
      <h2>HEAR MY ROAR</h2>
      {animalsData.map((animal) => (
        <Card
          key="{animal.name}"
          {...animal}
          removeLikes={() => likesHeandler(animal.name, "remove")}
          addLikes={likesHeandler.bind(this, animal.name, "add")}
          removeCard={() => removeCard(animal.name)}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
