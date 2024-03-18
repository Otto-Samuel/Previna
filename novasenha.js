import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function novasenha({ navigation }) {
  const handleVoltar = () => {
    navigation.goBack('esqueci');
  };
  return (
    <ImageBackground
      source={require('./img/a1526f1b5c41c5515204f866311905bf.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.border}>
        

        <Text style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: '28%',
            alignItems: 'center',
        }}>Insira uma nova senha...</Text>

        <Text style={styles.senhatext}>Insira a nova senha</Text>
        <TextInput style={styles.senhainput} />

        <TouchableOpacity style={styles.button} onPress={navigation.navigate('inicio')}> 
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>

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
  senhatext: {
    marginLeft: -90,
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginTop: '15%',
  },
  senhainput: {
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
