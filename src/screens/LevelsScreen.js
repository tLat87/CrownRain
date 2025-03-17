import {View, Text, TouchableOpacity, Image, ImageBackground, Animated} from 'react-native';
import BackSvg from '../assets/svg/backSvg';
import {selectCompletedLevels} from '../redux/slices/levelSlice';
import {useSelector} from 'react-redux';
import LockSvg from '../assets/svg/lockSvg';
import {selectSelectedItem} from '../redux/slices/selectedItemSlice';
import React from 'react';

const LevelsScreen = ({ navigation }) => {
  const completedLevels = useSelector(selectCompletedLevels);
  const levels = Array.from({ length: 10 }, (_, i) => i + 1);
  const selectedItemId = useSelector(selectSelectedItem);

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
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{backgroundColor: '#FFB300', borderWidth: 6, borderColor: '#e5d273', padding: 10, borderRadius: 15, alignItems: 'center', position: 'absolute', zIndex: 1, left: 24, top: 80}}>
        <BackSvg/>
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

      <Text style={styles.title}>LEVELS</Text>
      {/*<View style={styles.levelsContainer}>*/}
      {/*  {levels.map((level) => (*/}
      {/*    <TouchableOpacity*/}
      {/*      key={level}*/}
      {/*      onPress={() => navigation.navigate('GameScreen')}*/}
      {/*      style={[styles.button, level === 10 && styles.largeButton]}*/}
      {/*    >*/}
      {/*      <Text style={[styles.buttonText, level === 10 && styles.largeText]}>{level}</Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*  ))}*/}
      {/*</View>*/}
      <View style={styles.levelsContainer}>
        {levels.map((level) => {
          const isUnlocked = level === 1 || completedLevels.includes(level - 1);
          const isCompleted = completedLevels.includes(level);

          return (
            <TouchableOpacity
              key={level}
              onPress={() => isUnlocked && navigation.navigate('GameScreen', { level })}
              style={[styles.button, level === 10 && styles.largeButton, !isUnlocked && styles.lockedButton]}
              disabled={!isUnlocked}
            >
              {isCompleted && <Image
                source={require('../assets/img/Crown1.png')}
                style={{width: 80,
                  height: 80,
                  position: 'absolute',
                  top: -50,}}
                resizeMode="contain"
              />}
              {isUnlocked ? (
                <Text style={[styles.buttonText, level === 10 && styles.largeText]}>{level}</Text>
              ) : (
                <LockSvg/>
              )}
            </TouchableOpacity>
          );
        })}
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
    fontSize: 32,
  },
  largeButton: {
    width: '40%',
    paddingVertical: 30,
  },
  largeText: {
    fontSize: 34,
  },
};

export default LevelsScreen;
