import React, {useContext, useReducer} from "react";
import ReactDOM from 'react-dom';
import App from './App';

import Context from "./Reducer/context";
import reducer from "./Reducer";


const Root = () => {
  const initialState=useContext(Context)
  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <Context.Provider value={{state,dispatch}}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
  <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);

