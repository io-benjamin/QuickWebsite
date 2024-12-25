// FallingOrnaments.js
import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const ORNAMENT_COUNT = 12;
const ornaments = [
  require('./assets/Yearly-Christmas-photos/ornament1.png'),
  require('./assets/Yearly-Christmas-photos/ornament2.png'),
];

export default function FallingOrnaments() {
  const fallAnimations = useRef(
    [...Array(ORNAMENT_COUNT)].map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    fallAnimations.forEach(anim => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: height,
            duration: 5000 + Math.random() * 3000,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      {fallAnimations.map((anim, i) => {
        const randomLeft = Math.random() * (width - 50);
        return (
          <Animated.Image
            key={i}
            source={ornaments[i % ornaments.length]}
            style={[
              styles.ornament,
              { transform: [{ translateY: anim }], left: randomLeft },
            ]}
            resizeMode="contain"
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ornament: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
});