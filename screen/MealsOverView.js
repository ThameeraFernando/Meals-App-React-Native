import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverView = ({ navigation, route }) => {
  // we can use this useRoute hook to access to the route in nested components
  // const route = useRoute();
  const catID = route.params.categoryId;

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catID);
    navigation.setOptions({ title: category.title });
  }, [catID, navigation]);

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });
  return <MealsList displayMeals={displayMeals} />;
};

export default MealsOverView;
