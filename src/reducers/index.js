
import { combineReducers } from 'redux'
import itemOrders from './itemOrders';
import items, * as fromItems from './items';
import sortBy from './sortBy';
import filters from './filters';

export default combineReducers({
   items, itemOrders, sortBy
});

export const getSortedItems = (state) => {
   if(state.sortBy.columnName!==null){
      console.log('sortingColumn...')
      return fromItems.getColumnSortedItems(state.items,state.sortBy.columnName,state.sortBy.direction);
   }
   return (fromItems.getDndSortedItems(state.items, state.itemOrders))
}

 
