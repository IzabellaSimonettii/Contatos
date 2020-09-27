import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const ContactInput = (props) => {

let [ name, setName ] = useState('');
let [ number, setNumber ] = useState('');

  return (
    <View style={styles.insertContact}> 
        <View style={styles.sectionTextInput}>
            <Text style={{ alignSelf: 'center' }}>Insira o nome:</Text>
            <TextInput style={styles.nameTextInput} onChangeText={name => setName(name)} value={name} placeholder="Nome" />
        </View>
        <View style={styles.sectionTextInput}>
            <Text style={{ alignSelf: 'center' }}>Insira o número:</Text>
            <TextInput maxLength={11} style={styles.numberTextInput} onChangeText={number => setNumber(number)} value={number} placeholder="Número" />
        </View>
        <View style={{ marginRight: 10,  flexDirection: 'row'}} > 
          <Button color="#FF7043" title="Adicionar contato" onPress={() => props.onAddContact(name, number) }/>
          <Button color="#FF7043" title="Limpar Contatos" onPress={() => props.onDeleteAll() }/>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    insertContact: {
      justifyContent: 'space-around'
    },
    numberTextInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: '#B0BEC5',
      marginLeft: 10,
      marginBottom: 15
    },
    nameTextInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: '#B0BEC5',
      marginLeft: 10
    },
    sectionTextInput: {
      flexDirection: 'row',
      padding: 10
    }
  });
export default ContactInput;