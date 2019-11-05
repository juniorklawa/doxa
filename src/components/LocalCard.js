import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



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
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              style={{ width: 100, height: 150, resizeMode: 'cover' }}
              source={this.props.establishment.picture}
            />
          </View>
          <View style={{ flex: 3, marginLeft: 10 }}>
            <Text style={styles.establishmentTitle}>{this.props.establishment.title}</Text>
            <Text style={styles.establishmentDate}>{this.props.establishment.street}</Text>
            <Text style={styles.establishmentTitle}>{this.props.establishment.rating}</Text>
            <Text style={styles.establishmentDate}>{this.props.establishment.opened}</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center' }}>
          
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.props.establishment.reward}</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
        </View>
      </View>
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
  establishmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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