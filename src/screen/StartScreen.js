import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { auth } from "../../firebase-config";

const StartScreen = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Login");
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Welcome");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hello</Text>
      <Pressable style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 28,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
