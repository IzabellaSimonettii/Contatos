import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {

  const[contatos, setContacts] = useState ([]);
  const[contadorContatos, setCountContacts] = useState(10);

  const adicionarContato = (contato, telefone) => {
    setContacts(contatos => {
        setCountContacts(contadorContatos + 2);
        return [...contatos, {key: contadorContatos.toString(), nome: contato, telefone: telefone}]
    });
  }

  const removerContato = (keyASerRemovida) =>{
    setContacts(contatos => {
      return contatos.filter((contato) => {
         return contato.key !== keyASerRemovida
      })
    });
  }

  return (
    <View style={estilos.screenPrimaryView}>
      <ContatoInput onAddContact={adicionarContato}/>
        <FlatList 
          data={contatos}
          renderItem={
            (contato) => (
              <ContatoItem
                chave={contato.item.key} 
                contato={contato.item.key + ' - ' + contato.item.nome + ' - ' + contato.item.telefone} 
                onDelete={removerContato}
              />
            )
          }
        />      
    </View>
  );
}

const estilos = StyleSheet.create({
  submitView: {
    marginBottom: 8,
  },
  itemListView: {
    padding: 12,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },

  screenPrimaryView: {
    padding: 50
  },
  contactTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12,
    textAlign: 'center'
  }
})