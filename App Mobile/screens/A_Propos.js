import React from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  FlatList,
  Linking,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

class A_Propos extends React.Component {
  render() {
    return (
      <Block flex middle backgroundColor='#574AA6'>
        <StatusBar hidden />
          <Block flex middle>
            <Block style={styles.A_ProposContainer}>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  ><ScrollView>
                        <Block>
                          <View>
                          <Text center style={styles.titre}>GREEN-R</Text> 
                          </View>
                        </Block>
                       <Block paddingLeft>
                        <Text padding={30}>
                          <Text color="#B4CC04" >Green-R </Text> 
                          est un projet lancé par des étudiants, 
                          il a pour but de <Text color="#B4CC04">résoudre une problématique croissante et réelle</Text> 
                          que nous rencontrons au quotidien. 
                          Nous voulons donner un accès à des données sur <Text color="#B4CC04">la qualité de l’air</Text> sur différentes entités 
                          <Text color="#B4CC04">(école, commune, centre sportif, …)</Text> à l'aide de notre produit, 
                          pouvant ainsi permettre une analyse de la qualité de l’air. Avec ces informations, 
                          des décisions pourront être prises si la qualité de l’air se révèle être mauvaise :
                        </Text>
                        <View style={styles.container}>
                              <FlatList
                                data={[
                                  {key: '                                    '},
                                  {key: 'Réduction de la vitesse des voitures'},
                                  {key: 'Plantation d’arbres'},
                                  {key: 'Aménagement des voiries'},
                                  {key: 'Cas extrême : fermeture des voiries'},
                                  {key: '                                   '},
                                ]}
                                renderItem={({item}) => 
                                  <Text style={styles.item} color={"black"}     >{item.key}</Text>}                      
                              />
                        </View>
                    </Block>
                    <Block>
                          <View>
                          <Text style={styles.titre}>L'équipe</Text> 
                          </View>
                        </Block>
                       <Block></Block>
                      <Block>
                      <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.linkedin.com/in/david-aires/')}
                            style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/david.png')}
                            style={styles.image}/>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={styles.textImage}>Aires David</Text>
                          <Text style={{textAlign: 'center'}}>Infrastructure réseau et développement Web</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL('https://github.com/David-Aires')}
                          style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/githubicon.png')}
                            style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                    </Block>

                    <Block>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.linkedin.com/in/renaud-allard-824537195/')}
                            style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/renaud.png')}
                            style={styles.image}/>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={styles.textImage}>Allard Renaud</Text>
                          <Text style={{textAlign: 'center'}}>Application Mobile</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL('https://github.com/rebald')}
                          style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/githubicon.png')}
                            style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                    </Block>

                    <Block>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.linkedin.com/in/souha%C3%AFb-azzouz-a92b67198/')}
                            style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/souhaib.png')}
                            style={styles.image}/>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={styles.textImage}>Azzouz Souhaïb</Text>
                          <Text style={{textAlign: 'center'}}>Designer et communication</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL('https://github.com/souhaibazzouz')}
                          style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/githubicon.png')}
                            style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                    </Block>

                    <Block>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://google.com')}
                            style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/quentin.png')}
                            style={styles.image}/>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={styles.textImage}>Lebrun Quentin</Text>
                          <Text style={{textAlign: 'center'}}>Application Mobile</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL('https://github.com/Quentin-Lebrun')}
                          style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/githubicon.png')}
                            style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                    </Block>

                    <Block>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://google.com')}
                            style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/cyril.png')}
                            style={styles.image}/>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={styles.textImage}>Tongres Cyril</Text>
                          <Text style={{textAlign: 'center'}}>Développement électronique et communication</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL('https://github.com/Cyrton')}
                          style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/githubicon.png')}
                            style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                    </Block>
                    <Block>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.linkedin.com/in/guillaume-vanden-herrewegen-403578190/')}
                            style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/guillaume.png')}
                            style={styles.image}/>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={styles.textImage}>Vanden Herrewegen Guillaume</Text>
                          <Text style={{textAlign: 'center'}}>Développement électronique et développement Web</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL('https://github.com/guivdh')}
                          style={{padding: 5}}>
                          <Image
                            source={require('../assets/image/githubicon.png')}
                            style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                    </Block>
                    </ScrollView>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  A_ProposContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#3A4750'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 5
  },
 
  textImage: {
    textAlign: 'center',
    paddingVertical: 5,
    color: '#3A4750',
    fontWeight: 'bold'
  },
  titre: {
    color: '#18391e',
    fontWeight: 'bold',
    fontSize: 25
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  icon: {
    width: 30,
    height: 30
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default A_Propos;
