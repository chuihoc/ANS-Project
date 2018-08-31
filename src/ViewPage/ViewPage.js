import React from 'react';
import { Tabs } from 'antd';
import { connect } from "react-redux";

import { updateData } from '../action/viewPage';

import 'antd/dist/antd.css';
import TablePage from './TablePage';
import DragDrop from './dndPage/DragDrop';

class ViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data
    }
  }

  updateData = (itemId, droppableId) => {
    const dataTemp = this.state.dataSource;
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
    this.setState({dataSource: dataTemp})
    this.props.updateData(dataTemp)

  }
  render() {
    const TabPane = Tabs.TabPane;
    const { dataSource } = this.state;
    return(
      <div style={{ padding: 20 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1"><DragDrop dataSource={dataSource} updateData={this.updateData}/></TabPane>
          <TabPane tab="Tab 2" key="2"><TablePage dataSource={dataSource}/></TabPane>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.viewPage.data
});

const mapDispatchToProps = dispatch => ({
  updateData: dataUpdate => {
    dispatch(updateData(dataUpdate));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
