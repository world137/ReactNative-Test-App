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
    justifyContent: 'space-between',
}

export const HeaderText = {
    color: '#0B646B',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
    marginLeft: windowWidth * 0.02
}

export const SubHeaderText = {
    color: '#527283',
    fontSize: windowWidth * 0.06,
    fontWeight: 300,
    marginLeft: windowWidth * 0.02
}

export const IconPart = {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: '#A1A1A1',
    borderRadius: windowWidth * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    shadow: '#fff6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
}

export const UserImgStyle = {
    width: "100%",
    height: "100%",
}

export const Line = {
    backgroundColor : "#aaaa",
    flexDirection : "row",
    alignItems : "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal : windowWidth * 0.1,
    paddingVertical: windowWidth * 0.01,
    marginHorizontal: windowWidth * 0.04,
    marginTop: windowWidth * 0.05,
    borderRadius: windowWidth * 0.01,
}