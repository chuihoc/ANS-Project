import React from 'react';
import { Modal, Input, DatePicker } from 'antd';
import moment from 'moment';
import DropDown from '../DropDown/DropDown';
import './ModalContainer.css';

const duration = [
  { value: 1, label: 'hung.cv1' },
  { value: 2, label: 'hung.cv2' },
  { value: 3, label: 'hung.cv3' },
  { value: 4, label: 'hung.cv4' },
  { value: 5, label: 'hung.cv5' }
];
const assignedTo = [
  { value: 1, label: 'hung.cv1' },
  { value: 2, label: 'hung.cv2' },
  { value: 3, label: 'hung.cv3' },
  { value: 4, label: 'hung.cv4' },
  { value: 5, label: 'hung.cv5' }
];

class ModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.typeModal === 'Edit' ? props.dataModal : {
        cardId: 0,
        text: '',
        start_date: moment(new Date),
        due_time: '',
        duration: 0,
        order: 0,
        progress: 0,
        open: true,
        parent: 1
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataModal !== this.props.dataModal)
      this.setState({ data: nextProps.dataModal })
  }

  handleChangeTitleTag = (e) => {
    const dataTemp = { ...this.state.data };
    dataTemp.text = e.target.value;
    this.setState({ data: dataTemp })
  }

  handleChangeStartDate = (date) => {
    const dataTemp = { ...this.state.data };
    dataTemp.start_date = moment(date).format('DD-MM-YYYY');
    this.setState({ data: dataTemp })
  }

  render() {
    const { dataModal, titleModal, visible, handleOkTag, handleCloseTag, typeModal } = this.props;
    const { data } = this.state;
    console.log(data)
    return (
      <Modal
        title={titleModal}
        centered
        visible={visible}
        onOk={handleOkTag}
        onCancel={handleCloseTag}>
        <div className="item-content-modal">
          <div className="title-text">Title</div>
          <Input.TextArea
            placeholder="Enter title project"
            autosize
            value={data.text}
            style={{ width: '100%' }}
            onChange={this.handleChangeTitleTag}
          />
        </div>
        <div className="item-content-modal">
          <div className="title-text">Start date</div>
          <DatePicker
            defaultValue={moment(data.start_date, 'DD-MM-YYYY')}
            format="DD-MM-YYYY"
            style={{ width: '100%' }}
            onChange={this.handleChangeStartDate}
          />
        </div>
        <div className="item-content-modal">
          <div className="title-text select-option">Duration</div>
          <DropDown dataSelect={duration} style={{ width: '100%' }}/>
        </div>
        <div className="item-content-modal">
          <div className="title-text">Assigned to</div>
          <DropDown isMultiSelect dataSelect={assignedTo} isModal/>
        </div>
      </Modal>
    )
  }
}

export default ModalContainer;