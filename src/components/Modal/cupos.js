import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 1; i <= 50; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class Cupos extends Component {
  state = {
    value: 10,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {items}
      </SelectField>
    );
  }
}