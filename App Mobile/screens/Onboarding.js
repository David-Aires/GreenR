import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Animated,
  View
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {


  constructor(props) {
    super(props);
    this.loadingSpin = new Animated.Value(0);
  }

  spinAnimation() {
    this.loadingSpin.setValue(0);

    Animated.sequence([

        Animated.timing(
            this.loadingSpin,
            {
                toValue: 1,
                duration: 1000
            }
        )
    ]).start(() => this.spinAnimation());
  } 


  componentDidMount() {
    this.spinAnimation();
  }
  render() {
    const { navigation } = this.props;


        // 0 -> 1
        // 0 -> 360
        const spin = this.loadingSpin.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
      });
    /*
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        */


       /*<View style={{ opacity: (this.props.show || true) ? 1 : 0 }}>
       <Animated.Image style={{ width:100,height:100, transform: [{ rotate: spin }], justifyContent: 'center', alignItems: 'center', }} source={require('../assets/splash.png')} />
     </View>*/
    return (
      
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>

        
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block>
                  <Text color="white" size={50}>
                    <Text color="#9acd32">Green-r</Text> pour un monde plus <Text color="#9acd32">vert</Text> !
                  </Text>
                  




                </Block>
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("Home")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Découvrir
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
	borderRadius:15,
  color:"#505739",
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
