import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
3;
import { useState } from "react";

const FormField = ({ title, value, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Text>{title}</Text>
      <View className="flex-row items-center min-w-[80%] bg-gray-300">
        <TextInput
          className="text-xl flex-1 mx-1"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? "Hide" : "Show"}</Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default FormField;
