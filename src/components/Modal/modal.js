import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Cupos from './cupos';
import DatosNewEvent from './datos';


export default class DialogExampleDialogDatePicker extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create Event" onClick={this.handleOpen} />
        <Dialog
          title="New Event"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          
          Nombre
          <DatosNewEvent />
          Fecha
          <DatePicker hintText="Date Picker" />
          Cupos
          <Cupos />

        </Dialog>
      </div>
    );
  }
}