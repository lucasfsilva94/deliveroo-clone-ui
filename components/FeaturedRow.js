import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/*RestaurantCard*/}
        <RestaurantCard
          id={1}
          imgUrl={require("../assets/restaurants/Nando-s.jpg")}
          title="Nando's"
          rating={4.8}
          genre="Offers"
          address="Clink Street"
          short_description="Nando's is a South African multinational fast casual chain that specialises in flame-grilled peri-peri style chicken"
          dishes={[]}
          long={-0.09268672495870013}
          lat={51.50732881904152}
        />
        <RestaurantCard
          id={2}
          imgUrl={require("../assets/restaurants/Yo-Sushi.jpg")}
          title="Yo! Sushi"
          rating={4.5}
          genre="Sushi"
          address="Tottenham Court Road"
          short_description="This is a Test description"
          dishes={[]}
          long={-0.14750662705137133}
          lat={51.514095137964546}
        />
        <RestaurantCard
          id={3}
          imgUrl={require("../assets/restaurants/Wagamama.jpg")}
          title="Wagamama"
          rating={5}
          genre="Asian"
          address="Southbank"
          short_description="Welcome to Wagamama where we serve asian food inspired by that flavours of japan, a place of positive eating for positive living!"
          dishes={[]}
          long={-0.13891653869333692}
          lat={51.51424865257089}
        />

        <RestaurantCard
          id={4}
          imgUrl={require("../assets/restaurants/KFC.png")}
          title="KFC"
          rating={4.2}
          genre="Offers"
          address="Waterloo"
          short_description="KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken"
          dishes={[]}
          long={-0.12855380547711687}
          lat={51.51163338188806}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
