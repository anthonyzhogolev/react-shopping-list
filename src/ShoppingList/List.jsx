import React, { Component } from 'react';
import { Row, Button,List,   Col, Popover,Dropdown ,Modal} from 'antd';

import ShoppingListItem from '../ShoppingListItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FilterInput from './FilterInput';
import AddItemForm from './AddItemForm';
import ItemMenu from './ItemMenu';
import SortingPanel from '../SortingPanel/index';

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

    handleAddFormSubmit=(item)=>{
        this.props.addItem(item);
        this.setState({addFormVisible:false});
    }

    confirm( context,onOk) {
        Modal.confirm({
          title: null,
          content: context,
          okText: 'OK',
          cancelText: 'CANCEL',
          onOk:onOk,

        });
      }

    deleteItem = (itemId)=>{
        this.confirm(
            "Are You sure you want delete item",
            ()=>this.props.deleteItem(itemId)
        );
    }

    markAsReadItem = (itemId)=> {
        this.confirm(
            "Are You sure you want mark item as read",
            ()=>this.props.markAsReadItem(itemId)
        );
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
                                                 <SortingPanel/>
                                            </div>
                                             

                                        }
                                        footer={
                                            <div>
                                            <Row>
                                                <Col span={4} offset={4}>
                                                    <Popover
                                                        content={
                                                            <AddItemForm 
                                                                handleSubmit={this.handleAddFormSubmit} 
                                                                handleCancel={()=>this.setState({addFormVisible:false})}
                                                            />
                                                            }
                                                        title="Add new Item"
                                                        trigger="click"
                                                        visible={this.state.addFormVisible}
                                                         
                                                    >
                                                        <Button 
                                                            block 
                                                            onClick={()=>this.setState({addFormVisible:true})}
                                                            disabled={this.state.addFormVisible}
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
                                                
                                                <Draggable  draggableId={item.id} index={index}>
                                                    {
                                                        (provided, snapshot) => (
                                                            <Dropdown                                                                 
                                                                overlay={
                                                                    <ItemMenu
                                                                        deleteHandle ={()=>this.deleteItem(item.id)} 
                                                                        markAsReadHandle ={()=>this.markAsReadItem(item.id)} 
                                                                    />
                                                                } 
                                                                trigger={['contextMenu']}
                                                            > 
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
                                                                        isRead={item.isRead}
                                                                        labels={[]}
                                                                    />
                                                               
                                                            </div>
                                                            </Dropdown>
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