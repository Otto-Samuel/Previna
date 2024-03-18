import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

export default function cadastro({ navigation }) {
    const handleVoltar = () => {
        navigation.goBack('Login');
      };
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [ContaConcluida, setContaConcluida] = useState(false);
  const [loginConcluido, setLoginConcluido] = useState(false);
  

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const handleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleLogin = () => {
    if (email !== '' && senha !== '') {
      setLoginConcluido(true);
    } else {
      setCamposVazios(true);
    }
  };

  useEffect(() => {
    if (loginConcluido) {
      setTimeout(() => {
        navigation.navigate('inicio');
      }, 1500);
    }
  }, [loginConcluido, navigation]);

  return (
    <ImageBackground
      source={require('./img/a1526f1b5c41c5515204f866311905bf.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.border}>
        <Image style={styles.img} source={require('./img/plant.png')} />

        <Text style={{
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '18px',
        }}>Criar uma conta</Text>

        <Text style={styles.emailtext}>digite seu email</Text>
        <TextInput
          style={styles.emailinput}
          value={email}
          onChangeText={handleEmailChange}
        />

        <Text style={styles.senhatext}>digite sua senha</Text>
        <View style={styles.senhainputContainer}>
          <TextInput
            style={styles.senhainput}
            value={senha}
            onChangeText={handleSenhaChange}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity onPress={handleMostrarSenha} style={styles.senhaIconContainer}>
            <Image
              style={styles.senhaIcon}
              source={mostrarSenha ? require('./img/olhofechado.png') : require('./img/olho.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin} >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        {ContaConcluida && (
          <Text style={{ fontSize: 18, marginTop: 10, color: 'green'}}>Conta criada com sucesso!</Text>
        )}

        <TouchableOpacity onPress={handleVoltar}>
        <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

/*-----------------------------------  style  ----------------------------------*/
const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: '#42BA82',
    alignItems: 'center',
    flex: 1,height:'100%',
    width:'100%'
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
    marginTop: '10%',
    marginLeft: -140,
    color: '#000',
    fontSize: 18,
    fontWeight: 'Regular',
  },
  senhatext: {
    marginTop: 14,
    fontSize: 18,
    marginLeft: -140,
    color: '#000',
    fontWeight: 'Regular',
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
  senhainputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  senhainput: {
    flex: 1,
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
  senhaIconContainer: {
    marginLeft: -40,
    marginRight: 5,
  },
  senhaIcon: {
    width: 24,
    height: 24,
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
