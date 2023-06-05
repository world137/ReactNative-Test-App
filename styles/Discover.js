import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const DiscoverScreen = {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
};
export const HeaderPart = {
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 0.05,
    marginTop: windowHeight * 0.06,
    alignItems: 'center',
    justifyContent:'space-between',
}

export const HeaderText = {
    color: '#0B646B',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
    marginLeft: windowWidth * 0.02
}

export const SubHeaderText = {
    color: '#527283',
    fontSize: windowWidth * 0.04,
    fontWeight : 300,
    marginLeft: windowWidth * 0.02
}

export const IconPart = {
    width : windowWidth * 0.06,
    height : windowWidth * 0.06,
    backgroundColor : '#A1A1A1', 
    borderRadius : windowWidth * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
}

export const UserImgStyle = {
    width : "100%",
    height : "100%",
}