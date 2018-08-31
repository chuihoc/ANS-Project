import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'white',
  boxShadow: '1px 2px #E0E0E0',
  // styles we need to apply on draggables
  ...draggableStyle
});

class Drag extends React.Component {

  render() {
    const { item, index } = this.props;
    return(
      <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}>
            {item.text}<br />
            <p style={{ direction: 'rtl', marginBottom: 0, color: item.cardId === 1 && 'red' }}>{item.start_date}</p>
          </div>
        )}
      </Draggable>
    )
  }
}

export default Drag;