import { View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { travelImg } from '../assets';
import { ButtonPart, ButtonText, ContentPart, ContentSubText, ContentText, ContentTextHeader, HeaderLogo, HeaderLogoText, HeaderPart,HeaderText, ImagePart, ImageStyle, InnerButton, backgroundObject1, backgroundObject2 } from '../styles/HomeScreen';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={HomeScreen}>
      <View style={HeaderPart}>
        <View style={HeaderLogo}>
          <Text style={HeaderLogoText}>Go</Text>
        </View>
        <Text style={HeaderText}>Travel</Text>
      </View>

      <View style={ContentPart}>
        <Text style={ContentTextHeader}>Enjoy the trip with</Text>
        <Text style={ContentSubText}>Good Moments</Text>
        <Text style={ContentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>

      <View style={backgroundObject1}></View>
      <View style={backgroundObject2}></View>

      <View style={ImagePart}>
        <Animatable.Image animation="fadeIn" easing='ease-in-out' source={travelImg} style={ImageStyle} />
        <View style={ButtonPart}>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" style={InnerButton}>
              <Text style={ButtonText}>Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
