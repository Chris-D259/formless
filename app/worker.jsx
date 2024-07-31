import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import FormField from "../components/form/formField";

export default function Worker() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require("../assets/images/KBM.png")}
      />
      <View style={styles.orangeBar}></View>
      <Text style={styles.openingText}>Welcome Employee!</Text>
      <Text className="text-2xl">Required Forms for Today:</Text>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.button1}
        >
          <Text style={{ color: "white" }}>Fire Extinguisher Form</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: "white" }}>Form 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: "white" }}>Form 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: "white" }}>Form 4</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <View className="flex-1 justify-center items-center bg-blue-500">
          <View className=" w-4/5 bg-red-400 items-center">
            <View className="flex-row justify-between items-center px-2 bg-yellow-300 w-full">
              <Text>Fire Extinguisher Form</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text className="text-3xl">X</Text>
              </Pressable>
            </View>

            <FormField title="Date" placeholder="Date" />
            <FormField title="Name" placeholder="Name" />
            <FormField title="Password" placeholder="Password" />
            <Pressable
              onPress={() => setModalVisible(false)}
              className="justify-center items-center bg-orange-400 p-3"
            >
              <Text className="text-lg">Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.containerNav}>
        <View style={styles.navButton}>
          <Image
            style={styles.navImages}
            source={require("../assets/images/submissions.png")}
          />
          <Text style={styles.navButtonText}>Your Submissions</Text>
        </View>
        <View style={styles.navButton}>
          <Image
            style={styles.navImages}
            source={require("../assets/images/submit.png")}
          />
          <Text style={styles.navButtonText}>Submit Forms</Text>
        </View>
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
    margin: 10,
  },
  container2: {},
  containerNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    bottom: 0,
    position: "absolute",
  },
  navButton: {
    backgroundColor: "#D15617",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
  navButtonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  navImages: {
    width: 50,
    height: 50,
  },
});
