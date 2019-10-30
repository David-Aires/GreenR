import React from 'react';
import { 
  StyleSheet, 
  Text,
  Image, 
  View,
  ActivityIndicator

 } from 'react-native';

 
 import Dashboard from './Dashboard'

import MyLoading from '../src/components/myLoading.js'
import { StackActions, NavigationActions } from 'react-navigation';




 export default class HomeScreen extends React.Component{
  constructor(props) {

    super(props);

  this.state = {
    isLoading: false,
    requestResponse: ''
    }
  }

  static navigationOptions = {
    header: null,
  }

  

  render(){
    setTimeout( () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
          });
          this.props.navigation.dispatch(resetAction);
     },5000);
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image 
          style={{width:150,height:120}}
          source={require('../src/img/logo.png')}/>
        <Text style={styles.title}>GreenR</Text>
        <Text style={styles.subtitle}>
          <Text>Pour un monde plus</Text>
          <Text style={{color: 'yellowgreen', fontWeight: 'bold'}}> vert</Text>
        </Text>
      </View>
      <View style={styles.loading}>
        <MyLoading  show={this.state.isLoading} />
      </View> 
    </View>
  )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483a9c',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  subtitle: {
    color: '#fff',
    fontWeight: 'normal'
  },
  loading: {
    flexGrow: 1,
    alignSelf: 'center'

  }
});

