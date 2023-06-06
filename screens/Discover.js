import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { DiscoverScreen, HeaderPart, HeaderText, IconPart, Line, SubHeaderText, UserImgStyle } from '../styles/Discover';
import { UserImg } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const Discover = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={DiscoverScreen}>
            {/* <SafeAreaView className="flex-1 bg-white relative"> */}
            <View style={HeaderPart}>
                {/* <View className="flex-row items-center justify-between px-6"> */}
                <View>
                    <Text style={HeaderText}>Discover</Text>
                    <Text style={SubHeaderText}>The beauty today</Text>
                </View>

                <View style={IconPart}>
                    {/* <View className = "w-7 h-7 bg-gray-400 rounded-md items-center justify-center shadow-lg"> */}
                    <Image source={UserImg} style={UserImgStyle} />
                </View>

            </View>
            <View className='flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-2'>
                {/* <View style={Line}> */}
                {/* <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyCYt5mZOleR3Uw549i51SB9SyGEgVCyHag',
                        language: 'en',
                    }}
                /> */}
                
                    <GooglePlacesAutocomplete
                        placeholder='Search destination'
                        minLength={2}
                        onFail={error => console.error(error)}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: "AIzaSyCYt5mZOleR3Uw549i51SB9SyGEgVCyHag",
                            language: 'en',
                        }}


                    />
               
            </View>
        </SafeAreaView>

    )
}

export default Discover