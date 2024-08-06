import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFireExtinguisherForms } from "../lib/appwrite";
import { useEffect, useState } from "react";
import { Modal } from "react-native";

const FormsPage = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    getFireExtinguisherForms()
      .then((response) => {
        setForms(response.documents);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleFormPress = (form) => {
    setSelectedForm(form);
    setShowModal(true);
  };

  if (loading) {
    return (
      <View className=" w-full h-full items-center ">
        <Text className="text-4xl mt-14 ">Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View className="items-center">
            <Text className="text-2xl mb-5">Forms</Text>
            <View className="w-full justify-between flex-row bg-orange-400 ">
              <Text className="flex-1 text-lg">Inspector</Text>
              <Text className="flex-1 text-lg">Date</Text>
              <Text className="flex-1 text-lg">Time</Text>
            </View>
          </View>
          {forms.map((form) => (
            <Pressable
              onPress={(e) => handleFormPress(form)}
              className="flex-row border border-black py-1 justify-between mb-0.5 bg-gray-200"
              key={form.$id}
            >
              <Text className="flex-1 text-lg">{form.inspector}</Text>
              <Text className="flex-1 text-lg">{form.date}</Text>
              <Text className="flex-1 text-lg">{form.time}</Text>
              {/* <Text>{form.licensePlate}</Text>
              <Text>{form.serialNumber}</Text>
              <Text>{form.typeRating}</Text> */}
              {/* <Text>{form.accessible}</Text>
              <Text>{form.wallMounted}</Text>
              <Text>{form.inspectionTag}</Text>
              <Text>{form.fullyCharged}</Text>
              <Text>{form.triggerLockPin}</Text>
              <Text>{form.damaged}</Text>
              <Text>{form.hoseNozzle}</Text>
              <Text>{form.pressureGauge}</Text>
              <Text>{form.additionalComments}</Text> */}
            </Pressable>
          ))}
        </View>
        <Modal animationType="slide" visible={showModal}>
          <ScrollView>
            <View className="w-full h-full items-center my-14 ">
              <View className="items-center bg-orange-200 w-[90%] rounded-md m-3 ">
                <Text className="text-3xl">Form Details</Text>
              </View>
              <View className="bg-gray-200 w-[90%] rounded-3xl p-5">
                <Text className="text-2xl">
                  Inspector: {selectedForm?.inspector}
                </Text>
                <Text className="text-2xl">Date: {selectedForm?.date}</Text>
                <Text className="text-2xl">Time: {selectedForm?.time}</Text>
                <Text className="text-2xl">
                  Serial Number: {selectedForm?.serialNumber}
                </Text>
                <Text className="text-2xl">
                  Type Rating: {selectedForm?.typeRating}
                </Text>
                <Text className="text-2xl">
                  Accessible: {selectedForm?.accessible}
                </Text>
                <Text className="text-2xl">
                  Wall Mounted: {selectedForm?.wallMounted}
                </Text>
                <Text className="text-2xl">
                  Inspection Tag: {selectedForm?.inspectionTag}
                </Text>
                <Text className="text-2xl">
                  Fully Charged: {selectedForm?.fullyCharged}
                </Text>
                <Text className="text-2xl">
                  Trigger Lock Pin: {selectedForm?.triggerLockPin}
                </Text>
                <Text className="text-2xl">
                  Damaged: {selectedForm?.damaged}
                </Text>
                <Text className="text-2xl">
                  Hose Nozzle: {selectedForm?.hoseNozzle}
                </Text>
                <Text className="text-2xl">
                  Pressure Gauge: {selectedForm?.pressureGauge}
                </Text>
                <Text className="text-2xl">
                  Additional Comments: {selectedForm?.additionalComments}
                </Text>
              </View>
              <Pressable
                className="w-[20%] bg-orange-300 items-center rounded-xl p-2 mt-5"
                onPress={() => {
                  setShowModal(false);
                  setSelectedForm(null);
                }}
              >
                <Text className="text-2xl">Close</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormsPage;
