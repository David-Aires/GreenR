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

export default class App extends React.Component {
  
  
  constructor(props){
    super(props);

    this.state={
      markerA: [
        {
          coordinate: {
            latitude: 50.665791,
            longitude: 4.612230,
          },
          title: "EPHEC",
          description: "Etat actuel: Bon\n Température: 12°C\n Humidité: 62%",
        },
      ],
      markerB: [
        {
          coordinate: {
            latitude: 50.667003,
            longitude: 4.616839,
          },
          title: "Martin V",
          description: "Etat actuel: Très bon\n Température: 12.5°C\n Humidité: 55%",
        },
      ],
      region: {
        latitude: 50.665791,
        longitude: 4.612230,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    }
  }
  
  render() {
    /*
         
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

     <MapView.Marker
            coordinate={this.state.markerA.latidude, this.state.markerA.longitude}
            title={this.state.markerA.title}
            description={this.state.markerA.description}
            image={markerImg}
         />


         <MapView.Marker
            coordinate={this.state.markerB.coordinate}
            title={this.state.markerB.title}
            description={this.state.markerB.description}
            image={markerImg}
         />
      */

    return (
      
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta,
          }}
          zoomEnabled={true}
          style={styles.mapStyle}
        >
        
        {this.state.markerA.map((marker, index) => {
      return (
        <MapView.Marker key={index} 
        coordinate={marker.coordinate}
        title={this.state.markerA.title}
        description={this.state.markerA.description}
        image={markerImg}
        >
          <Animated.View style={[styles.markerWrap]}>
            <Animated.View style={[styles.ring]} />
            <View style={styles.marker} />
          </Animated.View>
        </MapView.Marker>
      );
    })}

        {this.state.markerB.map((marker, index) => {
      return (
        <MapView.Marker key={index} 
        coordinate={marker.coordinate}
        title={this.state.markerB.title}
        description={this.state.markerB.description}
        image={markerImg}
        >
          <Animated.View style={[styles.markerWrap]}>
            <Animated.View style={[styles.ring]} />
            <View style={styles.marker} />
          </Animated.View>
        </MapView.Marker>
      );
    })}
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
