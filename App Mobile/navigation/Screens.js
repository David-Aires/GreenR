import React from "react";
import { Easing, Animated,Button,View } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Map from "../screens/Map";
import A_Propos from "../screens/A_Propos";
import Elements from "../screens/Elements";
import Actu from "../screens/Actu";
// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const MapStack = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      header: <View>
                    <Button
                    title="Go back"
                    onPress={() => navigation.navigate("Home")}                    
                    />
                  <Header title="Map" navigation={navigation}/> 
              </View> 
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ActuStack = createStackNavigator({
  Actu: {
    screen: Actu,//vers où on va quand on clique
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Actu" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});



const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,//vers où on va quand on clique
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Home" navigation={navigation} />
      })
    },
    Map: {
      screen: Map,
      navigationOptions: ({ navigation }) => ({
        header: (
          <View>
            <Button title="Go back"
          onPress={() => navigation.navigate("Home")}
          />
          <Header left={<Block />} white transparent title="Map" navigation={navigation}/> 
          </View>
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);
// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Home" />
        )
      })
    },
    Map: {
      screen: MapStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Map" title="Map" />
        )
      })
    },
    Actu: {
      screen: ActuStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Actu" title="Actuality" />
        )
      })
    },
    A_Propos: {
      screen: A_Propos,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="A_Propos" title="About us" />
        )
      })
    },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
