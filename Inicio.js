import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  BackHandler,
  StyleSheet,
  FlatList,
  Button,
  Linking
} from 'react-native';
import { Video } from 'expo-av';

const VideoItem = ({ videoSource, title }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  const handleFullscreen = async () => {
    if (isFullscreen) {
      await videoRef.current.dismissFullscreenPlayer();
    } else {
      await videoRef.current.presentFullscreenPlayer();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <View style={styles.videoItemContainer}>
      <Text style={styles.videoTitle}>{title}</Text>
      <View style={styles.videocontainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={typeof videoSource === 'number' ? videoSource : { uri: videoSource }}
          useNativeControls
          isMuted={false}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          onPlaybackStatusUpdate={(newStatus) => setStatus(newStatus)}
        />
      </View>
      <View style={styles.videoControls}>
        <Button title={status.isPlaying ? 'Pause' : 'Play'} onPress={handlePlayPause} />
        <Button title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} onPress={handleFullscreen} />
      </View>
    </View>
  );
};

export default function Inicio({ navigation }) {
  const [currentCategory, setCurrentCategory] = useState('Videos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);  

  const renderLivrosContent = () => {
    const openlinkurl = (Url) => {
      Linking.openURL(Url);
    };
    if (currentCategory === 'Livros') {
      return (
        <View style={styles.categorybook}>
          <View style={{margin:10}}></View>

          <TouchableOpacity onPress={() => openlinkurl('https://observatorioflorestal.org.br/wp-content/uploads/bkps-old/2018/03/livreto_codigoflorestal_baixa_aprovado.pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/sustentabilidade.png')}/>
            <Text style={styles.booktext}>Observatorio florestal</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openlinkurl('https://www.terrabrasilis.org.br/ecotecadigital/images/abook/pdf/2sem2015/outubro/Out.15.02.pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/sustentabilidade a adequação.png')}/>
            <Text style={styles.booktext}>Sustentabilidade: adequação e legislação</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openlinkurl('https://www.docdroid.net/og7l9SB/os-anjos-bons-da-nossa-natureza-steven-pinker-pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/steve pinker.png')}/>
            <Text style={styles.booktext}>os-anjos-bons-da-nossa-natureza-steven-pinker</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openlinkurl('https://cb.es.gov.br/Media/CBMES/PDF%27s/CEIB/GCE/Prevenção%20e%20Combate%20a%20Incêndios%20-%20Apostila%20CFBP%202022.pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/prevenção e combate.png')}/>
            <Text style={styles.booktext}>Prevenção e combate a incendios</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openlinkurl('https://www2.unifap.br/editora/files/2019/12/leis-da-natureza-2.pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/leis da natureza.png')}/>
            <Text style={styles.booktext}>leis da natureza</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openlinkurl('https://www.unifal-mg.edu.br/bibliotecas/wp-content/uploads/sites/125/2021/12/39-Livro-Incendio-Edificios-Altos-Versao-Digital.pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/opera incendio.png')}/>
            <Text style={styles.booktext}>problematica de incendios de edificios altos</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openlinkurl('https://edit.sbq.org.br/anexos/quimica_natureza.pdf')}>
          <View style={styles.book}>
            <Image style={{width:'80%', height: '100%'}} source={require('./book/a quimica na natureza.png')}/>
            <Text style={styles.booktext}>a quimica na natureza</Text>
          </View>
          </TouchableOpacity>
       
          
        </View>
      );
    }
    return null;
  };
  
  const renderEquipamentosContent = () => {
    if (currentCategory === 'Equipamentos') {
      return (
        <View style={styles.categoryContent}>
          <Text style={styles.text0}>1. Extintores de Incêndio:<Text style={styles.text2}>  <br></br>Os extintores são um dos principais equipamentos para combater um incêndio,
           já que eles podem acabar com o fogo rapidamente. Eles são divididos por classes A, B e C: </Text></Text>
          <Text style={styles.text1}>◾Água pressurizada:<Text style={styles.text2}> utilizado em incêndios de classe A, causados por materiais sólidos;</Text> </Text>
          <Text style={styles.text1}>◾Espuma:<Text style={styles.text2}> utilizados em incêndios de classe A e B, causados por materiais sólidos e líquidos inflamáveis; </Text> </Text>
          <Text style={styles.text1}>◾Pó químico:<Text style={styles.text2}>  utilizado em incêndios de classe A, B, C e D, causados por materiais sólidos, líquidos inflamáveis, equipamentos elétricos e metais pirofóricos, respectivamente; </Text> </Text>
          <Text style={styles.text1}>◾Gás carbônico:<Text style={styles.text2}>  utilizado em incêndios de classe B e C, causados por líquidos inflamáveis e equipamentos elétricos. 
Todo extintor possui dois sistemas de segurança. O lacre, que tem a finalidade de demonstrar que o extintor ainda não foi utilizado, e o pino de segurança, que trava o gatilho do extintor, impossibilitando que ele seja utilizado acidentalmente.</Text> </Text>
<Image style={{width: '80px', height:'140px',margin: 10, borderRadius: 30,marginBottom: 20, alignItems: 'center', justifyContent: 'center', marginLeft: '40%'}} source={require('./equip/pngwing.com.png')}/>
         <br></br>
         <Text style={styles.text0}>2. Mangueiras de incêndio </Text>
         <Text style={styles.text2}>Um dos melhores equipamentos contra incêndio, as mangueiras podem garantir a segurança das pessoas, sendo extremamente importantes para conter o fogo. Elas interligam as fontes disponíveis de água aos pontos de aplicação de uma maneira segura e flexível. 
A norma ABNT NBR 11861 define a mangueira de incêndio como: “Equipamento de combate à incêndio, constituído essencialmente por um duto flexível dotado de uniões”. Além dela, existem os hidrantes solo e hidrantes de parede. A principal diferença é que o primeiro, apenas o Corpo de Bombeiros possui permissão para utilizá-lo. </Text>

<Text style={styles.text1}>COMO UTILIZAR O HIDRANTE?</Text>

<Text style={styles.text2}>
1) Primeiro passo: verifique a classe de incêndio;

2) Desligue a rede de energia elétrica;

3) Abra a caixa de hidrante;

