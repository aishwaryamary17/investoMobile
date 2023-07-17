import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MarketsScreenLayout from "./Screens/MarketsScreen/MarketsScreenLayout";
import StockDetailsLayout from "./Screens/StockDetails/StockDetailsLayout";
import SearchScreenLayout from "./Screens/SearchScreen/SearchScreenLayout";
import PortfolioScreenLayout from "./Screens/PortfolioScreen/PortfolioScreenLayout";
import NewsScreenLayout from "./Screens/NewsScreen/NewsScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabIcon from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/Octicons";
import MenuIcon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

type leftHeaderProps = {
  color: string;
};

const CustomHeaderLeft = ({ color }: leftHeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <MenuIcon
      name="keyboard-arrow-left"
      size={35}
      color={color}
      style={{ paddingLeft: 12 }}
      onPress={handleGoBack}
    />
  );
};

const StockNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
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
        name="Main"
        component={MarketsScreenLayout}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: "#2c53f5",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <View style={styles.stockNameWrap}>
              <Text style={styles.stockSymbol}>
                {route.params.stockData.stockSymbol}
              </Text>
              <Text
                style={styles.stockName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {route.params.stockData.stockName}
              </Text>
            </View>
          ),
          headerLeft: () => <CustomHeaderLeft color={"#ffffff"} />,
        })}
        name="Details"
        component={StockDetailsLayout}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#2c53f5",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Explore",
          headerLeft: () => <CustomHeaderLeft color={"#ffffff"} />,
        }}
        name="Explore"
        component={SearchScreenLayout}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Markets"
        backBehavior="history"
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
            headerLeft: () => <CustomHeaderLeft color={"#ffffff"} />,
          }}
          name="Portfolio"
          component={PortfolioScreenLayout}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Markets"
          component={StockNavigation}
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
            headerLeft: () => <CustomHeaderLeft color={"#ffffff"} />,
          }}
          name="News"
          component={NewsScreenLayout}
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
  stockName: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
  },
  stockSymbol: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  stockNameWrap: {
    flexBasis: 0,
    flexGrow: 1,
    textAlign: "justify",
  },
});
