import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/*CategoryCard*/}
      <CategoryCard
        imgUrl={require("../assets/categories/offers.png")}
        title="Offers"
      />
      <CategoryCard
        imgUrl={require("../assets/categories/grocery.png")}
        title="Grocery"
      />
      <CategoryCard
        imgUrl={require("../assets/categories/asian.png")}
        title="Asian"
      />
      <CategoryCard
        imgUrl={require("../assets/categories/ramen.png")}
        title="Ramen"
      />
      <CategoryCard
        imgUrl={require("../assets/categories/burges.png")}
        title="Burges"
      />
    </ScrollView>
  );
};

export default Categories;
