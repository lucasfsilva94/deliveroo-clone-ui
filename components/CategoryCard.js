import { Image, TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect } from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={imgUrl} className="h-20 w-20 rounded" />
      <Text className="abosulte bottom-5 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
