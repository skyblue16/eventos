import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import firebase from 'firebase';

class DatosNewEvent extends Component {
  constructor(){
    super();
    this.state = {
        mensaje: '',//almacena el valor del input
        mensajes: [],
    }
    this.submit = this.submit.bind(this)
    this.smsData = this.smsData.bind(this)
}
componentDidMount(){
  
  firebase.database().ref('mensajes/').on('value', snap => {
      const currentMessages = snap.val();
      if (currentMessages !== null) {
          this.setState({
              mensajes: currentMessages
          })
      }

  })
}

submit(e){
  e.preventDefault();
  console.log('diste enter')
const list = this.state.mensajes;
const newMessage = {
   id: this.state.mensajes.length,
   text: this.state.mensaje
}
// list.push(newMessage);
// this.setState({mensajes: list});
firebase.database().ref(`mensajes/${newMessage.id}`)
  .set(newMessage);
this.setState({mensaje: ''});
}
smsData(e){
//    console.log(e.target.value)
this.setState({mensaje: e.target.value});
console.log(this.state.mensaje)
}  
  
  render() {
    const {mensajes} = this.state;
    const messageList = mensajes.map(mensaje => {
        return <li key={mensaje.id}>{mensaje.text}</li>
    })
    console.log(messageList);
    
    return(
    <FormGroup onSubmit={this.submit}>
      <FormControl type="text" placeholder="Normal text"  />
      <div className="room">
      <ul className="cabina">            
                 {messageList}
                 </ul>
           <form action="" onSubmit={this.submit}>
            <input type="text" onChange={this.smsData} value={this.state.mensaje}/>
            <button>Send</button>
           </form>
           </div>
    </FormGroup>
    )
  }
 
}

export default DatosNewEvent;