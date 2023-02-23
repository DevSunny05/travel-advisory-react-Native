import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 mt-10 relative ">
      {/* first section */}
      <View className="flex-row px-6 mt-5 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px] ">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className='text-[#3C6072] text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iste.
        </Text>
      </View>

      {/* circle section */}
      <View className='absolute w-[400px] h-[400px] rounded-full bg-[#00BCC9] bottom-20 -right-48  '></View>
      <View className='absolute w-[400px] h-[400px] rounded-full bg-[#E99265] -bottom-28 -left-36 '></View>
      {/* image container */}
      <View className='relative flex-1 items-center justify-center'>
        <Animatable.Image 
        animation={"fadeIn"}
        easing={'ease-in-out'}
        duration={200}
        source={HeroImage}
         className='w-full h-full object-cover'/>

        <View className='absolute bottom-28 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center'>
        <TouchableOpacity>
        <Animatable.View animation={"pulse"} easing={"ease-in-out"} iterationCount={'infinite'} className='w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]'>
            <Text className='text-gray-50 text-[36px] font-semibold'>Go</Text>
        </Animatable.View>
        </TouchableOpacity>
      </View>
      </View>

      
    </SafeAreaView>
  );
};

export default HomeScreen;
