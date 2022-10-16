import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
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
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        id={itemData.item.id}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
