import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    marginVertical: 6,
    padding: 6,
    marginHorizontal: 24,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
