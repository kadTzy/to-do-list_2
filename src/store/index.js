
import { createStore } from 'redux';


const initialState = {
  todos: [],
};


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload }],
      };

    default:
      return state;
  }
};


export const store = createStore(todoReducer);
