import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "./data/dummy-data";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealDetailsScreen from "./screen/MealDetailsScreen";
import MealsOverView from "./screen/MealsOverView";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourite from "./screen/Favourite";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#24180f",
        },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#24180f",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealDetail"
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="tap me" />;
            //   },
            // }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverView}
            // // options={({ navigation, route }) => {
            // //   const catID = route.params.categoryId;
            // //   const category = CATEGORIES.find(
            // //     (category) => category.id === catID
            // //   );
            // //   return {
            // //     title: category.title,
            // //   };
            // }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
