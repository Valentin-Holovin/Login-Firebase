import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { auth } from "../../firebase-config";
import { useNavigation } from "@react-navigation/core";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Auth", {
          screen: "Login",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome</Text>
      <Text>Email: {auth.currentUser.email}</Text>
      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>logout</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

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
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
