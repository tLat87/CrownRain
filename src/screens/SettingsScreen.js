import {View, Text, TouchableOpacity, Image, Alert, ImageBackground} from 'react-native';
import BackSvg from '../assets/svg/backSvg';
import {useDispatch, useSelector} from 'react-redux';
import {setVibration, toggleVibration} from '../redux/slices/settingsSlice';
import {resetProgressBalance} from '../redux/slices/balanceSlice';
import {resetProgressLevels} from '../redux/slices/levelSlice';
import {resetProgressPurchases} from '../redux/slices/purchasesSlice';
import {resetSelectedItem, selectSelectedItem} from '../redux/slices/selectedItemSlice';

const SettingsScreen = ({ navigation }) => {
  const selectedItemId = useSelector(selectSelectedItem);
  const dispatch = useDispatch();
  const isVibrationOn = useSelector((state) => state.settings.isVibrationOn);

  const handleResetProgress = () => {
    // Сбрасываем все данные
    dispatch(resetProgressPurchases());
    dispatch(resetProgressLevels());
    dispatch(resetSelectedItem())

    // Показать алерт с сообщением
    Alert.alert(
      "Progress Reset", // Заголовок алерта
      "All your progress has been reset.", // Сообщение алерта
      [
        {
          text: "OK", // Кнопка для закрытия алерта
          onPress: () => console.log("Progress reset.") // Логика после нажатия на OK
        }
      ]
    );
  };
  return (
    <ImageBackground
      source={
        selectedItemId === 2
          ? require('../assets/img/back1.png')
          : selectedItemId === 3
            ? require('../assets/img/back2.png')
            : null
      }
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: '#FFB300',
          borderWidth: 6,
          borderColor: '#e5d273',
          padding: 10,
          borderRadius: 15,
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1,
          left: 24,
          top: 80,
        }}>
        <BackSvg />
      </TouchableOpacity>
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:100, position:'absolute', top: 50, left: 20, transform: [{ rotate: '35deg' }]}} />*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:70, position:'absolute', top: '20%', left: '45%', transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:80, position:'absolute', top: '30%', left: 20, transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:75,  position:'absolute', top: 50, right: 30}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:75, position:'absolute', top: '30%', right: 50, transform: [{ rotate: '-25deg' }]}}/>*/}

      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:100, position:'absolute', top: 0, left: 180, transform: [{ rotate: '-35deg' }]}} />*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:70, position:'absolute', bottom: '40%', left: '45%', transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:80, position:'absolute', bottom: '10%', left: 20, transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:75,  position:'absolute', bottom: 150, right: 80}}/>*/}
      {selectedItemId === 1 && (
        <>
          <View style={{position: 'absolute', top: 0, left: 20}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 50,
                transform: [{rotate: '35deg'}],
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

          <View style={{position: 'absolute', top: '30%', left: 20}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 80,
                transform: [{rotate: '-35deg'}],
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

          <View style={{position: 'absolute', top: 50, right: '50%'}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 55,
                transform: [{rotate: '15deg'}],
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

          <View style={{position: 'absolute', top: 50, right: 50}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 80,
                transform: [{rotate: '-35deg'}],
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

          <View style={{position: 'absolute', top: 200, left: 180}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 100,
                transform: [{rotate: '-35deg'}],
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

          <View style={{position: 'absolute', bottom: '10%', left: 20}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 80,
                transform: [{rotate: '35deg'}],
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

          <View style={{position: 'absolute', bottom: 150, right: 80}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 75,
                transform: [{rotate: '-25deg'}],
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

          <View style={{position: 'absolute', bottom: '0%', right: 50}}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 75,
                transform: [{rotate: '-25deg'}],
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


      <Text style={styles.title}>Settings</Text>
      <View
        style={{
          backgroundColor: '#FFB300',
          marginBottom: 16,
          borderWidth: 6,
          borderColor: '#e5d273',
          padding: 24,
          width: '90%',
          borderRadius: 15,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 32}}>
          Vibration
        </Text>

        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <TouchableOpacity
              onPress={() => dispatch(setVibration(false))}
              style={{
                backgroundColor: '#fff',
                width: 20,
                height: 20,
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {!isVibrationOn &&
                <View
                  style={{width: 10, height: 10, backgroundColor: '#E5D273'}}
                />
              }
            </TouchableOpacity>
            <Text
              style={{color: '#000', fontSize: 16, fontFamily: 'Nunito-Bold'}}>
              OFF
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 5}}>
            <TouchableOpacity
              onPress={() => dispatch(setVibration(true))}
              style={{
                backgroundColor: '#fff',
                width: 20,
                height: 20,
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {isVibrationOn &&
                <View
                  style={{width: 10, height: 10, backgroundColor: '#E5D273'}}
                />
              }
            </TouchableOpacity>
            <Text
              style={{color: '#000', fontSize: 16, fontFamily: 'Nunito-Bold'}}>
              ON
            </Text>
          </View>
        </View>
      </View>

      <View style={{backgroundColor: '#FFB300', marginBottom: 50, borderWidth: 6, width: '90%',borderColor: '#e5d273', padding: 24, borderRadius: 15, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, textAlign: 'center'}}>
          Start the game over again
        </Text>
        <TouchableOpacity onPress={() => {
          handleResetProgress()
        }} style={{backgroundColor: '#000', width: '70%', alignItems: 'center', paddingVertical: 20,borderWidth: 6, borderColor: '#e5d273', borderRadius: 15, marginTop: 30}}>
          <Text style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
            Reset progress
          </Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};

const styles = {
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    color: '#FFB300',
    fontSize: 42,
  },
  levelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#FFB300',
    borderWidth: 6,
    borderColor: '#e5d273',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '30%',
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    color: '#000',
    fontSize: 24,
  },
  largeButton: {
    width: '40%',
    paddingVertical: 30,
  },
  largeText: {
    fontSize: 34,
  },
};

export default SettingsScreen;
