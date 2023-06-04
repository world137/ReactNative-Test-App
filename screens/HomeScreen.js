import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { travelImg } from '../assets';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(
        () => {
            navigation.setOptions({
                headerShown: false,
            });
        }, []
    )
    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="flex-row px-5 mt-8 items-center space-x-2">
                <View className="w-14 h-14 bg-black rounded-full justify-center items-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">
                        Go
                    </Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">
                    Travel
                </Text>
            </View>

            <View className="px-5 mt-6 space-y-3">
                <Text className="text-[#3C6072] text-[30px]">
                    Enjoy the trip with
                </Text>
                <Text className="text-[#00BCC9] text-[30px] font-bold">
                    Good Moments
                </Text>
                <Text className="text-[#3C6072] text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
            </View>

            <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-20 -left-36"></View>

            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image 
                animation="fadeIn"
                easing='ease-in-out'
                source={travelImg} className="w-full h-full object-cover mt-10" />
                <View className="absolute bottom-20 w-24 h-24 rounded-full justify-center items-center border-l-2 border-r-2 border-t-4 border-[#00BCC9]">
                    <TouchableOpacity>
                        <Animatable.View 
                        animate = "pulse"
                        easing = "ease-in-out"
                        iterationCount = "infinite"
                        className="w-20 h-20 rounded-full bg-[#00BCC9] items-center justify-center">
                            <Text className="font-bold text-[35px] text-white items-center">Go</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen