import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);
  //}, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [isLightStatusBar, setIsLightStatusBar] = useState(true);

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > 208 && isLightStatusBar) {
      setIsLightStatusBar(false);
    } else if (e.nativeEvent.contentOffset.y < 208 && !isLightStatusBar) {
      setIsLightStatusBar(true);
    }
  };

  return (
    <>
      <BasketIcon />
      <ScrollView onScroll={handleScroll}>
        <StatusBar
          translucent={true}
          style={`${isLightStatusBar ? "light" : "dark"}`}
        />
        <View className="relative">
          <Image source={imgUrl} className="w-full h-56 bg-gray-300 p-4" />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-gray-100 top-14 left-5 h-8 w-8 items-center justify-center  rounded-full"
          >
            <ArrowLeftIcon size={20} color={"#00CCBB"}></ArrowLeftIcon>
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-600">
                  <Text className="text-green-600">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-600">
                  <Text className="text-gray-600">Nearby</Text> • {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-400 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>

          <View className="pb-32">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {/* Dishrows */}
            <DishRow
              id={1}
              name={"French fries"}
              description={"description test"}
              price={10.0}
              image={require("../assets/dishes/french-fries.jpeg")}
            />

            <DishRow
              id={2}
              name={"Coca Cola"}
              description={"description test"}
              price={5.94}
              image={require("../assets/dishes/coca-cola.jpg")}
            />

            <DishRow
              id={3}
              name={"Water"}
              description={"description test"}
              price={1.1}
              image={require("../assets/dishes/water.png")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
