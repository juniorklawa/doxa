import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';





class Ranking extends React.Component {

  state = {
    isVisible: false
  }

  async componentDidMount() {

  }


  render() {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>

        <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
        <View style={styles.container}>

          <ScrollView style={styles.scrollViewContent}>


            <View style={{ marginHorizontal: 10 }}>


              <Text style={{ fontSize: 32, color: '#949494', marginTop: 18, fontWeight: 'bold' }}>
                Ranking
            </Text>
              <Text style={{ fontSize: 16, color: '#949494', fontWeight: '600', marginBottom: 25, }}>
                Top 10 locais de Novembro
            </Text>

              <View style={{ backgroundColor: '#FDD835', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/newyork.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  New York Café
                  </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.98
                  </Text>
                </View>

              </View>
              <View style={{ backgroundColor: '#E0E0E0', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/madaloso.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Madaloso
                  </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.96
                  </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#A1887F', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/taisho.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Taisho Yakiniku
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.95
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/gianfranco.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Gianfranco Massas
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.92
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/pizzahut.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Pizza Hut
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.90
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/horaextra.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Hora Extra
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.89
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/frens.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Restaurante Frens
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.87
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/spaghetto.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Spaghetto
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.85
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/mcdonalds.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  McDonald's
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.84
                </Text>
                </View>

              </View>

              <View style={{ backgroundColor: '#F5f5f5', borderRadius: 10, height: 75, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>

                <Image
                  style={{ width: 50, height: 50, resizeMode: 'cover', marginStart: 10, borderRadius: 10 }}
                  source={require('../assets/mrhoppy.jpg')}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Mr. Hoppy
                </Text>
                <View style={{ backgroundColor: '#FFEE58', width: 80, height: 40, marginRight: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    4.82
                </Text>
                </View>

              </View>

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

export default Ranking