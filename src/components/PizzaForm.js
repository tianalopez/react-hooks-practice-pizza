import React, {useState, useEffect} from "react";

function PizzaForm({onChangeSelect, onChangeRadio, pizza, onSubmit}) {
  console.log(pizza.id)
  //grab values
  const handleChangeSelect = (e) => {
      onChangeSelect(e.target.name, e.target.value)
  }
  const handleChangeRadio = (e) => {
      onChangeRadio(e.target.name, e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pizza)
    })
    .then(r => r.json())
    .then(onSubmit(pizza))
    .catch(err => alert(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizza.topping}
            onChange={handleChangeSelect}
          />
        </div>
        <div className="col">
          <select value={pizza.size} onChange={handleChangeSelect} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleChangeRadio}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleChangeRadio}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={pizza.vegetarian ?false : true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
