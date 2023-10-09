import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({
    topping: "",
    size: "",
    vegetarian: "",
  })

  //fetch pizza data
  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(r => r.json())
      .then((array) => setPizzas(array))
      .catch(err => alert(err))
  }, [])
  //grab pizza id to edit
  const onEdit = (selectedPizzaId) => {
    const selectedPizza = pizzas.find((pizza) => (
      pizza.id === selectedPizzaId
    ))
    setEditPizza(selectedPizza)
  }
  //reset editPizza with new info
  const onChangeForm = (key, value) => {
    setEditPizza({...editPizza, [key]: value})
    console.log(editPizza)
  }

  //form submission modify pizzas array
  const onSubmit = (pizzaObj) => {
    const editedArray = pizzas.map((pizza) => {
      if (pizza.id === pizzaObj.id) {
        return pizzaObj
      }
      else {
        return pizza
      }
    })
    setPizzas((newArray) => editedArray)
  }

  return (
    <>
      <Header />
      <PizzaForm onChangeSelect={onChangeForm} onChangeRadio={onChangeForm} pizza={editPizza} onSubmit={onSubmit}/>
      <PizzaList pizzas={pizzas} onEdit={onEdit}/>
    </>
  );
}

export default App;
