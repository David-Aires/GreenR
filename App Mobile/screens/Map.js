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

  componentDidMount(){
    //return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch ('https://green-r.be/api/stats.php?box=1&table=AIR_STAT')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  constructor(props){
    super(props);




    this.state={

      isLoading: true,

      marker1: [
        {
          coordinate: {
            latitude: 50.665791,
            longitude: 4.612230,
          },
          title: "EPHEC",
          description: "Etat actuel: Bon\nTempérature: 12°C\nHumidité: 62%",
        },
      ],
      marker2: [
        {
          coordinate: {
            latitude: 50.667003,
            longitude: 4.616839,
          },
          title: "Martin V",
          description: "Etat actuel: Très bon\nTempérature: 12.5°C\nHumidité: 55%",
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
            coordinate={this.state.marker1.latidude, this.state.marker1.longitude}
            title={this.state.marker1.title}
            description={this.state.marker1.description}
            image={markerImg}
         />


         <MapView.Marker
            coordinate={this.state.marker2.coordinate}
            title={this.state.marker2.title}
            description={this.state.marker2.description}
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



            data={this.state.dataSource}
            renderItem={({item}) => 
            <Text>
            
            {item.ID_AIR}, 
            {item.TEMPERATURE},
            {item.HUMIDITY},
            {item.CO2},
            {item.DATE}
            
            </Text>}
            keyExtractor={({ID_AIR}, index) => ID_AIR}


          >
          
          {this.state.marker1.map((marker, index) => {
        return (
          <MapView.Marker key={index} 
          coordinate={marker.coordinate}
          title={this.state.marker1.title}
          description={this.state.marker1.description}
          image={markerImg}
          >
            <MapView.Callout tooltip style={styles.customView}>
                <View style={styles.calloutText}>
                  <Text>{marker.title}{"\n"}{marker.description}</Text>
                </View>
            </MapView.Callout>

          </MapView.Marker>
        );
      })}

          {this.state.marker2.map((marker, index) => {
        return (
          <MapView.Marker key={index} 
          coordinate={marker.coordinate}
          title={this.state.marker2.title}
          description={this.state.marker2.description}
          image={markerImg}
          >
            <MapView.Callout tooltip style={styles.customView}>
                <View style={styles.calloutText}>
                  <Text>{marker.title}{"\n"}{marker.description}</Text>
                </View>
            </MapView.Callout>
          </MapView.Marker>
        );
      })}
        </MapView>
  </View>
      
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