4) Desenrole toda mangueira. Ela deve ficar esticada e sem dobras;

5) Conecte a mangueira;

6) Conecte o bico da mangueira;

7) Posicione-se em posição contrária ao vento. Isso te protegerá da fumaça e da própria água que será lançada;

8) Segure o bico da mangueira de maneira firme. Abra um pouco as pernas para aumentar o apoio;

9) Como já mencionado, o ideal é que se trabalhe em dupla, para que nessa hora a outra pessoa abra o registro;

10) Abra o registro e combata o fogo. Se o esguicho da mangueira tiver regulagem, você poderá optar por jato neblinado ou jato compacto. Estude a situação e faça sua escolha.
</Text>
<Image style={{width: '100px', height:'140px',margin: 10, borderRadius: 30,marginBottom: 20, alignItems: 'center', justifyContent: 'center', marginLeft: '40%'}} source={require('./equip/mangueira.png')}/>
<br></br>
         <Text style={styles.text0}>3. Hidrantes urbanos </Text>
         <Text style={styles.text2}>Dos equipamentos de segurança e combate a incêndio, os hidrantes urbanos são um dos principais. Localizados nas ruas, apenas o Corpo de Bombeiros tem autorização para utilizá-los em casos emergenciais. 

São aparelhos de ferro fundido, instalados na rede pública de água da cidade, com o propósito de servir de ponto de abastecimento das viaturas do Corpo de Bombeiros. Estão ligados aos encanamentos de abastecimento de água, o que permite a adaptação de bombas ou mangueiras.</Text>

<br></br>
         <Text style={styles.text0}>4. Iluminação de emergência </Text>
         <Text style={styles.text2}>A iluminação de emergência é obrigatória em edificações que possuem mais de dois pavimentos e têm uma grande circulação de pessoas diariamente. Seu objetivo é continuar fornecendo energia para o local caso a fonte principal seja interrompida. 

A iluminação de emergência pode salvar diversas pessoas, já que é o meio que fará enxergar a melhor forma de sair do estabelecimento em chamas. Cada tipo de edificação necessita de uma iluminação personalizada, inserida em pontos estratégicos do local. </Text>
        
