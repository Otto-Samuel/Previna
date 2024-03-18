import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';

export default function Configuracoes({ navigation }) {
  const [feedback, setFeedback] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [feedbackEnviado, setFeedbackEnviado] = useState(false);
  const [paypalEmail, setPaypalEmail] = useState('');
  const [quantidadePaypal, setQuantidadePaypal] = useState('');
  const [pixChave, setPixChave] = useState('');
  const [quantidadePix, setQuantidadePix] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [quantidade, setQuantidade] = useState('');
  const [cvc, setCVC] = useState('');
  const [pagamentoFeito, setPagamentoFeito] = useState(false);

  const opcoesMonetizacao = [
    { key: 'cartao', label: 'Cartão de Debito', icon: require('./img/credit-card.png') },
    { key: 'paypal', label: 'PayPal', icon: require('./img/icons8-paypal-48.png') },
    { key: 'pix', label: 'PIX', icon: require('./img/icons8-foto-48.png') },
  ];

 

  const handleMonetizacao = (opcao) => {
    setModalVisible(true);
    setOpcaoSelecionada(opcao);
    setPagamentoFeito(false);
  };

  const handleEnviarMonetizacao = async () => {
    if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
      Alert.alert('Erro', 'Por favor, insira uma quantidade válida.');
      return;
    }

    if (opcaoSelecionada === 'cartao' && (!cvc || isNaN(cvc) || cvc.length !== 3)) {
      Alert.alert('Erro', 'Por favor, insira um CVC/CVV válido.');
      return;
    }

    if (opcaoSelecionada === 'paypal' && (!paypalEmail || isNaN(quantidadePaypal) || quantidadePaypal <= 0)) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail do PayPal e uma quantidade válida.');
      return;
    }

    if (opcaoSelecionada === 'pix' && (!pixChave || isNaN(quantidadePix) || quantidadePix <= 0)) {
      Alert.alert('Erro', 'Por favor, insira sua chave PIX e uma quantidade válida.');
      return;
    }

    let metodoPagamento;
    switch (opcaoSelecionada) {
      case 'cartao':
        metodoPagamento = 'Cartão de Crédito/Debito';
        break;
      case 'paypal':
        metodoPagamento = 'PayPal';
        break;
      case 'pix':
        metodoPagamento = 'PIX';
        break;
      default:
        Alert.alert('Erro', 'Opção de monetização inválida.');
        return;
    }

    await simularPagamento(metodoPagamento, quantidade);
    setPagamentoFeito(true);
  };

  const simularPagamento = async (metodo, quantidade) => {
    console.log(`Simulando pagamento de ${quantidade} via ${metodo}`);
    await new Promise(resolve => setTimeout(resolve, 3000));
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

  const handleDarFeedback = () => {
    if (!nomeUsuario) {
      Alert.alert('Erro', 'Por favor, insira seu nome de usuário.');
      return;
    }

    console.log(`Feedback de ${nomeUsuario}: ${feedback}`);

    setFeedback('');
    setNomeUsuario('');
    setFeedbackEnviado(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleVoltar} style={styles.voltarIconContainer}>
        <Image
          style={styles.iconVoltar}
          source={require('./img/icons8-voltar-50.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('sobre')}>
        <Text style={styles.buttonText}>Sobre o aplicativo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleMonetizacao.bind(null, 'cartao')} style={styles.button}>
        <Text style={styles.buttonText}>Monetização</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setOpcaoSelecionada(null);
          setPagamentoFeito(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Escolha a Forma de Monetização</Text>
          <FlatList
  data={opcoesMonetizacao}
  renderItem={({ item }) => (
    <TouchableOpacity
      onPress={() => {
        handleMonetizacao(item.key);
        setOpcaoSelecionada(item.key);
        setQuantidade('');
        setCVC('');
        setPaypalEmail('');
        setQuantidadePaypal('');
        setPixChave('');
        setQuantidadePix('');
      }}
      style={styles.buttonModal}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.icon} style={{ width: 20, height: 20, marginRight: 10 }} />
        <Text style={styles.buttonText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.key}
/>


          {opcaoSelecionada === 'cartao' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Quantidade"
                value={quantidade}
                onChangeText={(text) => setQuantidade(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="CVC/CVV"
                value={cvc}
                onChangeText={(text) => setCVC(text)}
              />
            </>
          )}

          {opcaoSelecionada === 'paypal' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="E-mail do PayPal"
                value={paypalEmail}
                onChangeText={(text) => setPaypalEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Quantidade"
                value={quantidadePaypal}
                onChangeText={(text) => setQuantidadePaypal(text)}
              />
            </>
          )}

          {opcaoSelecionada === 'pix' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Chave PIX"
                value={pixChave}
                onChangeText={(text) => setPixChave(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Quantidade"
                value={quantidadePix}
                onChangeText={(text) => setQuantidadePix(text)}
              />
            </>
          )}

          <TouchableOpacity onPress={handleEnviarMonetizacao} style={styles.buttonEnviar}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          {pagamentoFeito && (
            <Text style={styles.feedbackEnviado}>
              Pagamento em {opcaoSelecionada} de R${quantidade} com sucesso!
            </Text>
          )}
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setNomeUsuario('usuario8393')} style={styles.button}>
        <Text style={styles.buttonText}>Dar Feedback</Text>
      </TouchableOpacity>

      {nomeUsuario && (
        <View>
          <Text style={styles.subtitle}>Usuário: {nomeUsuario}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu feedback..."
            value={feedback}
            onChangeText={(text) => setFeedback(text)}
          />
          <TouchableOpacity onPress={handleDarFeedback} style={styles.buttonEnviar}>
            <Text style={styles.buttonText}>Enviar Feedback</Text>
          </TouchableOpacity>
        </View>
      )}

      {feedbackEnviado && <Text style={styles.feedbackEnviado}>Feedback enviado ;)</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EDEDED',
  },
  voltarIconContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
    margin: 10
  },
  iconVoltar: {
    width: 34,
    height: 34,
  },
  title: {
    marginTop: '30%',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44A37B',
    borderRadius: 15,
    padding: 15,
    margin: 10
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
  buttonEnviar: {
    backgroundColor: '#44A37B',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
  },
  feedbackEnviado: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonModal: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    borderWidth: 0.3,
    borderColor: 'black',
  },
});
