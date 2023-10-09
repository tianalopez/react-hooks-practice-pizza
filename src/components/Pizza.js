import React from "react";

function Pizza({pizza, onEdit}) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian?"Yes":"No"}</td>
      <td>
        <button onClick={() => onEdit(pizza.id)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
