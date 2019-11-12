import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';
import { SearchBar } from 'react-native-elements';



class Explore extends React.Component {

  state = {
    search: ''
  }

  updateSearch = search => {
    this.setState({ search });
  };


  render() {
    const { search } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
          <SearchBar
            containerStyle={{ borderRadius: 10, marginHorizontal: 10, marginTop: 18 }}
            platform='android'
            placeholder="Procure seu estabelecimento..."
            onChangeText={this.updateSearch}
            value={search}
          />


          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#4b4b4b', fontSize: 24, fontWeight: '900', marginLeft: 5, marginBottom: 30, marginTop:15 }}>
              Explore sua região
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LocationList')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, backgroundColor: '#4385F5', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: '45%', width: '45%', alignItems: 'center', justifyContent: 'center', }}
                  source={require('../assets/restaurante.png')}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 8, fontWeight: '900', fontSize: 12, color: '#757575' }}>
                Restaurantes
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65 / 2, backgroundColor: '#E84335', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: '45%', width: '45%', alignItems: 'center', justifyContent: 'center', }}
                  source={require('../assets/farmacia.png')}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 8, fontWeight: '900', fontSize: 12, color: '#757575' }}>
                Farmácias
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65 / 2, backgroundColor: '#EFB657', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: '45%', width: '45%', alignItems: 'center', justifyContent: 'center', }}
                  source={require('../assets/hotel.png')}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 8, fontWeight: '900', fontSize: 12, color: '#757575' }}>
                Hotéis
                </Text>
            </View>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 18 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65 / 2, backgroundColor: '#36A951', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: '45%', width: '45%', alignItems: 'center', justifyContent: 'center', }}
                  source={require('../assets/gas.png')}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 8, fontWeight: '900', fontSize: 12, color: '#757575' }}>
                Combustível
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65 / 2, backgroundColor: '#fd7b14', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: '45%', width: '45%', alignItems: 'center', justifyContent: 'center', }}
                  source={require('../assets/shopping.png')}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 8, fontWeight: '900', fontSize: 12, color: '#757575' }}>
                Shoppings
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65 / 2, backgroundColor: '#FA359E', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{ height: '45%', width: '45%', alignItems: 'center', justifyContent: 'center', }}
                  source={require('../assets/grocerie.png')}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 8, fontWeight: '400', fontSize: 12, color: '#757575' }}>
                Lojas
                </Text>
            </View>
          </View>



          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 10 }}>
            <Image
              resizeMode='cover'
              style={{ height: 380, width: '100%', alignItems: 'center', justifyContent: 'center', }}
              source={require('../assets/map.png')}
            />
          </View>

        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1
  },

  scrollViewContent: {
    marginTop: 30,
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

export default Explore