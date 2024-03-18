import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function esqueci({ navigation }) {
  const [email, setEmail] = useState('');
  const [erroEmailVazio, setErroEmailVazio] = useState(false); // Flag para indicar se o campo de email está vazio

  const handleVoltar = () => {
    navigation.goBack();
  };

  const handleContinuar = () => {
    if (email.trim() === '') {
      // Campo de email vazio, definir a flag de erro
      setErroEmailVazio(true);
    } else {
      // Campo de email preenchido, continuar para a próxima tela
      setErroEmailVazio(false);
      navigation.navigate('novasenha');
    }
  };

  return (
    <ImageBackground
      source={require('../img/a1526f1b5c41c5515204f866311905bf.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.border}>
        <Image style={styles.img} source={require('../img/plant.png')} />

        <Text style={{
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: '5%',
          alignItems: 'center',
        }}>Esqueceu a senha?</Text>

        <Text style={styles.emailtext}>Digite o seu email</Text>
        <TextInput
          style={styles.emailinput}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            // Limpar a mensagem de erro ao digitar no campo de email
            setErroEmailVazio(false);
          }}
        />

        {erroEmailVazio && (
          <Text style={{ fontSize: 18, color: 'red' }}>O campo de email não pode ficar vazio.</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleContinuar}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVoltar}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: '#42BA82',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%'
  },
  border: {
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    width: '85%',
    height: '80%',
    borderRadius: 16,
    borderColor: '#282828',
    borderWidth: 2,
    marginTop: '20%',
  },
  img: {
    width: 109,
    height: 96,
    marginTop: 25,
    marginBottom: 10,
  },
  emailtext: {
    marginRight: '40%',
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginTop: '15%',
  },
  emailinput: {
    width: 255,
    height: 47,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    margin: 23,
    width: 136,
    height: 51,
    backgroundColor: '#42BA82',
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginTop: 'auto',
    marginBottom: 14,
  },
});
