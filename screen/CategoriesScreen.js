import { View, FlatList } from "react-native";
import CategoryGrideTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGrideTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
