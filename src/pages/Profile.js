import React from 'react';
import {
  SafeAreaView, FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends React.Component {


  state = {

  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const columns = 2;
    return (
      <SafeAreaView style={{ backgroundColor: '#f4f4f4', flex: 1 }}>
        <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
        <ScrollView style={{ backgroundColor: '#f4f4f4', }}>

          <View style={{ marginTop: 20, marginHorizontal: 18 }} >
            <View>
              <Text style={{ fontSize: 32, marginTop:32, marginBottom:24, fontWeight: 'bold', color: '#4b4b4b' }}>Olá João!</Text>
              <View style={{ backgroundColor: '#fbfbfb', height: 150, borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Image style={{ height: 80, width: 80, resizeMode: 'contain', marginLeft: 16, flex:3 }} source={require('../assets/hero.png')}>

                </Image>
                <View style={{ width: '100%', justifyContent: 'center',flex:8,alignItems:'center' }}>
                  <Text style={{ fontWeight: 'bold', color: '#4b4b4b', fontSize: 16,  }}>
                    João Carlos Oliveira
                  </Text>

                  <Text style={{ fontWeight: 'bold', color: '#4b4b4b', fontSize: 16 }}>
                    23
                        </Text>
                  <Text style={{ fontWeight: 'bold', color: '#1B8161', fontSize: 13 }}>
                    Avaliações
                        </Text>
                </View>
              </View>
            </View>
            <View style={{ marginHorizontal: 6, marginTop: 18, marginBottom: 12 }}>

            </View>
          </View>

          <View>
            <View style={{ marginHorizontal: 16 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#949494' }}>Minhas avaliações</Text>
              <Text style={{ fontSize: 14, color: '#929699', marginBottom: 15 }}>Aqui você pode ver suas últimas avaliações e edita-las</Text>




              <View style={{ backgroundColor: '#FBFBFB', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/donalena.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Osteria Donna Lena
                </Text>


                <Icon style={{ marginRight: 15 }} name={'chevron-right'} size={20} color={'#949494'} />

              </View>

              <View style={{ backgroundColor: '#FBFBFB', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/madaloso.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Madaloso
            </Text>


                <Icon style={{ marginRight: 15 }} name={'chevron-right'} size={20} color={'#949494'} />

              </View>

              <View style={{ backgroundColor: '#FBFBFB', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/gianfranco.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Gianfranco Massas
                </Text>


                <Icon style={{ marginRight: 15 }} name={'chevron-right'} size={20} color={'#949494'} />

              </View>

              <View style={{ backgroundColor: '#FBFBFB', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/pizzahut.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Pizza Hut
                </Text>


                <Icon style={{ marginRight: 15 }} name={'chevron-right'} size={20} color={'#949494'} />

              </View>

              <View style={{ backgroundColor: '#FBFBFB', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/newyork.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  New York Café
              </Text>


                <Icon style={{ marginRight: 15 }} name={'chevron-right'} size={20} color={'#949494'} />

              </View>



            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B8161',
    flex: 1
  },
  item: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    padding: 10
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  text: {
    marginTop: 3,
    fontSize: 16,
    height: 30,
    fontWeight: 'bold',
    color: "#333333"
  },
  subtitle: {
    marginTop: 5,
    height: 50,
    color: "#929292",
    fontWeight: '600'
  }
});

export default Profile