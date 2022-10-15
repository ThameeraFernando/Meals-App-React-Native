import { View, FlatList } from "react-native";
import CategoryGrideTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGrideTile
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

const CategoriesScreen = () => {
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
