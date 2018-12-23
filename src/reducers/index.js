
import { combineReducers } from 'redux'
import itemOrders from './itemOrders';
import items, * as fromItems from './items';
import sortBy from './sortBy';
import filters from './filters';
import labels from './labels';
import itemLabels from './itemsLabels';

export default combineReducers({
   items, itemOrders, sortBy, filters, labels, itemLabels
});

export const getSortedItems = (state) => {
   const filteredItems = fromItems.filterItems(state.items, state.filters);
   if (state.sortBy.columnName !== null) {
      return fromItems.getColumnSortedItems(filteredItems, state.sortBy.columnName, state.sortBy.direction);
   }
   const itemOrders = state.itemOrders.filter((itemOrder) => filteredItems.find((item) => item.id === itemOrder.itemId));
   return (fromItems.getDndSortedItems(filteredItems, itemOrders));
}




export const getItems = (state) => {

   const mainState = state;

   const items = getSortedItems(mainState).map((item) => {
      const itemLabels = mainState.labels.filter(
         (label) => (
            mainState.itemLabels.filter(
               (itemLabel) => (itemLabel.labelId == label.id && itemLabel.itemId == item.id)
            ).length > 0
         )
      );
      return Object.assign(item, { labels: itemLabels });
   });
   return items;
}