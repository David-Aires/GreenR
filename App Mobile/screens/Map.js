import React from 'react';
import MapView from 'react-native-maps';
import { 
  StyleSheet,
  Text,
  View,
  Dimensions, } from 'react-native';

  import markerImg from '../assets/airbox_icon.png';

export default class App extends React.Component {

  _isMounted = false;


  constructor(props){
    super(props);

    this.state={
      
      dataLength: null,
      dataCaught: [],
      isLoading: true,

     
        region: {
        latitude: 50.665791,
        longitude: 4.612230,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    }
  }

 
  componentDidMount(){
    this._isMounted = true;
    this.catchAPIdata();
  }


  componentWillUnmount() {
    this._isMounted = false;
  }
  

  catchAPIdata= () =>{

    fetch('https://green-r.be/api/stats.php?position=ALL')
        .then((response) => response.json())
        .then((responseJson) => {


        

          this.setState({
            isLoading: false,
                       
          }, function(){
              const dataCaught = responseJson;
              const dataLength = Object.keys(dataCaught).length;

              this.setState({
                dataLength: dataLength,
                dataCaught: dataCaught,
              })

              if (this._isMounted) {
                this.setState({isLoading: false})
              }


          });
        })
        .catch((error) =>{
          console.warn(error);
        });
  }

/** 
 attention cette partie crée des problèmes du type

--->    Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. 
 To fix, cancel all subscriptions and asynchronous tasks in %s.%s, the componentWillUnmount method

en cours de recherche 
*/

      constructAPIdata= () => {
      
        this.catchAPIdata();
       
      var marker=[];
       for (let index = 0; index < this.state.dataCaught.length; index++) {
       // console.log(index);
        var element = this.state.dataCaught[index];
  
          marker.push(
            
            <MapView.Marker key={index} 
            coordinate={{latitude: Number.parseFloat(element.latitude) , longitude: Number.parseFloat(element.longitude)}}
            title={"AirBox N°"+ (index+1)}
            description={element.box}
            image={markerImg}
            >
                <MapView.Callout tooltip style={styles.customView}>
                  <View style={styles.calloutText}>
                    
                  <Text>{"AirBox N°"+ (index+1)}{"\n"}{Number.parseFloat(element.latitude)}{"\n"}{Number.parseFloat(element.longitude)}
                  {"\n"}{element.altitude}</Text>

                  </View>
                </MapView.Callout>
            </MapView.Marker>

            
          );
        }
        return (
          <>
            {marker}
          </>
        );
      } 
  

  render() {


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

          
          {this.constructAPIdata()}
         
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
