import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';

export default function Sobre({navigation}) {

    const handleVoltar = () => {
        navigation.goBack();
    };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleVoltar} style={styles.voltarIconContainer}>
          <Image
          style={styles.iconVoltar}
          source={require('./img/icons8-voltar-50.png')}
          />
           </TouchableOpacity>
        <View style={styles.container2}>
        <View style={styles.container3}>

            <Image
        style={styles.appIcon}
        source={require('./img/plant.png')}
      />
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      
      <Text style={styles.description}>
        O aplicativo previna é uma aplicação que se baseia em informar e conscientizar as pessoas sobre os incendios e as queimadas.
        Nele são apresentados Videos, livros, apostilas e equipamentos que podem ser usados para previnir que um incendio aconteça
        e que muitas mortes aconteçam.
      </Text>

      <Text style={styles.version}>Versão: 1.0.0</Text>

      <Text style={styles.contact}>
        Para suporte, entre em contato conosco em [ottos565@gmail.com].
      </Text>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
  },
  appIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'sans-serif',
    textAlign: 'justify',
    margin: 12
  },iconVoltar: {
    width: 34,
    height: 34,
  },
  version: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contact: {
    fontFamily: 'sans-serif',
    textAlign: 'justify',
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'center',
  },
  container2:{
    height:'85%',
    width: 330,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: 'black',        // Cor da sombra
    shadowOffset: { width: 0, height: 3 },  // Offset (deslocamento) da sombra
    shadowOpacity: 0.6,          // Opacidade da sombra
    shadowRadius: 5,             // Raio da sombra
    elevation: 6,       
  },
  voltarIconContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
    margin: 10
  },
  container3: {
    marginBottom: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
  

});
