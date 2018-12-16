import React, { Component } from 'react';
import { List, Button, Row, Col, Popover } from 'antd';

import ShoppingListItem from '../ShoppingListItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FilterInput from './FilterInput';
import AddItemForm from './AddItemForm';

class ShoppingList extends React.Component {
    constructor(props) {

        super(props);
        const { items } = props;
        this.state = {
            items: props.items,
            filterName: '',
            addFormVisible: false
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ items: nextProps.items });
    }

    onDragEnd = result => {
        console.log('onDragEnd:', result);
        const newOrder = result.destination.index;
        const id = result.draggableId;
        this.props.changeOrder(id, newOrder);

    }

    onFilterInputChange = (value) => {
        this.setState({ filterName: value });
    }

    applyFilters = (items) => {
        if (this.state.filterName) {
            items = items.filter(item => item.name.indexOf(this.state.filterName) > -1)
        }
        return items;
    }

    render() {

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
                                                    onChange={(value) => this.setState({ filterName: value })}
                                                />
                                            </div>
                                        }
                                        footer={
                                            <div>
                                            <Row>
                                                <Col span={4} offset={4}>
                                                    <Popover
                                                        content={<AddItemForm/>}
                                                        title="Add new Item"
                                                        trigger="click"
                                                        visible={this.state.addFormVisible}
                                                         
                                                    >
                                                        <Button 
                                                            block 
                                                            onClick={()=>this.setState({addFormVisible:true})}
                                                            disabled={this.state.addFormVisible!==true}
                                                        >
                                                            Add
                                                        </Button>
                                                    </Popover>
                                                </Col>
                                            </Row>
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
                                                                    key={item.id}
                                                                    id={item.id}
                                                                    name={item.name}
                                                                    qty={item.qty}
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