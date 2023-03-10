import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "LK9nJotDn5vcO4wzZrldrSHoZZkiavgwHMrTT2IyFDu8MjFwTOYt7c6OrnobMymgCwtRfMkVRAdk6AFqeN0A_RktPP41Ok66An2Wklgss2J1tb__vYaJ1Tv27LmvY3Yx";

export default function Home({ navigation }) {

  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("Manchester");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: "Bearer LK9nJotDn5vcO4wzZrldrSHoZZkiavgwHMrTT2IyFDu8MjFwTOYt7c6OrnobMymgCwtRfMkVRAdk6AFqeN0A_RktPP41Ok66An2Wklgss2J1tb__vYaJ1Tv27LmvY3Yx",
      },
    };
    // .filter((business) =>
    //     business.transactions.includes(activeTab.toLowerCase())

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setRestaurantData(json.businesses)
      });
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
// const YELP_API_KEY =
//   "LK9nJotDn5vcO4wzZrldrSHoZZkiavgwHMrTT2IyFDu8MjFwTOYt7c6OrnobMymgCwtRfMkVRAdk6AFqeN0A_RktPP41Ok66An2Wklgss2J1tb__vYaJ1Tv27LmvY3Yx";

// export default function Home({ navigation }) {
//   const [restaurantData, setRestaurantData] = useState([]);
//   const [city, setCity] = useState("newyork");
//   const [activeTab, setActiveTab] = useState("Delivery");

//   const getRestaurantsFromYelp = async () => {
//     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
//     const apiOptions = {
//       headers: {
//         Authorization: `Bearer LK9nJotDn5vcO4wzZrldrSHoZZkiavgwHMrTT2IyFDu8MjFwTOYt7c6OrnobMymgCwtRfMkVRAdk6AFqeN0A_RktPP41Ok66An2Wklgss2J1tb__vYaJ1Tv27LmvY3Yx`,
//       },
//     };

//     return fetch(yelpUrl, apiOptions)
//       .then((res) => res.json())
//       .then((json) =>
//       setRestaurantData(json.businesses)
//       );
//   };

//   useEffect(() => {
//     getRestaurantsFromYelp();
//   }, [city, activeTab]);

//   return (
//     <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
//     <View style={{ backgroundColor: "white", padding: 15 }}>
//       <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
//       <SearchBar cityHandler={setCity} />
//     </View>
//     <ScrollView showsVerticalScrollIndicator={true}>
//       <Categories />
//       <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
//     </ScrollView>
//     <BottomTabs />
//   </SafeAreaView>
//   );
// }
