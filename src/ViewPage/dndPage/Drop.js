import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Drag from './Drag';

const grid = 20;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : '#E0F7FA',
  padding: grid,
  width: '33%'
});

class Drop extends React.Component {

  render() {
    const { data, droppableId, title } = this.props;
    return(
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            <div className="title-drop">
              <span>{title}</span>&nbsp;
              <span>{`(${this.props.data.length})`}</span>
            </div>
            {data.map((item, index) => (
              <Drag item={item} index={index}/>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}

export default Drop;