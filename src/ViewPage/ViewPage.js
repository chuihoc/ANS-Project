import React from 'react';
import { Tabs } from 'antd';

import 'antd/dist/antd.css'; 
import Trello from './Trello';
import TablePage from './TablePage';

import data from './Data';

class ViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: data
    }
  }

  changeStatus = (cardId, sourceLaneId, targetLaneId) => {
    const dataTemp = this.state.dataSource;
    dataTemp[cardId - 1].status = targetLaneId;
    this.setState({dataSource: dataTemp})
  };
  render() {
    const TabPane = Tabs.TabPane;
    const { dataSource } = this.state;
    return(
      <div style={{ padding: 20 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1"><Trello dataSource={dataSource} changeStatus={this.changeStatus}/></TabPane>
          <TabPane tab="Tab 2" key="2"><TablePage dataSource={dataSource}/></TabPane>
        </Tabs>
      </div>
    )
  }
}

export default ViewPage;