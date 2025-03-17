import React, { useEffect, useRef } from 'react';
import { View, Animated, Image, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const crownPosition = useRef(new Animated.Value(-200)).current; // Начальная позиция короны (выше экрана)
  const pillowPosition = useRef(new Animated.Value(0)).current; // Начальная позиция подушки (ниже экрана)

  useEffect(() => {
    Animated.parallel([
      Animated.timing(crownPosition, {
        toValue: 250, // Финальная позиция короны (центр)
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(pillowPosition, {
        toValue: -500, // Финальная позиция подушки (центр)
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace('Onboarding1');
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/img/6538958_145991.png')} // Фон
      style={styles.container}
      resizeMode="cover"
    >
      <Animated.Image
        source={require('../assets/img/Crown1.png')} // Корона
        style={[styles.crown, { transform: [{ translateY: crownPosition }] }]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/img/Frame.png')} // Подушка (замени путь)
        style={[styles.pillow, { transform: [{ translateY: pillowPosition }] }]}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crown: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
  },
  pillow: {
    width: 120,
    height: 60,
    position: 'absolute',
    bottom: 0,
  },
});

export default SplashScreen;
