import React from 'react';
import { Board } from 'react-trello';
import './Trello.css';

class Trello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {}
    }
  }

  componentWillMount = () => {
    this.settingData([...this.props.dataSource]);
  };

  shouldReceiveNewData = nextData => {
    console.log('New card has been added');
    console.log(nextData)
  };

  handleDragStart = (cardId, laneId) => {
    console.log('drag started');
    console.log(`cardId: ${cardId}`);
    console.log(`laneId: ${laneId}`)
  };

  handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended');
    console.log(`cardId: ${cardId}`);
    console.log(`sourceLaneId: ${sourceLaneId}`);
    console.log(`targetLaneId: ${targetLaneId}`);
    if (sourceLaneId !== targetLaneId) {
      this.props.changeStatus(cardId, sourceLaneId, targetLaneId)
    }
  };

  handleTime = (value, item) => {
    const date = new Date(item[value] * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const time = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    // if (value === 'startTime') return <span>{time}</span>;
    // return <span style={{ color: item.status === '1' && 'red' }}>{time}</span>
    return <span>{time}</span>
  };

  settingData = (dataSource) => {
    let boardData = {
      "lanes": [
        {
          "id": "0",
          "title": <p>New</p>,
          "label": "0",
          "style": {width: 480, backgroundColor: "#E1F5FE"},
          "cards": []
        },
        {
          "id": "1",
          "title": <p>In Progress</p>,
          "label": "0",
          "style": {width: 480, backgroundColor: "#E1F5FE"},
          "cards": []
        },
        {
          "id": "2",
          "title": <p>Completed</p>,
          "label": "0",
          "style": {width: 480, backgroundColor: "#E1F5FE"},
          "cards": []
        }
      ]
    }
    let numLane = [0, 0, 0];
    dataSource.forEach(item=> {
      numLane[item.status] = numLane[item.status] + 1;
      boardData.lanes[item.status].label = (`${numLane[item.status].toString()}`);
      boardData.lanes[item.status].cards.push({
        id: item.key,
        title: item.title,
        cardStyle: {width: 450, maxWidth: 450, margin: '0 5px 15px 0', border: '1px solid #eee', boxShadow: '1px 2px #e0e0e0'},
        cardColor: '#BD3B36',
        description: <p style={{direction: "rtl"}}>{this.handleTime('dueTime', item)}</p>
      })
    });
    this.setState({boardData: boardData})
  }

  render() {
    return(
      <Board
        style={{backgroundColor: "#fff", color: "rgba(0, 0, 0, 0.65)"}}
        draggable
        data={this.state.boardData}
        onDataChange={this.shouldReceiveNewData}
        handleDragStart={this.handleDragStart}
        handleDragEnd={this.handleDragEnd}
      />
    )
  }
}

export default Trello;