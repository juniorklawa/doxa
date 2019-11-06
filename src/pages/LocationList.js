import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Picker
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import LocalCard from '../components/LocalCard'
import Icon from 'react-native-vector-icons/FontAwesome';


class LocationList extends React.Component {


  state = {
    nota: 'Nota',
    missions: [{


      title: 'Raveli Restaurante',
      date: 'Qua, 23 de Agosto',
      rating: 4.3,
      street: 'Rua Manoel Vicente de Oliveira Mello, 1581',
      opened: 'Aberto até: 23:00',
      picture: require('../assets/raveli.jpg')
    },
    {


      title: 'Osteria Donna Lena',
      date: 'Qua, 23 de Agosto',
      rating: 4.5,
      street: 'Rua Recife, 220 - Cabral',
      opened: 'Aberto até: 23:00',
      picture: require('../assets/donalena.jpg')
    },
    {


      title: 'Replica Hambúrguer',
      date: 'Qua, 25 de Agosto',
      rating: 3.2,
      street: 'Rua Anita Garibaldi, 1150',
      opened: 'Aberto até: 01:00',
      picture: require('../assets/replica.jpg')
    },


    {


      title: 'Kharina',
      street: 'Rua Dep. Joaquim José Pedrosa, 13',
      rating: 3.5,
      opened: 'Aberto até: 23:00',
      picture: require('../assets/kharina.jpg')
    },


    {

      title: 'Babilônia Gastronomia & Cia',
      rating: 4.2,
      opened: 'Aberto até: 01:00',
      street: 'Avenida Munhoz da Rocha, 1059 - Cabral',
      picture: require('../assets/babilonia.jpg')
    },



    ]
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
          <View style={{ height: 80, width: '100%', backgroundColor: '#fff', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'red', borderRadius: 25, marginVertical: 20, marginHorizontal: 5, justifyContent: 'center' }}>
              <Picker
                selectedValue={'this.state.nota'}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ nota: itemValue })
                }>
                <Picker.Item label="Nota" value="Maior nota" />

              </Picker>
            </View>

            <View style={{ backgroundColor: 'red', borderRadius: 25, marginVertical: 20, marginHorizontal: 5, justifyContent: 'center' }}>
              <Picker
                selectedValue={'this.state.nota'}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ nota: itemValue })
                }>
                <Picker.Item label="Acessibilidade" value="Maior nota" />

              </Picker>
            </View>

                        <View style={{ backgroundColor: 'red', borderRadius: 25, marginVertical: 20, marginHorizontal: 5, justifyContent: 'center' }}>
              <Picker
                selectedValue={'this.state.nota'}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ nota: itemValue })
                }>
                <Picker.Item label="Acessibilidade" value="Maior nota" />

              </Picker>
            </View>
          </View>
          <ScrollView style={styles.scrollViewContent}>
            {this.state.missions.map((establishment, i) => (
              <LocalCard establishment={establishment}></LocalCard>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
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

export default LocationList