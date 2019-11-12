import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';


export default class LocalCard extends React.Component {




  static navigationOptions = {
    title: 'Voltar',
    headerStyle: {
      backgroundColor: '#1B8161',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async componentDidMount() {

  }





  render() {
    return (
      <View
        key={this.props.i}
        style={styles.projectContainer}>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 120, height: 140, resizeMode: 'cover', margin: 5, borderRadius: 10, marginTop: 10 }}
              source={this.props.establishment.picture}
            />
          </View>
          <View style={{ flex: 5, marginLeft: 5, marginTop: 10 }}>
            <Text style={styles.establishmentTitle}>{this.props.establishment.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={[styles.establishmentTitle, { marginRight: 5, color: '#929699', fontSize: 15 }]}>{this.props.establishment.rating}</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={15}
                containerStyle={{ width: 90 }}
                fullStarColor={'#FBC02D'}
                emptyStarColor={'#ddd'}
                rating={this.props.establishment.rating}
              />
            </View>
            <Text style={styles.establishmentDate}>{this.props.establishment.street}</Text>
            <Text style={[styles.establishmentDate, { color: '#388E3C' }]}>{this.props.establishment.opened}</Text>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Establishment', {establishment: this.props.establishment})}
            style={{ height: 50, width: '90%', borderRadius: 10, backgroundColor: '#388E3C', marginTop: 10, justifyContent:'center', alignItems:'center' }}>
            <Text style={{color:'#fff'}}>
              Detalhes
            </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
  },

  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
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
    margin:5,
    borderRadius:10,
    height: 170,
    marginTop: 4,
    marginBottom: 4,

  },
  establishmentTitle: {
    fontSize: 18,

    fontWeight: '600',
    color: '#4b4b4b',
  },
  establishmentDate: {
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