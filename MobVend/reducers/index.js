import { combineReducers } from 'redux';
import repos from "./repos";
import vendors from "./vendors";


const mobVendApp = combineReducers({
  repos,
  vendors,
})

export default mobVendApp;