import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image, SafeAreaView, TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




class Login extends React.Component {


  state = {
    login: 'joaocarlos'
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor:'#fff' }}>
        
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image
              resizeMode='contain'
              style={{ height: 100, alignItems: 'center', justifyContent: 'center', marginTop: -100, marginBottom: 30 }}
              source={require('../assets/logo.png')}
            />
            <View>
              <Text style={{ fontWeight: 'bold', color: '#424242', fontSize: 28, marginBottom: 16 }}>
                Login
          </Text>
              <TextInput
                style={[{ borderColor: '#ddd', backgroundColor: '#ddd', borderWidth: 1, padding: 10, borderRadius: 10, width: 300 }]}
                autoCorrect={false}
                value={this.state.login}
                onChangeText={login => this.setState({ login })}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
              onPress={() =>  this.props.navigation.navigate('Explore')}
              style={{ height: 50, backgroundColor: '#00897B', borderRadius: 5, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>
                  Entrar
            </Text>
              </TouchableOpacity>
            </View>

          </View>
        
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center'
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

export default Login