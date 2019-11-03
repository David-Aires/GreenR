import React from "react";
import { DrawerItems } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import { Block, theme,Text, } from "galio-framework";

import Images from "../constants/Images";


const { width } = Dimensions.get("screen");
const Drawer = props => (
  <Block backgroundColor="#574AA6" style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
      </ScrollView>
    </Block>

    <Block  flex={0.8} style={styles.header} >
      <Image styles={styles.logo} source={Images.Logo} /> 
      <Block>
                <Block>
                  <Text color="white" size={25}>
                    <Text color="#9acd32">Green-r</Text> pour un monde plus <Text color="#9acd32">vert</Text> !
                  </Text>
                  <Text color="grey" size={8}>
                  <Text>© 2019 Made with -Creative Tim-'s template</Text>
                  </Text>
                </Block>
              </Block>
    </Block>
  </Block>
);

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: "#574AA6",
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: "#9acd32",
    inactiveTintColor: "#FFF",
    activeBackgroundColor: "transparent",
    itemStyle: {
      width: width * 0.85,
      backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 30,
      marginLeft: 12,
      fontWeight: "normal",
      color: "white"
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 60,
    paddingBottom: 15,
    paddingTop: theme.SIZES.BASE,
    justifyContent: 'center',
    borderRadius: 200,
  },
  logo:{
   flex:1  
      
  }
});

export default Menu;
