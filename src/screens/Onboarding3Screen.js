import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import RedSvg from '../assets/svg/redSvg';

const Onboarding3Screen = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'flex-end', paddingHorizontal: 16}}>
      <View style={{ alignItems: 'center', position: 'absolute',top: 50, left: 50, transform: [{ rotate: '-35deg' }]}}>
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

      <View style={{backgroundColor: '#d7c08a',marginBottom: 50, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, textAlign: 'center'}}>
          Ready to play?
        </Text>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 16, paddingHorizontal: 30, textAlign: 'center', }}>
          Collect the most crowns, unlock new skins and become a true legend!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor: '#000', width: '70%', alignItems: 'center', paddingVertical: 20,borderWidth: 6, borderColor: '#e5d273', borderRadius: 15, marginTop: 30}}>
          <Text style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
            START
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Onboarding3Screen
