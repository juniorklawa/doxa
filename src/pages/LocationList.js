import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import LocalCard from '../components/LocalCard'


class LocationList extends React.Component {


  state = {
    missions: [{
      
      
      title: 'Raveli Restaurante',
      date: 'Qua, 23 de Agosto',
      rating: `Nota: 4.3`,
      street: 'Rua Manoel Vicente de Oliveira Mello, 1581 - Tarumã',
      opened:'Aberto até: 23:00',
      picture: require('../assets/raveli.jpg')
    },
    {
      
      
      title: 'Osteria Donna Lena',
      date: 'Qua, 23 de Agosto',
      rating: `Nota: 4.5`,
      street: 'Rua Recife, 220 - Cabral',
      opened:'Aberto até: 23:00',
      picture: require('../assets/donalena.jpg')
    },
    {
      
      
      title: 'Replica Hambúrguer',
      date: 'Qua, 25 de Agosto',
      rating: `Nota: 3.0`,
      street: 'Rua Anita Garibaldi, 1150',
      opened:'Aberto até: 01:00',
      picture: require('../assets/replica.jpg')
    },


    {
      
      
      title: 'Kharina',
      street: 'Rua Dep. Joaquim José Pedrosa, 13',
      rating: `Nota: 3.5`,
      opened:'Aberto até: 23:00',
      picture: require('../assets/kharina.jpg')
    },


    {
      
      title: 'Babilônia Gastronomia & Cia',
      rating: `Nota: 4.2`,
      opened:'Aberto até: 01:00',
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
          <ScrollView style={styles.scrollViewContent}>
            <Text style={styles.headerTitle}>Estabelecimentos</Text>

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
    margin: 8,
    borderRadius: 20
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