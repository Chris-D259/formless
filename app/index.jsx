import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Index() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("worker");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require("../assets/images/KBM.png")}
      />
      <View style={styles.orangeBar}></View>
      <Text style={styles.openingText}>Welcome to Formless!</Text>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button1} onPress={handleSignIn}>
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
    justifyContent: "center", // Align items to the top of the container
  },
  orangeBar: {
    backgroundColor: "#D15617",
    width: "100%",
    height: 20,
    position: "absolute",
    top: 80,
  },
  openingText: {
    fontSize: 50,
    marginTop: 20,
    justifyContent: "center",
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
});
