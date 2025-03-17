import {View, Text, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';

const Onboarding1Screen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/img/6538958_145991.png')} // Укажите путь к изображению
      style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 16 }}
      resizeMode="cover" // Опционально: 'cover', 'contain', 'stretch', 'repeat', 'center'
    >      <Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:100, position:'absolute', top: 50, left: 20, transform: [{ rotate: '-35deg' }]}} />
      <Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:70, position:'absolute', top: '20%', left: '45%', transform: [{ rotate: '35deg' }]}}/>
      <Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:80, position:'absolute', top: '30%', left: 20, transform: [{ rotate: '-35deg' }]}}/>
      <Image resizeMode={'contain'} source={require('../assets/img/Crown2.png')} style={{width:75,  position:'absolute', top: 50, right: 80}}/>
      <Image resizeMode={'contain'} source={require('../assets/img/Crown2.png')} style={{width:75, position:'absolute', top: '30%', right: 50, transform: [{ rotate: '-25deg' }]}}/>

      <View style={{backgroundColor: '#FFB300', marginBottom: 50, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, textAlign: 'center'}}>
          Catch crowns and become a true king!
        </Text>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 16, paddingHorizontal: 30, textAlign: 'center', }}>
          Your mission is to collect as many crowns as possible while avoiding dangerous traps.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')} style={{backgroundColor: '#fff', width: '70%', alignItems: 'center', paddingVertical: 20,borderWidth: 6, borderColor: '#e5d273', borderRadius: 15, marginTop: 30}}>
          <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 20}}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}

export default Onboarding1Screen
