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
<<<<<<< Updated upstream

//   class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }
  state ={
    data: []
  };

  sync componentDidMount() {
        //Have a try and catch block for catching errors.
        try {

            const GreenrApiCall = await fetch('https://green-r.be/api/stats.php?position=ALL');
            const BoxPosition = await GreenrApiCall.json();

            this.setState({ data: json.results });

        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    };


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

=======


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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======

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

    //     {this.state.markerB.map((marker, index) => {
    //   return (
    //     <MapView.Marker key={index}
    //     coordinate={marker.coordinate}
    //     title={this.state.markerB.title}
    //     description={this.state.markerB.description}
    //     image={markerImg}
    //     >
    //       <Animated.View style={[styles.markerWrap]}>
    //         <Animated.View style={[styles.ring]} />
    //         <View style={styles.marker} />
    //       </Animated.View>
    //     </MapView.Marker>
    //   );
    // })}
      </MapView>
 </View>
>>>>>>> Stashed changes
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
