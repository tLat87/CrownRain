import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Settings from '../assets/svg/Settings';
import FileSvg from '../assets/svg/FileSvg';
import {useSelector} from 'react-redux';
import {selectSelectedItem} from '../redux/slices/selectedItemSlice';

const HomeScreen = ({ navigation }) => {
  const selectedItemId = useSelector(selectSelectedItem);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
      <ImageBackground
        source={
          selectedItemId === 2
            ? require('../assets/img/back1.png')
            : selectedItemId === 3
              ? require('../assets/img/back2.png')
              : null
        }
        style={{backgroundColor: '#000', paddingVertical: 100,flex: 1, justifyContent: 'center', paddingHorizontal: 45}}
      >
        {selectedItemId === 1 && (
          <>
            <View style={{ position: 'absolute', top: 0, left:20 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 50,
                  transform: [{ rotate: '35deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', top: '30%', left:20 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 80,
                  transform: [{ rotate: '-35deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', top: 50, right:'50%' }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 55,
                  transform: [{ rotate: '15deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', top: 50, right: 50 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 80,
                  transform: [{ rotate: '-35deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', top: 200, left: 180 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 100,
                  transform: [{ rotate: '-35deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', bottom: '10%', left: 20 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 80,
                  transform: [{ rotate: '35deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', bottom: 150, right: 80 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 75,
                  transform: [{ rotate: '-25deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{ position: 'absolute', bottom: '0%', right: 50 }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 75,
                  transform: [{ rotate: '-25deg' }],
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: 10,
                }}
              />
            </View>
          </>
        )}


      <Image
        resizeMode="contain"
        source={require('../assets/img/Crown1.png')}
        style={{
          // width: '40%',
          height: '20%',
          marginTop: 50
        }}
      />
      <Text style={{ fontFamily: 'Nunito-Bold',
        color: '#FFB300',
        fontSize: 42,
        marginBottom: 24,
      }}>CROWN RAIN</Text>


      <TouchableOpacity onPress={()=>{navigation.navigate('Levels')}} style={{backgroundColor: '#FFB300',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
          <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 24}}>
            Start play
          </Text>
      </TouchableOpacity>
      {/*<TouchableOpacity onPress={()=>{navigation.navigate('Levels')}} style={{backgroundColor: '#FFB300',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>*/}
      {/*  <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 24}}>*/}
      {/*    Levels*/}
      {/*  </Text>*/}
      {/*</TouchableOpacity>*/}
      <TouchableOpacity onPress={()=>{navigation.navigate('Shop')}} style={{backgroundColor: '#FFB300',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 24}}>
          Shop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Inventory')}} style={{backgroundColor: '#FFB300',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 24}}>
          Inventory
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('History')}} style={{backgroundColor: '#FFB300',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 24}}>
          Crowns in history
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}} style={{backgroundColor: '#FFB300', width: '47%', marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
          <Settings/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Ruler')}} style={{backgroundColor: '#FFB300',width: '47%', marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
          <FileSvg/>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </ScrollView>
  )
}

export default HomeScreen
