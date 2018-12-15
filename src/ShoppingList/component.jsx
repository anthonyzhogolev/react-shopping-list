import React, { Component } from 'react';
import { List } from 'antd';
import ShoppingListItem from '../ShoppingListItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const ShoppingList = (props) => {

    const { items } = props;

    const onDragEnd = result => {
        console.log('onDragEnd:', result);
    }

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
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
                                    header={<div>Header</div>}
                                    bordered
                                    dataSource={items}
                                    renderItem={(item ) => (
                                        <Draggable draggableId={item.id} index={item.order}>
                                            {
                                                (provided, snapshot)=>(
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
                                    )}
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

export default ShoppingList;