
import { combineReducers } from 'redux'
import itemOrders from './itemOrders';
import items, * as fromItems from './items';
import sortBy from './sortBy';
import filters from './filters';

export default combineReducers({
   items, itemOrders, sortBy,filters
});

export const getSortedItems = (state) => {
   console.log('getSortedItems',state);
   
   const filteredItems = fromItems.filterItems(state.items,state.filters);
   
   if(state.sortBy.columnName!==null){       
      return fromItems.getColumnSortedItems(filteredItems,state.sortBy.columnName,state.sortBy.direction);
   }
   const itemOrders = state.itemOrders.filter((itemOrder)=>filteredItems.find((item)=>item.id===itemOrder.itemId));
   console.log('itemsOrders',itemOrders);
   return (fromItems.getDndSortedItems(filteredItems, itemOrders));
}

 
