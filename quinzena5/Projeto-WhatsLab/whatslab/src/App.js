import React from 'react';
import styled from 'styled-components'

const ContainerMaior = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 95vw;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
`
const ContainerMensagens = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`
const ContainerInputs = styled.div`
  display: flex;
`

const InputUsuario = styled.input`
  width: 100px;
`
const InputMensagem = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    message: [
      {
        user: '',
        text: ''
      }
    ],
    usuarioValue: '',
    mensagemValue: ''
  }

  onChangeUsuarioValue = (event) => {
    this.setState({usuarioValue: event.target.value})
  }

  onChangeMensagemValue = (event) => {
    this.setState({mensagemValue: event.target.value})
  }

  enviarMensagem = () =>{
    const novaMensagem = {
      user: this.state.usuarioValue,
      text: this.state.mensagemValue
    }

    const arrayNovasMensagens = [novaMensagem, ...this.state.message]

    this.setState({message: arrayNovasMensagens, mensagemValue: '', usuarioValue: ''})
  }

  render(){
    return (
      <ContainerMaior>
        <ContainerMensagens>
          {this.state.message.map((message, index) => {
              return <p key={index}>
                <strong>{message.user}</strong> : {message.text}
              </p>
          })}
        </ContainerMensagens>
        <ContainerInputs>
          <InputUsuario onChange={this.onChangeUsuarioValue} value={this.state.usuarioValue} placeholder={'Usuário'}/>
          <InputMensagem onChange={this.onChangeMensagemValue} value={this.state.mensagemValue} placeholder={'Mensagem'}/>
          <button onClick={this.enviarMensagem}>Enviar</button>
        </ContainerInputs>
      </ContainerMaior>
    );
  }
}

export default App;
