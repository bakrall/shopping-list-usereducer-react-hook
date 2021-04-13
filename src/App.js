import React, { useReducer, useEffect } from "react";

// Styles
import "./styles.css";

// Data
import initialState from "./initialstate";
import { reducer, StoreContext, actions } from "./reducer";

// Components
// import AddItem from "./components/AddItem";
// import ShoppingList from "./components/ShoppingList";

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

    return (
        <div>The app has landed</div>
    );
};
