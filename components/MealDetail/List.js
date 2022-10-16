import { Text, View, StyleSheet } from "react-native";

const List = ({ data }) => {
  return (
    <>
      {data.map((step) => {
        return (
          <View style={styles.listItem} key={step}>
            <Text style={styles.itemText}>{step}</Text>
          </View>
        );
      })}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "white",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
