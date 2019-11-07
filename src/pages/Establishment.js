import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';
import StarRating from 'react-native-star-rating';



class Establishment extends React.Component {

  state = {
    establishment: {},
    btnText: 'Fazer check-in',
    hasLocalization: false
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
    }, 3000);
  }

  render() {
    const { title, picture, rating } = this.state.establishment
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
        <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
        <View style={styles.container}>
          <Image
            style={{ width: '100%', height: 300, resizeMode: 'contain', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginTop: -35 }}
            source={picture}
          />

          <ScrollView style={styles.scrollViewContent}>

            <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: '#000', fontSize: 30, fontWeight: '600', marginLeft: 5, marginBottom: 30 }}>
                {title}
              </Text>
              <Text>
                endereço
              </Text>
              <Text>
                Site
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', color: '#388E3C' }}>
                  Aberto
            </Text>
                <Text style={{ marginLeft: 5 }}>
                  fechas ás 23:00
            </Text>
              </View>

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

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>
                Nota
              </Text>
              <Text>
                {rating}
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
                  style={{ backgroundColor: '#1976d2', width: '100%', marginTop: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{this.state.btnText}</Text>
                </TouchableOpacity>
            }

            <Text style={{ fontSize: 24, color: '#949494' }}>
              Acessibilidade
            </Text>

            <Text style={{ fontSize: 24, color: '#949494', marginTop:10 }}>
              Avaliações
            </Text>

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
    marginHorizontal: 18,

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