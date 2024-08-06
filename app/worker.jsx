import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import FormField from "../components/form/formField";
import YesNoInput from "../components/form/yesNoInput";
import { createFireExtinguisherForm } from "../lib/appwrite";
import { getFireExtinguisherForms } from "../lib/appwrite";

export default function Worker() {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    licensePlate: "",
    date: "",
    time: "",
    inspector: "",
    serialNumber: "",
    typeRating: "",
    accessible: "No",
    wallMounted: "No",
    inspectionTag: "No",
    fullyCharged: "No",
    triggerLockPin: "No",
    damaged: "No",
    hoseNozzle: "No",
    pressureGauge: "No",
    additionalComments: "",
  });
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
        <StatusBar barStyle="dark-content" />

        <ScrollView className="my-14">
          <View className="flex-1 bg-gray-200 w-full mt-14 rounded-3xl">
            <View className="flex-row justify-between items-center mx-3 ">
              <Text className="text-3xl my-5">Fire Extinguisher Form</Text>
              <Pressable
                className="bg-orange-400 rounded-2xl p-2"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-xl ">Close</Text>
              </Pressable>
            </View>
            <View className=" w-[90%] bg-gray-500 rounded-2xl items-center self-center">
              <FormField
                title="License Plate"
                value={formData.licensePlate}
                onChange={(text) => handleChange("licensePlate", text)}
              />
              <FormField
                title="Date"
                value={formData.date}
                onChange={(text) => handleChange("date", text)}
              />
              <FormField
                title="Time"
                value={formData.time}
                onChange={(text) => handleChange("time", text)}
              />
              <FormField
                title="Inspector"
                value={formData.inspector}
                onChange={(text) => handleChange("inspector", text)}
              />
              <FormField
                title="Serial #"
                value={formData.serialNumber}
                onChange={(text) => handleChange("serialNumber", text)}
              />
              <FormField
                title="Type/ Rating"
                value={formData.typeRating}
                onChange={(text) => handleChange("typeRating", text)}
              />
              <YesNoInput
                title="Is the extinguisher accessible & unobstructed?"
                onChange={(value) => handleChange("accessible", value)}
              />
              <YesNoInput
                title="Is the extinguisher wall-mounted and secured?"
                onChange={(value) => handleChange("wallMounted", value)}
              />
              <YesNoInput
                title="Is the inspection tag attached & readable? Last annual inspection completed?"
                onChange={(value) => handleChange("inspectionTag", value)}
              />
              <YesNoInput
                title="Is it fully charged and operable? (needle in the green?)"
                onChange={(value) => handleChange("fullyCharged", value)}
              />
              <YesNoInput
                title="Is the trigger/ lock pin in-place? Is the clip broken?"
                onChange={(value) => handleChange("triggerLockPin", value)}
              />
              <YesNoInput
                title="Are the extinguishers damaged? Dented? Corroded?"
                onChange={(value) => handleChange("damaged", value)}
              />
              <YesNoInput
                title="Is the hose & nozzle secured and in good condition?"
                onChange={(value) => handleChange("hoseNozzle", value)}
              />
              <YesNoInput
                title="Is the pressure gauge in good condition?"
                onChange={(value) => handleChange("pressureGauge", value)}
              />
              <FormField
                title="Additional Comments"
                value={formData.additionalComments}
                onChange={(text) => handleChange("additionalComments", text)}
              />
              <Pressable
                onPress={() => {
                  console.log(formData);
                  createFireExtinguisherForm(formData);
                  setFormData({
                    licensePlate: "",
                    date: "",
                    time: "",
                    inspector: "",
                    serialNumber: "",
                    typeRating: "",
                    accessible: "No",
                    wallMounted: "No",
                    inspectionTag: "No",
                    fullyCharged: "No",
                    triggerLockPin: "No",
                    damaged: "No",
                    hoseNozzle: "No",
                    pressureGauge: "No",
                    additionalComments: "",
                  });

                  setModalVisible(false);
                }}
                className="bg-orange-400 rounded-2xl m-2 p-2"
              >
                <Text className="text-3xl">Submit</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
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
    justifyContent: "center",
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
