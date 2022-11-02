import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigation } from "@react-navigation/core";
import { usePushNotificationsContext } from "../context/push-notification-context/push-notification-context";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { handleNotification } = usePushNotificationsContext();

  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleNotification();
        navigation.navigate("Welcome");
        console.log("Signed in!", user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Something's wrong!");
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>Login</Text>
      </View>
      <View>
        <View style={styles.formWrapper}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formWrapper}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Go</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  mainText: {
    fontSize: 28,
    fontWeight: "600",
  },
  formWrapper: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    width: 250,
    height: 50,
    alignItems: "center",
    paddingLeft: 20,
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
