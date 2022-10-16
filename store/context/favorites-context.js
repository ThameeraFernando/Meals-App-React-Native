import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [MealIds, setMealIds] = useState([]);
  const addFavorite = (id) => {
    setMealIds([...MealIds, id]);
  };
  const removeFavorite = (id) => {
    const newIds = MealIds.filter((mid) => mid !== id);
    setMealIds(newIds);
  };
  const value = {
    ids: MealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
