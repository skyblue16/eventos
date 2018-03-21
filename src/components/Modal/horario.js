import React from 'react';
import TimePicker from 'material-ui/TimePicker';

export default class Hours extends React.Component {

  constructor(props) {
    super(props);
    this.state = {alue12: null};
  }

  handleChangeTimePicker12 = (event, date) => {
    this.setState({value12: date});
  };

  render() {
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
      </div>
    );
  }
}