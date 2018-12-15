import React, { Component } from 'react';
import { List } from 'antd';
import ShoppingListItem from '../ShoppingListItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FilterInput from './FilterInput';

class ShoppingList extends React.Component {
    constructor(props){
        
        super(props); 
        const {items} = props;
        this.state = {
            items:props.items,
            filterName:''
        };
        
    }
    
    onDragEnd = result => {
        console.log('onDragEnd:', result);
    }

    onFilterInputChange = (value) => {
        this.setState({filterName:value});
    }

    applyFilters = (items) => {
        if(this.state.filterName){
            items = items.filter(item => item.name.indexOf(this.state.filterName) > -1)
        }
        return items;
    }

    render(){
        const items = this.applyFilters(this.state.items);
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="droppable-1" type="PERSON">
                    {
                        (provided, snapshot) => {
                            return (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <List
                                        header={
                                            <div>
                                                <FilterInput 
                                                    onChange={(value)=>this.setState({filterName:value})} 
                                                />
                                            </div>
                                            }
                                        bordered
                                        dataSource={items}
                                        renderItem={(item, index) => {
                                            return (
                                                <Draggable draggableId={item.id} index={index}>
                                                    {
                                                        (provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <ShoppingListItem
                                                                    name={item.name}
                                                                    sum={item.sum}
                                                                    labels={[]}
                                                                />
                                                            </div>
                                                        )
                                                    }
    
                                                </Draggable>
                                            )
                                        }
                                        }
                                    >
                                        {provided.placeholder}
                                    </List>
                                </div>
                            )
                        }
                    }
                </Droppable>
            </DragDropContext>
        )
    }

}

 
export default ShoppingList;