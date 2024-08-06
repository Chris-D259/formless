import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SignIn } from "@/lib/appwrite";

export default function signIn() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    } else if (email === "admin" && password === "admin") {
      navigation.navigate("admin");
    } else if (email === "emp" && password === "emp") {
      navigation.navigate("worker");
    } else if (email === "sup" && password === "sup") {
      navigation.navigate("supervisor");
    } else {
      alert("Invalid credentials");
      console.log(email, password);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require("../assets/images/KBM.png")}
      />
      <View style={styles.orangeBar}></View>
      <Text style={styles.openingText}>Log In</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={{ color: "white" }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  openingText: {
    fontSize: 50,
    marginTop: 20,
    position: "absolute",
    top: 100,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  orangeBar: {
    backgroundColor: "#D15617",
    width: "100%",
    height: 20,
    position: "absolute",
    top: 80,
  },
  logoImage: {
    position: "absolute",
    top: 20,
  },
  button1: {
    backgroundColor: "#666566",
    color: "white",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  container2: {
    top: 200,
  },
  formContainer: {
    top: 20,
  },
});
