import React, { useReducer, useEffect } from "react";

// Styles
import "./styles.css";

// Data
import initialState from "./initialstate";
import { reducer, StoreContext, actions } from "./reducer";

// Components
import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";

export default props => {    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      // simulate loading of items from an API
      dispatch({
          type: actions.GET_ITEMS
      });

      setTimeout(() => {
          dispatch({
          type: actions.GET_ITEMS_SUCCESS
          });
      }, 2000);
    }, []);

    console.log(state);

    //The line, <StoreContext.Provider value={{ dispatch, state }}> allows us to pass down,
    //the dispatch function and store state to child components.
    //This is a key part of the process as they allow us to access dispatch and state from child components

    return (
      <StoreContext.Provider value={{ dispatch, state }}>
        <h1>Redux fun with shopping lists</h1>
        <hr />
        {state.loadingItems && <div className="loading">...loading</div>}
        {!state.loadingItems && (
            <div className="columns">
            <div className="column">
                <h2>Add a new item</h2>
                <AddItem />
            </div>
            <div className="column">
                <h2>Shopping list</h2>
                <ShoppingList />
            </div>
            </div>
        )}
      </StoreContext.Provider>
    );
};
