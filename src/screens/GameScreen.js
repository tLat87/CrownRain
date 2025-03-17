import React, { useEffect, useRef, useState } from 'react';
import {View, Text, Image, Animated, Dimensions, TouchableOpacity, Vibration, ImageBackground} from 'react-native';
import StopSvg from '../assets/svg/StopSvg';
import {completeLevel} from '../redux/slices/levelSlice';
import {useDispatch, useSelector} from 'react-redux'
import Share from 'react-native-share';
import {addBalance} from '../redux/slices/purchasesSlice';

const { width, height } = Dimensions.get('window');
const MAX_IMAGES = 10;
const IMAGE_SOURCES = [
  require('../assets/img/Crown1.png'),
  // require('../assets/img/Crown2.png'),
  require('../assets/img/Crown3.png'),
];

const getRandomX = () => Math.random() * (width - 100);
const getRandomSize = () => 50 + Math.random() * 50;
const getRandomDuration = () => 4000 + Math.random() * 3000;

const FallingImage = ({ source, onEnd, onPress, isPaused, levelPassed}) => {
  const translateY = useRef(new Animated.Value(-100)).current;
  const xPosition = useRef(getRandomX()).current;
  const size = useRef(getRandomSize()).current;
  const animationRef = useRef(null);

  const startAnimation = () => {
    translateY.setValue(-100);
    animationRef.current = Animated.timing(translateY, {
      toValue: height + 100,
      duration: getRandomDuration(),
      useNativeDriver: true,
    });

    if (!isPaused || !levelPassed) {
      animationRef.current.start(() => onEnd());
    }
  };

  useEffect(() => {
    if (isPaused) {
      animationRef.current?.stop();
    } else {
      startAnimation();
    }
  }, [isPaused]);



  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPress(source)}
      style={{ position: 'absolute', width: size, height: size, left: xPosition }}
    >
      <Animated.Image
        source={source}
        style={{
          width: size,
          height: size,
          transform: [{ translateY }],
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const GameScreen = ({ navigation, route }) => {
  const { level } = route.params;
  const dispatch = useDispatch();
  const completedLevels = useSelector((state) => state.levels.completedLevels);
  const isVibrationOn = useSelector((state) => state.settings.isVibrationOn);

  const [images, setImages] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [levelPassed, setLevelPassed] = useState(false);

  const replaceImage = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = {
        id: Math.random(),
        source: IMAGE_SOURCES[Math.floor(Math.random() * IMAGE_SOURCES.length)],
      };
      return newImages;
    });
  };

  const handleImagePress = (source) => {
    if (source === IMAGE_SOURCES[0]) {
      setScore((prevScore) => {
        isVibrationOn && Vibration.vibrate();
        const newScore = prevScore + 1;

        if (newScore >= level * 10 && !levelPassed) {
          setLevelPassed(true);

          // Диспатчим уровень в `completedLevels`, если он еще не добавлен
          if (!completedLevels.includes(level)) {
            dispatch(completeLevel(level));
          }

          dispatch(addBalance(10 * level));
        }

        return newScore;
      });
    }
  };

  const handleShare = async () => {
    try {
      const shareOptions = {
        title: 'Check out my game progress!',
        message: `I passed level ${level} with a score of ${score}! Can you beat it?`, // Сообщение, которое будет отправлено
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  useEffect(() => {
    const initialImages = Array.from({ length: MAX_IMAGES }, () => ({
      id: Math.random(),
      source: IMAGE_SOURCES[Math.floor(Math.random() * IMAGE_SOURCES.length)],
    }));
    setImages(initialImages);
  }, []);

  return (
<ImageBackground
  source={isPaused
    ? require('../assets/img/6538959_14620.png')
    : require('../assets/img/6538959_1460.png')} // Обычный фон
  style={{ flex: 1, backgroundColor: '#000' }}
  resizeMode="cover"
>
    {images.map((item, index) => (
        <FallingImage
          key={item.id}
          source={item.source}
          onEnd={() => replaceImage(index)}
          onPress={handleImagePress}
          isPaused={isPaused}
          levelPassed={levelPassed}
        />
      ))}
      {!isPaused && (
        <View
          style={{
            position: 'absolute',
            top: 80,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsPaused(true);
            }}
            style={{
              backgroundColor: '#d7c08a',
              borderWidth: 6,
              justifyContent: 'center',
              borderColor: '#e5d273',
              padding: 10,
              borderRadius: 15,
              alignItems: 'center',
              zIndex: 1,
            }}>
            <StopSvg />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#d7c08a',
              borderWidth: 6,
              borderColor: '#e5d273',
              padding: 10,
              borderRadius: 15,
              alignItems: 'center',
              zIndex: 1,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'col'}}>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  color: '#000',
                  fontSize: 14,
                  marginRight: 4,
                }}>
                Level {level}
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  color: '#000',
                  fontSize: 14,
                  marginRight: 8,
                }}>
                Catch {level * 10} crowns
              </Text>
            </View>

            <View
              onPress={() => navigation.navigate('Onboarding2')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignItems: 'center',
                padding: 12,
                borderWidth: 6,
                borderColor: '#e5d273',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  color: '#000',
                  fontSize: 12,
                }}>
                {score}
              </Text>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  marginLeft: 16,
                }}
              />
            </View>
          </View>
        </View>
      )}

      {isPaused && (
        <View
          style={{
            backgroundColor: '#d7c08a',
            borderWidth: 6,
            justifyContent: 'center',
            borderColor: '#e5d273',
            padding: 10,
            borderRadius: 15,
            alignItems: 'center',
            zIndex: 1,
            marginTop: '50%',
            marginHorizontal: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <StopSvg />
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: '#000',
                fontSize: 36,
                marginRight: 4,
              }}>
              PAUSE
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#DBC48D',
              borderWidth: 6,
              justifyContent: 'center',
              borderColor: '#000',
              width: '90%',
              marginTop: 40,
              padding: 10,
              borderRadius: 15,
              alignItems: 'center',
              zIndex: 1,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: '#000',
                fontSize: 16,
                marginRight: 4,
              }}>
              Level {level}
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: '#000',
                fontSize: 16,
                marginRight: 4,
              }}>
              Catch {level * 10} crowns
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setIsPaused(false);
            }}
            style={{
              backgroundColor: '#000',
              width: '70%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 24,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
              CONTINUE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#000',
              width: '70%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 24,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
              back to menu
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {levelPassed && (
        <View
          style={{
            backgroundColor: '#d7c08a',
            borderWidth: 6,
            justifyContent: 'center',
            borderColor: '#e5d273',
            padding: 10,
            borderRadius: 15,
            alignItems: 'center',
            zIndex: 1,
            marginTop: '50%',
            marginHorizontal: 24,
          }}>
          <Image
            resizeMode="contain"
            source={require('../assets/img/Crown1.png')}
            style={{
              width: 75,
              position: 'absolute',
              // alignSelf: 'center',
              top: -130,
              left: '28%',
              transform: [{rotate: '-25deg'}],
            }}
          />
          <Image
            resizeMode="contain"
            source={require('../assets/img/Crown1.png')}
            style={{
              width: 75,
              position: 'absolute',
              // alignSelf: 'center',
              top: -130,
              left: '41%',
              transform: [{rotate: '-25deg'}],
            }}
          />
          <Image
            resizeMode="contain"
            source={require('../assets/img/Crown1.png')}
            style={{
              width: 75,
              position: 'absolute',
              // alignSelf: 'center',
              top: -130,
              left: '55%',
              transform: [{rotate: '-25deg'}],
            }}
          />

          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 36,
              marginRight: 4,
              marginTop: 10,
            }}>
            Passed!
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 22,
              marginRight: 4,
            }}>
            Level {level} completed!
          </Text>

          <View
            style={{
              backgroundColor: '#DBC48D',
              borderWidth: 6,
              justifyContent: 'center',
              borderColor: '#000',
              width: '90%',
              marginTop: 40,
              padding: 10,
              borderRadius: 15,
              alignItems: 'center',
              zIndex: 1,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: '#000',
                fontSize: 20,
                textAlign: 'center',
                marginRight: 4,
              }}>
              You have collected {10 * level} crowns.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignItems: 'center',
                padding: 12,
                borderWidth: 6,
                borderColor: '#000',
                borderRadius: 10,
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown1.png')}
                style={{
                  width: 36,
                  height: 27,
                  borderRadius: 15,
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              handleShare();
            }}
            style={{
              backgroundColor: '#000',
              width: '70%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 24,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
              Share
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#000',
              width: '70%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 14,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
              CONTINUE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#000',
              width: '70%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 14,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 20}}>
              back to menu
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={{position: 'absolute', bottom: 50, alignSelf: 'center'}}>
        {score > 0 &&
          <Image
            resizeMode="contain"
            source={require('../assets/img/Crown1.png')}
            style={{
              width: 70,
              position: 'absolute',
              bottom: 8,
              alignSelf: 'center',
              height: 50,
              // borderRadius: 15,
              // marginLeft: 16,
              zIndex: 2,
            }}
          />
        }
        {score > 1 &&
          <Image
            resizeMode="contain"
            source={require('../assets/img/Crown1.png')}
            style={{
              width: 50,
              position: 'absolute',
              bottom: 5,
              // alignSelf: 'center',
              right: 10,
              height: 50,
              // borderRadius: 15,
              // marginLeft: 16,
              zIndex: 1,
            }}
          />
        }
        {score > 2 &&
          <Image
            resizeMode="contain"
            source={require('../assets/img/Crown1.png')}
            style={{
              width: 50,
              position: 'absolute',
              bottom: 5,
              // alignSelf: 'center',
              left: 10,
              height: 50,
              // borderRadius: 15,
              // marginLeft: 16,
              zIndex: 1,
            }}
          />
        }
        <Image
          resizeMode="contain"
          source={require('../assets/img/Frame.png')}
          style={{
            width: 156,
            // position: 'absolute',
            // bottom: 50,
            // alignSelf: 'center',
            height: 34,
            // borderRadius: 15,
            // marginLeft: 16,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GameScreen;
