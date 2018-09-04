import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

class DropDown extends React.Component {

  handleChange = value => {
    this.props.handleSelect(value);
  };
  render() {
    const { dataSelect, defaultValue, isMultiSelect, isModal } = this.props;
    if(isMultiSelect) {
      return(
        <Select
          mode="multiple"
          style={{ width: '100%', maxWidth: !isModal && 250 }}
          onChange={this.handleChange}
          defaultValue={defaultValue}
        >
          {(dataSelect.length && dataSelect.length > 0) &&
          dataSelect.map((item, index) => (
            <Select.Option key={index} value={item.value}>{item.label}</Select.Option>
          ))
          }
        </Select>
      )
    }
    return(
      <div style={{ position: 'relative', width: '100%' }} id="area">
        <Select
          defaultValue={defaultValue}
          getPopupContainer={() => document.getElementById('area')}
          style={{ width: '100%' }}
          onChange={this.handleChange}
        >
          {(dataSelect.length && dataSelect.length > 0) &&
          dataSelect.map(item => (
            <Select.Option value={item.value}>{item.label}</Select.Option>
          ))
          }
        </Select>
      </div>
    )
  }
}

export default DropDown;