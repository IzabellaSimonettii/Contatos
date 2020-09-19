import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const ContatoInput = (props) => {

  const [nome, setName] = useState ('');
  const [telefone, setPhone] = useState ('');

  const getName = (nome) => {
      setName(nome);
  }
  const getPhone = (telefone) => {
      setPhone(telefone);
  }
  return (
    <View style={estilos.contatoView}>
      <TextInput 
        placeholder="Nome"
        style={estilos.contactTextInput}
        onChangeText={getName}
        value={nome}        
      />
      <TextInput 
        placeholder="Telefone"
        style={estilos.contactTextInput}
        onChangeText={getPhone}
        value={telefone}        
      />
      <Button 
        title="Adicionar"
        onPress={() => props.onAddContact(nome, telefone)}
      />
      <br></br>      
      <div>
        <b><h2>Lista de contatos:</h2></b>
        <br></br>   
      </div>
    </View>
  );
};


const estilos = StyleSheet.create({
  contatoView: {
    marginBottom: 8,
  },
  contactTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 8,
    textAlign: 'center'
  }
});



export default ContatoInput;