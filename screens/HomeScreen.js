import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/header.png")}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <View className="mt-1 ml-1">
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="-mr-1 bg-gray-50 rounded-full h-10 w-10 items-center justify-center">
          <UserIcon size={30} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-100 p-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity>
          <AdjustmentsHorizontalIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/*Body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/*Categories*/}
        <Categories />

        {/*Offers near you*/}
        <FeaturedRow
          id="1"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />

        {/*Featured*/}
        <FeaturedRow
          id="2"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/*Tasty Discounts*/}
        <FeaturedRow
          id="3"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
