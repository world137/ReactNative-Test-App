import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeScreen = {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
};
export const HeaderPart = {
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 0.05,
    marginTop: windowHeight * 0.06,
    alignItems: 'center',
}
export const HeaderLogo = {
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    backgroundColor: 'black',
    borderRadius: windowWidth * 0.14 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
};
export const HeaderLogoText = {
    color: '#00BCC9',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold'
}

export const HeaderText = {
    color: '#2A2B4B',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
    marginLeft: windowWidth * 0.02
}
export const ContentPart = {
    paddingHorizontal: windowWidth * 0.05, marginTop: windowWidth * 0.06, marginBottom: windowWidth * 0.02
}
export const ContentTextHeader = {
    color: '#3C6072',
    fontSize: windowWidth * 0.09
}
export const ContentSubText = {
    color: '#00BCC9',
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold'
}
export const ContentText = {
    color: '#3C6072',
    fontSize: windowWidth * 0.04
}

export const backgroundObject1 = {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    backgroundColor: '#00BCC9',
    borderRadius: windowWidth * 0.35,
    position: 'absolute',
    bottom: -windowWidth * 0.7,
    right: -windowWidth * 0.01
}

export const backgroundObject2 = {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    backgroundColor: '#E99265',
    borderRadius: windowWidth * 0.35,
    position: 'absolute',
    bottom: -windowWidth,
    right: windowWidth * 0.5

}

export const ImagePart = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
let ImageStyle;
if (windowWidth >= 800) {
    ImageStyle = {
        width: windowWidth * 0.8,
        height: windowWidth * 0.8,
        aspectRatio: 1,
        marginTop: windowWidth * 0.7
    }
}
else {
    ImageStyle = {
        width: windowWidth * 0.8,
        height: windowWidth * 0.8,
        aspectRatio: 1,
        marginTop: windowWidth
    }
}
export { ImageStyle }

let ButtonPart;

if (windowWidth >= 800) {
    ButtonPart = {
        position: 'absolute',
        bottom: -windowWidth * 0.6,
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        borderRadius: windowWidth * 0.24 * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: windowWidth * 0.01,
        borderRightWidth: windowWidth * 0.01,
        borderTopWidth: windowWidth * 0.02,
        borderColor: '#00BCC9',
    };
} else {
    ButtonPart = {
        position: 'absolute',
        bottom: -windowWidth * 1.2,
        width: windowWidth * 0.24,
        height: windowWidth * 0.24,
        borderRadius: windowWidth * 0.24 * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: windowWidth * 0.01,
        borderRightWidth: windowWidth * 0.01,
        borderTopWidth: windowWidth * 0.02,
        borderColor: '#00BCC9',
    };
}

export { ButtonPart };
let InnerButton;
if (windowWidth >= 800) {
    InnerButton = {
        width: windowWidth * 0.16,
        height: windowWidth * 0.16,
        borderRadius: windowWidth * 0.2 * 0.5,
        backgroundColor: '#00BCC9',
        justifyContent: 'center',
        alignItems: 'center'
    }
} else {
    InnerButton = {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        borderRadius: windowWidth * 0.2 * 0.5,
        backgroundColor: '#00BCC9',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
export { InnerButton }

export const ButtonText = {
    fontWeight: 'bold',
    fontSize: windowWidth * 0.11,
    color: 'white',
    textAlign: 'center'
}