import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

class DropDown extends React.Component {

  handleChange = value => {
    // implement assigned function
    console.log('test', value);
  }
  render() {
    const { dataSelect, isMultiSelect, isModal } = this.props;
    if(isMultiSelect) {
      return(
        <Select
          mode="multiple"
          labelInValue
          style={{ width: '100%', maxWidth: !isModal && 250 }}
          onChange={this.handleChange}
        >
          {(dataSelect.length && dataSelect.length > 0) &&
            dataSelect.map(item => (
              <Select.Option value={item.value}>{item.label}</Select.Option>
            ))
          }
        </Select>
      )
    }
    return(
      <div style={{ position: 'relative', width: '100%' }} id="area">
        <Select
          defaultValue={dataSelect[0].label}
          getPopupContainer={() => document.getElementById('area')}
          style={{ width: '100%' }}
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