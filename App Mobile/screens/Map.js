<<<<<<< Updated upstream
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

  constructor(props){
    super(props);
    this.state ={ coord : []}
  }

  componentDidMount(){
    return fetch ('https://green-r.be/api/stats.php?position=ALL')
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

  renderCoo = () =>{
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

        {this.state.coord.map(marker => {
      return (
        <MapView.Marker key={index}
        coordinate={ {longitude: {marker.LON}},{latitude: {marker.LAT}} }
        //title={this.state.markerA.title}
        //description={this.state.markerA.description}
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
    );
  }


  //   this.state={
  //     markerA: [
  //       {
  //         coordinate: {
  //           latitude: 50.665791,
  //           longitude: 4.612230,
  //         },
  //         title: "EPHEC",
  //         description: "Etat actuel: Bon\n Température: 12°C\n Humidité: 62%",
  //       },
  //     ],
  //     markerB: [
  //       {
  //         coordinate: {
  //           latitude: 50.667003,
  //           longitude: 4.616839,
  //         },
  //         title: "Martin V",
  //         description: "Etat actuel: Très bon\n Température: 12.5°C\n Humidité: 55%",
  //       },
  //     ],
  //     region: {
  //       latitude: 50.665791,
  //       longitude: 4.612230,
  //       latitudeDelta: 0.005,
  //       longitudeDelta: 0.005,
  //     },
  //   }
  // }

  render() {
    return (
      <Block>
        {this.renderCoo()}
      </Block>
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
=======
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

  constructor(props){
    super(props);
    this.state ={ coord : []}
  }

  componentDidMount(){
    return fetch ('https://green-r.be/api/stats.php?box=1&table=POSITION&relever=dernier')
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

  renderCoo = () =>{
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

        {this.state.coord.map((marker,index) => {
      return (
        <MapView.Marker key={index}
        coordinate= {longitude: {this.state.coord.LON},latitude: {this.state.coord.LAT}} 
        //title={this.state.markerA.title}
        //description={this.state.markerA.description}
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
    );
  }


  //   this.state={
  //     markerA: [
  //       {
  //         coordinate: {
  //           latitude: 50.665791,
  //           longitude: 4.612230,
  //         },
  //         title: "EPHEC",
  //         description: "Etat actuel: Bon\n Température: 12°C\n Humidité: 62%",
  //       },
  //     ],
  //     markerB: [
  //       {
  //         coordinate: {
  //           latitude: 50.667003,
  //           longitude: 4.616839,
  //         },
  //         title: "Martin V",
  //         description: "Etat actuel: Très bon\n Température: 12.5°C\n Humidité: 55%",
  //       },
  //     ],
  //     region: {
  //       latitude: 50.665791,
  //       longitude: 4.612230,
  //       latitudeDelta: 0.005,
  //       longitudeDelta: 0.005,
  //     },
  //   }
  // }

  render() {
    return (
      <Block>
        {this.renderCoo()}
      </Block>
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
>>>>>>> Stashed changes
