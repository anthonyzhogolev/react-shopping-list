
import { combineReducers } from 'redux'
import itemOrders from './itemOrders';
import items, * as fromItems from './items';


export default combineReducers({
   items, itemOrders
});

export const getSortedItems = (state) => {
   console.log('getSortItems root',state.itemOrders);
   return (fromItems.getSortedItems(state.items, state.itemOrders))
}

 
