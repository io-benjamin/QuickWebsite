import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationButtons } from './pages'; // Importing NavigationButtons component

const BirthdayPage = ({ navigation }) => {
  const imageSources = [
    require('./assets/birthday-photos/image1.jpg'), 
    require('./assets/birthday-photos/image2.jpg'),
    require('./assets/birthday-photos/image3.jpg'),
    require('./assets/birthday-photos/image4.jpg'),
    require('./assets/birthday-photos/image5.jpg'),
    require('./assets/birthday-photos/image6.jpg'),
    require('./assets/birthday-photos/image7.jpg'),
    require('./assets/birthday-photos/image8.jpg'),
  ];

  return (
    <>
      <LinearGradient
        colors={['#B46FA4', '#93ECD8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Main container */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={require('./assets/birthday.png')} style={styles.garlandImage} />
          <Text style={styles.heading}>Happy Birthday Kimmy❤️</Text>

          {/* Confetti */}
          <View style={styles.confettiContainer}>
            <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} explosionSpeed={300} fadeOut />
          </View>

          {/* Images */}
          <View style={styles.imageContainer}>
            {imageSources.map((image, index) => (
              <Image
                key={index.toString()}
                source={image}
                style={styles.image}
                resizeMode="cover"
              />
            ))}
          </View>

          {/* Text containers */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              04/13/2024, Well, hello baby❤️. Another blessed year has passed and I'm so grateful to have you in my life and celebrate this special day with you. You are a blessing that God has blessed me with and I won't ever take that for granted.
              I have prepared a day for us and your friends in Washington DC, I know there are some places you have wanted to visit and I have made sure we will visit them. 
              I apologize for the suspense but I wanted this day to be a surprise for you. I am so proud of you and your accomplishments, although you say you have done nothing compared to me, you don't fail to amaze me every day. 
              I know there is nothing stopping you from accomplishing your dreams and goals. Que Dios te siga bendiciendo y tus metas se acomplejan. I hope you enjoy this day and all that we do, I love you Kimmy❤️
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              ps just wait till your graduation hehe❤️
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Navigation buttons */}
      <NavigationButtons navigation={navigation} currentPage="Birthday" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'cursive',
    color: '#333',
  },
  garlandImage: {
    width: 300,
    height: 150, // Adjust the height as needed
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: '#333',
  },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default BirthdayPage;
