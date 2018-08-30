import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource
    };
  }

  getStatus = status => {
    if (status === '0') return <span style={{ color: '#00B0FF' }}>New</span>;
    if (status === '1') return <span style={{ color: '#00E5FF' }}>In Progress</span>;
    if (status === '2') return <span style={{ color: '#9CCC65' }}>Complete</span>;
  };
  handleTime = (value, item) => {
    const date = new Date(item[value] * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const time = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    if (value === 'startTime') return <span>{time}</span>
    return <span style={{ color: item.status === '1' && 'red' }}>{time}</span>
  };
  handleDuration = item => {
    const timeStamp = item.dueTime - item.startTime;
    const duration =
      timeStamp < 60 ? `${timeStamp} s` :
        timeStamp < 3600 ? `${(timeStamp/60).toFixed(0)} min` :
        timeStamp < 86400 ? `${(timeStamp/3600).toFixed(0)} h` : `${(timeStamp/86400).toFixed(0)} d`;
    return <span>{duration}</span>
  };

  handleChange = (pagination, filters, sorter) => {
    // console.log(pagination, filters, sorter);
    if (filters.status) {
      if(filters.status.length > 0) {
        const dataTable = [...this.props.dataSource];
        const result = dataTable.filter(item => (filters.status.includes(item.status)));
        this.setState({ dataSource: result });
      } else {
        this.setState({ dataSource: this.props.dataSource });
      }

    }
  };

  render() {
    const { dataSource } = this.state;
    const columns = [
      {
        title: '',
        width: 54,
        render: (text, record, index) => index + 1,
        key: 'key'
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: 'Start',
        render: item => <span>{this.handleTime('startTime', item)}</span>,
        key: 'startTime'
      },
      {
        title: 'Due',
        render: item => <span>{this.handleTime('dueTime', item)}</span>,
        key: 'dueTime'
      },
      {
        title: 'Duration',
        render: item => <span>{this.handleDuration(item)}</span>,
        key: 'duration'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: status => <span>{this.getStatus(status)}</span>,
        key: 'status',
        filters: [
          { text: 'New', value: 0 },
          { text: 'In Progress', value: 1 },
          { text: 'Complete', value: 2 },
        ]
      },
      {
        title: 'Assigned to',
        render: () => '',
        key: 'assign'
      },
    ];
    return(
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        onChange={this.handleChange}
      />
    )
  }
}

export default TablePage;