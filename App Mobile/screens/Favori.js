import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  FlatList
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

class Favori extends React.Component {

  _isMounted = false;

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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

    constructAPIdata= () => {
    
      this.catchAPIdata();
     
    var marker=[];
     for (let index = 0; index < this.state.dataCaught.length; index++) {
      console.log(index);
      var element = this.state.dataCaught[index];
      }
      return (
        <></>
      );
    } 
  
    renderFavori = () => {
      return (
              <View style={styles.container}>
                  <Text style={styles.valueText}>
                      Sélectionner une boxe favorite
                  </Text>
                  <RadioGroup radioButtons={this.state.box} onPress={this.onPress} />
              </View>
          
      
      )
    }

  }



    const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
      valueText: {
          fontSize: 18, 
          marginBottom: 50,
      },
  });