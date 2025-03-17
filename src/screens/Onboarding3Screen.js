import {View, Text, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import RedSvg from '../assets/svg/redSvg';

const Onboarding3Screen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/img/6538958_145991.png')} // Укажите путь к изображению
      style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 16 }}
      resizeMode="cover" // Опционально: 'cover', 'contain', 'stretch', 'repeat', 'center'
    >       <View style={{ alignItems: 'center', position: 'absolute',top: 50, left: 50, transform: [{ rotate: '-35deg' }]}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{ width: 90 }}
        />
      </View>

      <View style={{ alignItems: 'center', position: 'absolute',top: 130, left: '60%', transform: [{ rotate: '35deg' }]}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{ width: 70 }}
        />
      </View>

      <View style={{ alignItems: 'center', marginBottom: 20, position: 'relative'}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Group.png')}
          style={{ width: '100%' }}
        />
      </View>

      <View style={{backgroundColor: '#FFB300',marginBottom: 50, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, textAlign: 'center'}}>
          Ready to play?
        </Text>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 16, paddingHorizontal: 30, textAlign: 'center', }}>
          Collect the most crowns, unlock new skins and become a true legend!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor: '#fff', width: '70%', alignItems: 'center', paddingVertical: 20,borderWidth: 6, borderColor: '#e5d273', borderRadius: 15, marginTop: 30}}>
          <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 20}}>
            START
          </Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}

export default Onboarding3Screen
