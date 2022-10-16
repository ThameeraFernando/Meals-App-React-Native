import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "./data/dummy-data";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealDetailsScreen from "./screen/MealDetailsScreen";
import MealsOverView from "./screen/MealsOverView";

const Stack = createNativeStackNavigator();

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
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealDetail"
            component={MealDetailsScreen}
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
