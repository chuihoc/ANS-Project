import React from 'react';
import { Tabs } from 'antd';
import { connect } from "react-redux";

import { updateData, deleteItem } from '../action/viewPage';

import 'antd/dist/antd.css';
import TablePage from './TablePage';
import DragDrop from './dndPage/DragDrop';
import ModalContainer from './Modal/ModalContainer';

class ViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      titleModal: '',
      dataModal: null,
      typeModal: ''
    }
  }

  updateData = (itemId, droppableId) => {
    const dataTemp = this.props.data;
    dataTemp.forEach(item => {
      if(item.id === itemId) {
        if (droppableId === "droppableId1") {
          item.cardId = 0;
        } else if(droppableId === "droppableId2")
          item.cardId = 1;
        else
          item.cardId = 2;
      }
    });
    this.props.updateData(dataTemp)

  }

  handleAddTag = droppableId => {
    this.setState({ 
      visibleModal: true,
      titleModal: droppableId === "droppableId1" ? "New" : (droppableId === "droppableId2" ? "In Progress" : "Completed"),
      typeModal: "Add"
    })
  }

  handleEditTag = item => {
    this.setState({ 
      visibleModal: true,
      titleModal: item.cardId === 0 ? "New" : (item.cardId === 1 ? "In Progress" : "Completed"),
      dataModal: item,
      typeModal: "Edit"
    })
  }

  handleDeleteTag = item => {
    this.props.deleteItem(item);
  }

  handleCloseTag = () => {
    this.setState({
      visibleModal: false,
      titleModal: ""
    })
  }

  handleOkTag = () => {
    // action
    this.handleCloseTag();
  }

  render() {
    const TabPane = Tabs.TabPane;
    const { handleAddTag, visibleModal, titleModal, dataModal, typeModal } = this.state;
    console.log("aaaa", this.props.data)
    return(
      <div style={{ padding: 20 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            <DragDrop 
              dataSource={this.props.data} 
              updateData={this.updateData} 
              handleAddTag={this.handleAddTag} 
              handleEditTag={this.handleEditTag} 
              handleDeleteTag={this.handleDeleteTag} />
            </TabPane>
          <TabPane tab="Tab 2" key="2"><TablePage dataSource={this.props.data}/></TabPane>
        </Tabs>
        {visibleModal && 
          <ModalContainer
            titleModal={titleModal}
            visible={visibleModal} 
            handleCloseTag={this.handleCloseTag}
            handleOkTag={this.handleOkTag}
            dataModal={dataModal} 
            typeModal={typeModal}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.viewPage.data,
  isFeching: state.viewPage.isFeching
});

const mapDispatchToProps = dispatch => ({
  updateData: dataUpdate => {
    dispatch(updateData(dataUpdate));
  },
  deleteItem: item => {
    dispatch(deleteItem(item));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
