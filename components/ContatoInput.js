import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const ContatoInput = (props) => {

  const [nome, setNome] = useState ('');
  const [telefone, setTelefone] = useState ('');

  const capturarNome = (nome) => {
      setNome(nome);
  }
  const capturarTelefone = (telefone) => {
      setTelefone(telefone);
  }
  return (
    <View style={styles.contatoView}>
      <TextInput 
        placeholder="Nome"
        style={styles.contatoTextInput}
        onChangeText={capturarNome}
        value={nome}        
      />
      <TextInput 
        placeholder="Telefone"
        style={styles.contatoTextInput}
        onChangeText={capturarTelefone}
        value={telefone}        
      />
      <Button 
        title="Adicionar"
        onPress={() => props.onaddContact(nome, telefone)}
      />
      <br></br>      
      <div>
        <b><h2>Agenda:</h2></b>
      </div>
    </View>
  );
};


const styles = StyleSheet.create({
  contatoView: {
    marginBottom: 8,
  },
  contatoTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 8,
    textAlign: 'center'
  }
});



export default ContatoInput;