import { createStoreHook } from 'react-redux';
import {Reducers} from '../reducers/Reducers';
import {Reducers2} from '../reducers/Reducers2';
import {AddressReducers} from '../reducers/AddressReducers';
import {combineReducers} from 'redux';
import {OrderReducers} from '../reducers/OrderReducers';
const routeReducer = combineReducers({
  Reducers,
  Reducers2,
  AddressReducers,
  OrderReducers,
});
export const store = createStoreHook(routeReducer);

// import { Reducers } from "../reducers/Reducers";
// import { createStoreHook } from "react-redux";

// const store = createStoreHook(Reducers);

// export default store;