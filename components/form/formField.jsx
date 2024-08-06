import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";

const FormField = ({ title, value, placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Text className="text-2xl m-1">{title}</Text>
      <View className="flex-row items-center min-w-[80%] bg-gray-300">
        <TextInput
          className="text-xl flex-1 mx-1"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
          onChangeText={onChange}
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
