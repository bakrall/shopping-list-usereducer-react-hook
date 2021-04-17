import React, { useContext } from "react";

// State
import {
    StoreContext,
    actions,
    createAction
} from "../reducer";

export default props => {
  const store = useContext(StoreContext);
  const state = store.state;
  const dispatch = store.dispatch;

  const handleRemoveItem = id => {
    dispatch(createAction(actions.REMOVE_ITEM, id));
  };

  return (
    <>
      {!state.shoppingList && <p>no items in list</p>}
      {state.shoppingList && (
      <table>
          <thead>
          <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {state.shoppingList &&
              state.shoppingList.map(item => (
              <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>£{item.price}</td>
                  <td>
                  <button onClick={() => handleRemoveItem(item.id)}>
                      remove
                  </button>
                  </td>
              </tr>
              ))}
          </tbody>
      </table>
      )}
    </>
  );
};
