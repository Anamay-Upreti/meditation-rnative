import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
         <Text>Hi there!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
