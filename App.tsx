import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenLayout from "./Screens/HomeScreen/HomeScreenLayout";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabIcon from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/Octicons";
import MenuIcon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Markets"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let IconValue =
              route.name === "Markets" ? (
                <Icons
                  name="arrow-switch"
                  size={25}
                  color={focused ? "#2c53f5" : "#090909"}
                  style={styles.marketIcon}
                />
              ) : route.name === "Portfolio" ? (
                <BottomTabIcon
                  name="pie-chart"
                  size={25}
                  color={focused ? "#2c53f5" : "#090909"}
                />
              ) : (
                <Icon
                  name="text-box-outline"
                  size={25}
                  color={focused ? "#2c53f5" : "#090909"}
                />
              );
            return IconValue;
          },
          tabBarActiveTintColor: "#2c53f5",
          tabBarInactiveTintColor: "#090909",
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        })}
      >
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: "#2c53f5",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: "Portfolio",
            headerLeft: () => (
              <MenuIcon
                name="keyboard-arrow-left"
                size={35}
                color="#ffffff"
                style={{ paddingLeft: 12 }}
              />
            ),
          }}
          name="Portfolio"
          component={HomeScreenLayout}
        />
        <Tab.Screen
          name="Markets"
          component={HomeScreenLayout}
          options={{
            headerStyle: {
              backgroundColor: "#2c53f5",
            },
            headerTintColor: "#2c53f5",
            headerLeft: () => (
              <MenuIcon
                name="notes"
                size={25}
                color="#ffffff"
                style={{ paddingLeft: 20 }}
              />
            ),
            headerRight: () => (
              <Icon
                name="bell-outline"
                size={25}
                color="#ffffff"
                style={{ paddingRight: 20, paddingBottom: 5 }}
              />
            ),
          }}
        />
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: "#2c53f5",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: "News",
            headerLeft: () => (
              <MenuIcon
                name="keyboard-arrow-left"
                size={35}
                color="#ffffff"
                style={{ paddingLeft: 12 }}
              />
            ),
          }}
          name="News"
          component={HomeScreenLayout}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 15,
    height: 80,
    paddingBottom: 10,
  },
  tabBarLabel: {
    paddingBottom: 10,
  },
  marketIcon: {
    transform: [{ rotate: "90deg" }],
  },
});
