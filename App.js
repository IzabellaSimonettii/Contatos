import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {

  const[contatos, setContacts] = useState ([]);
  const[contadorContatos, setCounterContacts] = useState(10);

  const addContact = (contato, telefone) => {
    setContacts(contatos => {
        setCounterContacts(contadorContatos + 2);
        return [...contatos, {key: contadorContatos.toString(), nome: contato, telefone: telefone}]
    });
  }

  const removeContact = (keyASerRemovida) =>{
    setContacts(contatos => {
      return contatos.filter((contato) => {
         return contato.key !== keyASerRemovida
      })
    });
  }

  return (
    <View style={styles.telaPrincipalView}>
      <ContatoInput onaddContact={addContact}/>
        <FlatList 
          data={contatos}
          renderItem={
            (contato) => (
              <ContatoItem
                chave={contato.item.key} 
                contato={contato.item.key + ' - ' + contato.item.nome + ' - ' + contato.item.telefone} 
                onDelete={removeContact}
              />
            )
          }
        />      
    </View>
  );
}

const styles = StyleSheet.create({
  entradaView: {
    marginBottom: 8
  },
  itemNaListaView: {
    padding: 15,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10
  },

  telaPrincipalView: {
    padding: 50
  },
  contatoTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 5, 
    padding: 12,
    textAlign: 'center'
  }
})