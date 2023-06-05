import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { DiscoverScreen, HeaderPart, HeaderText, IconPart, SubHeaderText, UserImgStyle } from '../styles/Discover';
import { UserImg } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const Discover = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);
    return (
        <SafeAreaView style={DiscoverScreen}>
            <View style={HeaderPart}>
                <View>
                    <Text style={HeaderText}>Discover</Text>
                    <Text style={SubHeaderText}>The beauty today</Text>
                </View>

                <View style={IconPart}>
                    <Image source={UserImg} style={UserImgStyle} />
                </View>

                <View></View>
            </View>
        </SafeAreaView>

    )
}

export default Discover