<br></br>
         <Text style={styles.text0}>5. Sprinklers </Text>
         <Text style={styles.text2}>▪️ Sistemas automáticos que liberam água em caso de detecção de calor ou fumaça.<br></br>
         ▪️ Comuns em edifícios comerciais e industriais.</Text>

         <br></br>
         <Text style={styles.text0}>6. Detectores de Fumaça e Alarmes de Incêndio </Text>
         <Text style={styles.text2}>▪️ Alertam os ocupantes sobre a presença de fumaça ou calor.<br></br>
         ▪️ Cruciais para a evacuação rápida e a contenção do fogo.</Text>
         <Image style={{width: '280px', height:'140px',margin: 10, borderRadius: 30,marginBottom: 20, alignItems: 'center', justifyContent: 'center', marginLeft: '20%'}} source={require('./equip/rascunho-automaticocomo-funciona-detector-de-fumaca.png')}/>
        
        </View>
      );
    }
    return null;
  };

  const videoData = {
    Videos: [
      { id: '1',title: 'CLASSES DE INCÊNDIO - Por que Dividir os Incêndios por Classes',  source: require('./video/CLASSES DE INCÊNDIO - Por que Dividir os Incêndios por Classes_.mp4') },
      { id: '2',title: 'Como evitar incêndios em casa',source: require('./video/Como evitar incêndios em casa.mp4') },
      { id: '3',title: 'Havaí_ Incêndios florestais causam destruição na ilha dos Estados Unidos', source: require('./video/Havaí_ Incêndios florestais causam destruição na ilha dos Estados Unidos; veja vídeo.mp4') },
      { id: '4',title: 'O QUE FAZER EM UM PRINCÍPIO DE INCÊNDIO', source: require('./video/O QUE FAZER EM UM PRINCÍPIO DE INCÊNDIO - Segurança Simplificada.mp4') },
      { id: '5',title: 'Prevenção e Combate a Incêndios', source: require('./video/Prevenção e Combate a Incêndios Aula 1 Curso Online.mp4') },
      { id: '6',title: 'Quais são as classes de incendio e que tipo de extintor', source: require('./video/Quais são as classes de incendio e que tipo de extintor usar_ _ Prevenção e Combate a Incêndio.mp4') },
      { id: '7',title: 'Plano de Emergencia Contra Incêndio', source: require('./video/Plano de Emergencia Contra Incêndio.mp4') },
      { id: '8',title: 'ampanha contra Incêndios Florestais', source: require('./video/Campanha contra Incêndios Florestais - CENIBRA - Vídeo 2.mp4') },
      { id: '9',title: 'Incêndios florestais', source: require('./video/Incêndios florestais.mp4') },
      { id: '10',title: 'Queimadas - Brasil Escola', source: require('./video/Queimadas - Brasil Escola.mp4') },
      { id: '11',title: 'PREVENÇÃO E COMBATE A INCÊNDIO', source: require('./video/PREVENÇÃO E COMBATE A INCÊNDIO.mp4') },
    ],
  };

  const data = [
    { id: '1', title: 'Videos' },
    { id: '3', title: 'Livros' },
    { id: '4', title: 'Equipamentos' },
    { id: '5', title: 'Contatos' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.buttonscroll}
      onPress={() => setCurrentCategory(item.title)}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const contatobombeiro = () => {
    const openGoogleMaps = (googleMapsUrl) => {
      Linking.openURL(googleMapsUrl);
    };
  
    if (currentCategory === 'Contatos') {
      return (
        <View style={styles.contactContainer}>
          
          {/* Contact 1 */}
          <TouchableOpacity onPress={() => openGoogleMaps('https://www.google.com/maps/place/Rua+João+Diogo,+N°236,+Cidade+Velha-Belém-Pa')}>
          <View style={styles.contactmargin} >
          <Text style={styles.contactText}>
            <Text style={{fontWeight:'bold'}}>
          21º GRUPAMENTO BOMBEIRO MILITAR – BELÉM/COMÉRCIO<br></br></Text>
          <Text>Endereço: Rua João Diogo, N°236, Cidade Velha-Belém-Pa</Text>
          <br></br>

          Fone: <Text style={{color:'#009034'}}>Tel:(91)3075-9956/ (91)3075-9966 / (91) 3075-9954</Text>
            <br></br>

                Email: 21gbm.cbmpa@gmail.com
          </Text>
          <Image style={{width: '90%', height: 180}} source={require('./contact/21 batalhao bombeiro.jpg')}/>
        </View>
          </TouchableOpacity>
  
          {/* Contact 2 */}
          <TouchableOpacity onPress={() => openGoogleMaps('https://www.google.com/maps/place/1°+Grupamento+de+Busca+e+Salvamento/@-1.4047154,-48.5338829,13z/data=!4m10!1m2!2m1!1s1º+GRUPAMENTO+BOMBEIRO+MILITAR!3m6!1s0x92a48976c98bb54d:0x93d3dbdc7aff31bd!8m2!3d-1.4048123!4d-48.4925866!15sCh8xwrogR1JVUEFNRU5UTyBCT01CRUlSTyBNSUxJVEFSkgEMZmlyZV9zdGF0aW9u4AEA!16s%2Fg%2F11c59nh2cz?entry=ttu')}>
          <View style={styles.contactmargin}>
          <Text style={styles.contactText}>
            <Text style={{fontWeight:'bold'}}>
            1º GRUPAMENTO BOMBEIRO MILITAR – BELÉM<br></br>
            </Text>
            <Text>Endereço: Tv. Padre Eutiquio, N° 2806, Cremação, Belém-PA, CEP:66.045-000.</Text>
          <br></br>

          Fone: <Text style={{color:'#009034'}}>Tel: (91) 98899-6342</Text>
            <br></br>

               E-mail: 1gbm@bombeiros.pa.gov.br / 1gbmpa@gmail.com
          </Text>
          <Image style={{width: '90%', height: 180}} source={require('./contact/1 grupo.jpg')}/>
          </View>
          </TouchableOpacity>
  
          {/* Contact 3 */}
          <TouchableOpacity onPress={() => openGoogleMaps('https://www.google.com/maps/place/1°+Grupamento+de+Busca+e+Salvamento/@-1.4045431,-48.5340547,15819m/data=!3m1!1e3!4m10!1m2!2m1!1s1º+GRUPAMENTO+BOMBEIRO+MILITAR!3m6!1s0x92a48976c98bb54d:0x93d3dbdc7aff31bd!8m2!3d-1.4048123!4d-48.4925866!15sCh8xwrogR1JVUEFNRU5UTyBCT01CRUlSTyBNSUxJVEFSkgEMZmlyZV9zdGF0aW9u4AEA!16s%2Fg%2F11c59nh2cz?entry=ttu')}>
          <View style={styles.contactmargin}>
          <Text style={styles.contactText}>
            <Text style={{fontWeight:'bold'}}>
            1º GRUPAMENTO DE BUSCA E SALVAMENTO (1ºGBS)<br></br>
            </Text>
            <Text>Rodovia Arthur Bernardes, S/n, Complexo Miramar, Belém-PA</Text>
          <br></br>

          Fone: <Text style={{color:'#009034'}}>Tel: (91) 3257-2265 / 4370 
          ​Comandante: 98899-6458</Text>
            <br></br>

               E-mail: 1gbs@bombeiros.pa.gov.br / 1gbsonline@gmail.com
          </Text>
          <Image style={{width: '90%', height: 180}} source={require('./contact/busca e salvamento.png')}/>
          </View>
          </TouchableOpacity>
  
          {/* Contact 4 */}
          <TouchableOpacity onPress={() => openGoogleMaps('https://www.google.com/maps/place/Comando+Geral+do+Corpo+de+Bombeiros+Militar+do+Pará/@-1.4068496,-48.4647023,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipP9e9lJ52fLahmzFK8IrGdUMfY3yzuFMuaIgG4!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP9e9lJ52fLahmzFK8IrGdUMfY3yzuFMuaIgG4%3Dw152-h86-k-no!7i4128!8i2322!4m13!1m2!2m1!1sbombeiros+belem!3m9!1s0x92a48bcf3e9c8e4b:0x17375e69f0882b02!8m2!3d-1.4068496!4d-48.4647023!10e5!14m1!1BCgIgAQ!15sCg9ib21iZWlyb3MgYmVsZW2SAQxmaXJlX3N0YXRpb27gAQA!16s%2Fg%2F1tdzbh7q?hl=pt-BR&entry=ttu')}>
          <View style={styles.contactmargin}>
          <Text style={styles.contactText}>
            <Text style={{fontWeight:'bold'}}>
            Corpo de Bombeiros Militar do Pará<br></br>
            </Text>
            <Text>Av. Júlio César, 3000 - Val de Cães, 66613-010</Text>
          <br></br>

          Fone: <Text style={{color:'#009034'}}>Tel: (91) 8899-6604 
          </Text>
            <br></br>

               E-mail: ascomcbmpa@gmail.com
          </Text>
          <Image style={{width: '90%', height: 180}} source={require('./contact/cbmpa.png')}/>
          </View>
          </TouchableOpacity>

          {/*contact 5*/}
          <TouchableOpacity onPress={() => openGoogleMaps('https://www.google.com/maps/place/26º+Grupamento+Bombeiro+Militar/@-1.3292228,-48.5167992,26182m/data=!3m1!1e3!4m10!1m2!2m1!1sbombeiros+belem!3m6!1s0x92a466851a32b0c9:0x8013d00d4c06cbc1!8m2!3d-1.2901997!4d-48.4707167!15sCg9ib21iZWlyb3MgYmVsZW2SAQxmaXJlX3N0YXRpb27gAQA!16s%2Fg%2F11bwkfqrgv?entry=ttu')}>
          <View style={styles.contactmargin}>
          <Text style={styles.contactText}>
            <Text style={{fontWeight:'bold'}}>
            26º GRUPAMENTO BOMBEIRO MILITAR<br></br>
            </Text>
            <Text>Endereço: Rua 8 de Maio,S/N° Antiga Frimapa,CEP:66.081-020</Text>
          <br></br>

          Fone: <Text style={{color:'#009034'}}>Tel:(91)3227-8080 – (Cmt)8899-6322
          </Text>
            <br></br>

            E-mail: 26gbm@bombeiros.gov.pa.br / quarteldeicoaraci@hotmail.com
          </Text>
          <Image style={{width: '90%', height: 180}} source={require('./contact/277535296_342862581213615_5835138933761384380_n.jpg')}/>
          </View>
          </TouchableOpacity>
        </View>
      );
    } else if (currentCategory === 'Videos') {
      return (
        <FlatList
          data={videoData[currentCategory]}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id}
        />
      );
    }
  
    return null;
  };

  

  const renderVideoItem = ({ item }) => (
    <VideoItem videoSource={item.source} title={item.title} />
  );

  return (
    <View>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => BackHandler.exitApp()}
          style={styles.sairIconContainer}
        >
          <Image
            style={styles.icon1}
            source={require('./img/icons8-voltar-24.png')}
          />
        </TouchableOpacity>

        <TextInput
          style={{
            height: 42,
            width: 280,
            backgroundColor: '#D9D9D9',
            textAlign: 'center',
            color: '#9F9F9F',
            borderRadius: 20,
            fontSize: 20,
          }}
          placeholder="pesquisar"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('configuracoes')}
          style={styles.configIconContainer}
        >
          <Image
            style={styles.icon2}
            source={require('./img/icons8-configurações-32.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{
            marginTop: 0,
            height: 200,
            width: '100%',
            marginBottom: 8,
          }}
          source={require('./img/previna-logo.jpeg')}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <View style={{ margin: 10 }}></View>

      {currentCategory === 'Videos' ? (
        <FlatList
          data={searchQuery ? filteredData : videoData[currentCategory]}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id}
        />
      ) : null}

      
      {contatobombeiro()}
      {renderLivrosContent()}
      {renderEquipamentosContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#44A37B',
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sairIconContainer: {
    marginLeft: 5,
    margin: 20,
  },
  icon1: {
    width: 34,
    height: 34,
  },
  icon2: {
    width: 36,
    height: 36,
  },
  configIconContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonscroll: {
    backgroundColor: '#44A37B',
    borderRadius: 3,
    padding: 25,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  videoItemContainer: {
    marginBottom: 20,
  },
  video: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
  },
  videocontainer: {
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
  },
  videoControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  pdfContainer: {
    flex: 1,
    width: '100%',
    height: 500,
  },
  videoItemContainer: {
    marginBottom: 20,
  },
  videoTitle: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500',
    textAlignVertical: 'top',
    textAlign: 'left',
    marginVertical: 10,
    
  },contactContainer: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    marginBottom:10
  },
  contactText: {
    fontSize: 21,
    color: '#333',
    margin: 'left',

  },
  contactmargin:{
    marginBottom: 45,
    borderRadius: 4,

    marginBorder: 30
  },
  book:{
    width: '90%',
    height: 400,
    marginBottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '5%',
    
  },
  booktext:{
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '400',
    textAlignVertical: 'top',
  },
  text0:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  text1:{
    fontSize: 19,
    fontWeight: 'bold',
  },
  text2:{
    fontSize: 19,
    fontWeight: '300'
  }
});