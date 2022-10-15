import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
const MealsOverView = ({ navigation, route }) => {
  // we can use this useRoute hook to access to the route in nested components
  // const route = useRoute();
  const catID = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview screen {catID}</Text>
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
