const redux = require('redux');

// Actions 
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "Toggle TODO";

// Actions Creators

const addToDo = (text)=>({text,type:ADD_TODO});
const toggleToDO = (index)=>({index,type:TOGGLE_TODO});

// initial State
const initialState={
  todos:[]
}

// Reducers
// must return updeated state

function todoReducer(state=initialState,action){
  switch(action.type){
    case ADD_TODO:
      return{
        ...state,
        todos:[
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      }        
    case TOGGLE_TODO:
      return{
        ...state,
        todos: state.todos.map((todo,i) => {
          if(i==action.index){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }
    default:
      return state;
  }
}

//  Creating store
const store = redux.createStore(todoReducer);

// dispatch actions
store.dispatch(addToDo("Study at 8"));
store.dispatch(addToDo("office at 9"));
store.dispatch(toggleToDO(0));

//  READ DATA FROM STORE
console.log(store.getState());