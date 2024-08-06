import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const YesNoInput = ({ title, onChange }) => {
  const [answer, setAnswer] = useState("No");

  return (
    <View className="items-center rounded-md bg-gray-100 mt-4 p-1 w-[90%] ">
      <Text className="text-lg">{title}</Text>
      <View className="flex-row mt-2 ">
        <Pressable
          onPress={() => {
            if (answer === "No") {
              setAnswer("Yes");
              onChange("Yes");
            } else {
              setAnswer("No");
              onChange("No");
            }
          }}
          className="bg-gray-400 rounded-lg ml-3 px-1"
        >
          <Text className="text-lg">{answer}</Text>
        </Pressable>
        <TextInput
          className="bg-gray-200 w-[80%] ml-3"
          placeholderTextColor={"gray"}
          placeholder="Items needing action"
        />
      </View>
    </View>
  );
};

export default YesNoInput;
