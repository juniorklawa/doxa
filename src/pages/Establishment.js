import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';
import StarRating from 'react-native-star-rating';
import { Overlay } from 'react-native-elements';



class Establishment extends React.Component {

  state = {
    establishment: {},
    btnText: 'Fazer check-in',
    hasLocalization: false,
    isVisible: false
  }

  async componentDidMount() {
    await this.setState({
      establishment: this.props.navigation.getParam('establishment')
    })
    console.log(this.state.establishment)
  }


  sendLocalization = async () => {

    this.setState({
      btnText: 'Enviando localização...'
    })

    await setTimeout(() => {
      this.setState({
        hasLocalization: true
      });
      this.gambs()
    }, 800);

  }

  gambs = async () => {
    await setTimeout(() => {
      this.setState({ isVisible: true })
    }, 100);
  }

  render() {
    const { title, picture, rating } = this.state.establishment
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
        <Overlay isVisible={this.state.isVisible}>
          <ScrollView>
            <Text style={{ fontSize: 24, color: '#000', marginTop: 10, fontWeight: 'bold' }}>Sua avaliação</Text>
            <Text style={{ fontSize: 15, color: '#949494', marginTop: 20, fontWeight: 'bold' }}>Você considera esse lugar acessível?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
              <Image
                style={{ width: '100%', resizeMode: 'contain', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginTop: -15 }}
                source={require('../assets/carinhas.png')}
              />
            </View>

            <Text style={{ fontSize: 15, color: '#949494', marginTop: 5, fontWeight: 'bold' }}>Qualidade de atendimento</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Image
                style={{ width: '100%', resizeMode: 'contain', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginTop: -15 }}
                source={require('../assets/carinhas.png')}
              />
            </View>

            <Text style={{ fontSize: 15, color: '#949494', marginTop: 5, fontWeight: 'bold' }}>Como foi a Comunicação e o Acesso ao estabelecimento?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Image
                style={{ width: '100%', resizeMode: 'contain', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginTop: -15 }}
                source={require('../assets/carinhas.png')}
              />
            </View>

            <Text style={{ fontSize: 15, color: '#949494', marginTop: 5, fontWeight: 'bold' }}>O espaço atendeu as suar expectativas?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Image
                style={{ width: '100%', resizeMode: 'contain', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginTop: -15 }}
                source={require('../assets/carinhas.png')}
              />
            </View>

            <Text style={{ fontSize: 18, color: '#949494', marginTop: -25, fontWeight: 'bold' }}>Comentário final</Text>
            <View style={{ backgroundColor: '#EEEEEE', borderRadius: 3, minHeight: 80, marginTop: 10 }}>
              <TextInput
                editable
                multiline
                placeholder={"Deixe aqui seu comentário"}
                maxLength={100}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isVisible: false })
                this.props.navigation.navigate('Perfil')
              }}
              style={{ backgroundColor: '#1B8161', width: '100%', marginTop: 18, marginBottom: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{'Enviar'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </Overlay>
        <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
        <View style={styles.container}>

          <ScrollView style={styles.scrollViewContent}>

            <Image
              style={{ width: '100%', height: 300, resizeMode: 'contain', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginTop: -15 }}
              source={picture}
            />

            <View style={{ marginHorizontal: 10 }}>
              <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: '#000', fontSize: 30, fontWeight: '600', marginBottom: 10 }}>
                  {title}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', color: '#388E3C' }}>
                    Aberto
            </Text>
                  <Text style={{ marginLeft: 5 }}>
                    fecha 23:00
            </Text>


                </View>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={15}
                  containerStyle={{ width: 90 }}
                  fullStarColor={'#FBC02D'}
                  emptyStarColor={'#ddd'}
                  rating={rating}
                />
                <Text style={{ fontWeight: 'bold' }}>
                  R. Recife, 220 - Cabral
              </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  (41) 3022-5392
              </Text>




              </View>




              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                <Text style={{ fontSize: 32, color: '#949494' }}>
                  Nota
              </Text>
              <Text style={{ fontWeight: '600', color:'#949494' }}>
                  (2503 avaliações)
              </Text>


                <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#949494' }}>
                  {rating}
                </Text>
                <Image
                  style={{ width: 50, height: 50, resizeMode: 'contain', margin: 5 }}
                  source={require('../assets/verde.png')}
                />
              </View>



              <Text style={{ fontSize: 24, color: '#949494', marginTop: 18, fontWeight: 'bold' }}>
                Pontos de acessibilidade
            </Text>

              <View style={{ backgroundColor: '#FFAB91', borderRadius: 10, marginTop: 10, height: 75, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{ width: 50, height: 50, resizeMode: 'contain', }}
                    source={require('../assets/arquitetonica.png')}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 8, fontSize: 18 }}>
                    Arquitetônica
                  </Text>
                </View>
              </View>

              <View style={{ backgroundColor: '#FFCC80', borderRadius: 10, marginTop: 10, height: 75, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{ width: 50, height: 50, resizeMode: 'contain', }}
                    source={require('../assets/atitudinal.png')}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 8, marginRight: 35, fontSize: 18 }}>
                    Atitudinal
                  </Text>
                </View>
              </View>

              <View style={{ backgroundColor: '#90CAF9', borderRadius: 10, marginTop: 10, height: 75, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{ width: 50, height: 50, resizeMode: 'contain', }}
                    source={require('../assets/comunicacional.png')}
                  />
                  <Text style={{ marginTop: 12, marginLeft: 8, marginRight: -20, fontSize: 18 }}>
                    Comunicacional
                  </Text>
                </View>
              </View>

              <Text style={{ fontSize: 24, color: '#949494', marginTop: 10, fontWeight: 'bold' }}>
                Últimas avaliações
              </Text>

              <View style={{ backgroundColor: '#EEEEEE', borderRadius: 10, marginTop: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Caue R.
            </Text>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    starSize={15}
                    containerStyle={{ width: 90 }}
                    fullStarColor={'#FBC02D'}
                    emptyStarColor={'#ddd'}
                    rating={4}
                  />
                </View>
                <Text style={{ marginTop: 6, margin: 20, fontSize: 16, color: '#616161', textAlign: 'justify' }}>
                  "Restaurante com ambiente agradável e aconchegante, fui no período do festival da lasanha. Comida deliciosa e sobremesa, atendimento em línguas de sinais, cardápios em braile. Super recomendo! :)"
                  </Text>
              </View>

              <View style={{ backgroundColor: '#EEEEEE', borderRadius: 10, marginTop: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Everaldo J.
            </Text>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    starSize={15}
                    containerStyle={{ width: 90 }}
                    fullStarColor={'#FBC02D'}
                    emptyStarColor={'#ddd'}
                    rating={4.5}
                  />
                </View>
                <Text style={{ marginTop: 6, margin: 20, fontSize: 16, color: '#616161', textAlign: 'justify' }}>
                  "Comida boa; atendimento um pouco lento; preços um pouco altos."
                  </Text>
              </View>

              <View style={{ backgroundColor: '#EEEEEE', borderRadius: 10, marginTop: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Matheus B.
            </Text>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    starSize={15}
                    containerStyle={{ width: 90 }}
                    fullStarColor={'#FBC02D'}
                    emptyStarColor={'#ddd'}
                    rating={3}
                  />
                </View>
                <Text style={{ marginTop: 6, margin: 20, fontSize: 16, color: '#616161', textAlign: 'justify' }}>
                  "Tive um problema com a reserva e o atendimento que não me apresentou um cardápio em braile, porém a comida é muito a boa."
                  </Text>
              </View>



              {
                this.state.hasLocalization ?
                  <TouchableOpacity
                    style={{ backgroundColor: '#1B8161', width: '100%', marginTop: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={'check'} size={25} color={'#fff'} />
                  </TouchableOpacity> :
                  <TouchableOpacity
                    onPress={() => this.sendLocalization()}
                    style={{ backgroundColor: '#1976d2', width: '100%', marginTop: 18, marginBottom: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{this.state.btnText}</Text>
                  </TouchableOpacity>

              }


            </View>

          </ScrollView>
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#fbfbfb',
    flex: 1
  },

  scrollViewContent: {


  },

  headerImg: {
    width: '100%',
    height: 200
  },

  headerTitle: {
    marginLeft: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4b4b4b'
  },

  headerSubtitle: {

  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  headerSubtitle: {
    marginLeft: 5,
    fontSize: 14,
    color: '#929699'
  },

  projectContainer: {
    backgroundColor: '#fbfbfb',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginTop: 20,
    padding: 15
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b4b4b',
  },
  missionDate: {
    color: '#929699',
    fontSize: 12,
    fontWeight: 'bold'
  },

  preview: {
    width: 300,
    height: 300,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

});

export default Establishment