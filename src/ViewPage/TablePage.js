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

  getStatus = cardId => {
    if (cardId === 0) return <span style={{ color: '#00B0FF' }}>New</span>;
    if (cardId === 1) return <span style={{ color: '#00E5FF' }}>In Progress</span>;
    if (cardId === 2) return <span style={{ color: '#9CCC65' }}>Complete</span>;
  };

  handleChange = (pagination, filters, sorter) => {
    // console.log(pagination, filters, sorter);
    if (filters.cardId) {
      if(filters.cardId.length > 0) {
        const dataTable = [...this.props.dataSource];
        const result = dataTable.filter(item => (filters.cardId.includes(item.cardId.toString())));
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
        render: (text, item, index) => index + 1,
        key: 'key'
      },
      {
        title: 'Title',
        dataIndex: 'text',
        key: 'text'
      },
      {
        title: 'Start',
        dataIndex: 'start_date',
        key: 'start_date'
      },
      {
        title: 'Due',
        dataIndex: 'due_time',
        render: (text, item) => <span style={{ color: item.cardId === 1 && 'red' }}>{text}</span>,
        key: 'due_time'
      },
      {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration'
      },
      {
        title: 'Status',
        dataIndex: 'cardId',
        render: cardId => <span>{this.getStatus(cardId)}</span>,
        key: 'cardId',
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