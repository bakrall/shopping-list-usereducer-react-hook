// We need React in scope to create our context objects
import React from "react";

// Context
// will be used to pass down the dispatch method and our
// application state via the Context Provider and consumed
// in child components using the useContext Hook
export const StoreContext = React.createContext(null);

// Action constants
// we will import this object and use the various properties
// in child objects when calling the dispatch method
export const actions = {
    GET_ITEMS: "get items",
    GET_ITEMS_SUCCESS: "get items success",
    ADD_ITEM: "add item",
    REMOVE_ITEM: "remove item"
};

// This is a simple helper function that will take a type
// (from the constants above) and a payload, which will be the
// value which needs to be affected in state it returns
// a simple object that will be passed to our dispatch function
export const createAction = (type, payload) => {
    return {
        type,
        payload
    };
};

// Reducer
// the function that accepts our app state, and the action to
// take upon it, which then carries out that action
export const reducer = (state, action) => {
    switch (action.type) {
        case actions.GET_ITEMS:
            return {
                ...state,
                loadingItems: true
            };
        case actions.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loadingItems: false
            };
        case actions.ADD_ITEM:
            const nextId = Math.max.apply(
                null,
                state.shoppingList.map(item => item.id)
            );
            const newItem = {
                ...action.payload,
                id: nextId + 1
            };
            return {
                ...state,
                shoppingList: [...state.shoppingList, newItem]
            };
        case actions.REMOVE_ITEM:
            return {
                ...state,
                shoppingList: state.shoppingList.filter(
                    item => item.id !== action.payload
                )
            };
        default:
            return state;
    }
};