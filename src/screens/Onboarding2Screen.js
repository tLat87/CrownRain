import {View, Text, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import RedSvg from '../assets/svg/redSvg';

const Onboarding2Screen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/img/6538958_145991.png')} // Укажите путь к изображению
      style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 16 }}
      resizeMode="cover" // Опционально: 'cover', 'contain', 'stretch', 'repeat', 'center'
    >       <View style={{ alignItems: 'center', position: 'absolute',top: 100, left: 50, transform: [{ rotate: '35deg' }]}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown3.png')}
          style={{ width: 90 }}
        />
        <View style={{ position: 'absolute', width: 90, height: 90, justifyContent: 'center', alignItems: 'center', top: 40}}>
          <View style={{
            position: 'absolute',
            width: '100%',
            height: 6,
            borderRadius: 8,
            backgroundColor: 'red',
            transform: [{ rotate: '45deg' }]
          }} />

          <View style={{
            position: 'absolute',
            width: '100%',
            height: 6,
            borderRadius: 8,
            backgroundColor: 'red',
            transform: [{ rotate: '-45deg' }]
          }} />
        </View>

      </View>

      <View style={{ alignItems: 'center', position: 'absolute',top: 30, left: '60%', transform: [{ rotate: '-35deg' }]}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown3.png')}
          style={{ width: 70 }}
        />
        <View style={{ position: 'absolute', width: 90, height: 90, justifyContent: 'center', alignItems: 'center', top: 40}}>
          <View style={{
            position: 'absolute',
            width: '100%',
            height: 6,
            borderRadius: 8,
            backgroundColor: 'red',
            transform: [{ rotate: '45deg' }]
          }} />

          <View style={{
            position: 'absolute',
            width: '100%',
            height: 6,
            borderRadius: 8,
            backgroundColor: 'red',
            transform: [{ rotate: '-45deg' }]
          }} />
        </View>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 50, position: 'relative'}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown3.png')}
          style={{ width: '80%' }}
        />
        <View style={{ position: 'absolute', width: '80%', top: 100}}>
          <View style={{
            position: 'absolute',
            width: '100%',
            height: 6,
            borderRadius: 8,
            backgroundColor: 'red',
            transform: [{ rotate: '45deg' }]
          }} />

          <View style={{
            position: 'absolute',
            width: '100%',
            height: 6,
            borderRadius: 8,
            backgroundColor: 'red',
            transform: [{ rotate: '-45deg' }]
          }} />
        </View>
      </View>

      <View style={{backgroundColor: '#FFB300',marginBottom: 50, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, textAlign: 'center'}}>
          Beware of traps!
        </Text>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 16, paddingHorizontal: 30, textAlign: 'center', }}>
          Avoid damaged crowns!
          They can take away points.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding3')} style={{backgroundColor: '#fff', width: '70%', alignItems: 'center', paddingVertical: 20,borderWidth: 6, borderColor: '#e5d273', borderRadius: 15, marginTop: 30}}>
          <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 20}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}

export default Onboarding2Screen
