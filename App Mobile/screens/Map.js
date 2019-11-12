import React from 'react';
import MapView from 'react-native-maps';
import {  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions, } from 'react-native';

  import markerImg from '../assets/airbox_icon.png';
  import { createAppContainer } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {

  class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


  render() {
    /*{this.state.markers.map((marker, index) => {
      return (
        <MapView.Marker key={index} coordinate={marker.coordinate}>
          <Animated.View style={[styles.markerWrap]}>
            <Animated.View style={[styles.ring]} />
            <View style={styles.marker} />
          </Animated.View>
        </MapView.Marker>
      );
    })}*/

    state = {
      markers: [
        {
          coordinate: {
            latitude: 50.665791,
            longitude: 4.612230,
          },
          title: "EPHEC",
          description: "SCHOOL",
        },
      ],
      region: {
        latitude: 50.665791,
        longitude: 4.612230,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    };


    return (

      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 50.665791,
            longitude: 4.612230,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          zoomEnabled={true}
          style={styles.mapStyle}
        >
        <MapView.Marker
            coordinate={{latitude: 50.665791,
              longitude: 4.612230,}}
            title={"EPHEC"}
            description={"Etat actuel: Bon "}
            image={markerImg}
         />
         <MapView.Marker
            coordinate={{latitude: 50.667003,
              longitude: 4.616839,}}
            title={"Martin V"}
            description={"Etat actuel: Bon "}
            image={markerImg}
         />


      </MapView>
 </View>
      /*<View style={styles.container}>
        <MapView
        region={this.state.region}
        annotations={this.state.markers}
        zoomEnabled={true}
        style={styles.mapStyle} />
      </View>*/
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
