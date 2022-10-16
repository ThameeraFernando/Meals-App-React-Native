import { useContext } from "react";
import { Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { FlatList, StyleSheet, View } from "react-native";

const Favourite = () => {
  const FavoritesMealCtx = useContext(FavoritesContext);
  FavoritesMealCtx.ids;
  const favMeals = MEALS.filter((meal) =>
    FavoritesMealCtx.ids.includes(meal.id)
  );
  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no fav meals yet...</Text>
      </View>
    );
  }
  return <MealsList displayMeals={favMeals} />;
};

export default Favourite;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
