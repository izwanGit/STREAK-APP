import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [streak, setStreak] = useState(0); // Streak counter
  const [lastUpdated, setLastUpdated] = useState(null); // Track the last updated date

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5',
  };

  const textStyle = {
    color: isDarkMode ? '#FFFFFF' : '#000000',
  };

  const cardBackground = isDarkMode ? '#2C2C2C' : '#FFFFFF';

  // Function to increment the streak
  const incrementStreak = () => {
    const today = new Date().toDateString();
    if (lastUpdated !== today) {
      setStreak((prevStreak) => prevStreak + 1);
      setLastUpdated(today);
    }
  };

  // Developer function to manually increase the streak
  const incrementDayManually = () => {
    setStreak((prevStreak) => prevStreak + 1);
  };

  // Reset streak if the user misses a day
  useEffect(() => {
    const today = new Date().toDateString();
    if (lastUpdated && lastUpdated !== today) {
      setStreak(0);
    }
  }, [lastUpdated]);

  // Effects based on streak days
  const getEffectsForStreak = () => {
    switch (streak) {
      case 0:
        return {
          title: 'Day 0: Just Started',
          description: 'You’ve just begun your journey. Stay strong and focused!',
        };
      case 1:
        return {
          title: 'Day 1: The First Step',
          description: 'Today, the urges are manageable. Your mind is clear, and you feel a sense of accomplishment for starting.',
        };
      case 2:
        return {
          title: 'Day 2: The Urges Begin',
          description: 'You might feel stronger urges today as your brain starts to crave dopamine. Stay strong and remind yourself why you started.',
        };
      case 3:
        return {
          title: 'Day 3: Building Confidence',
          description: 'You’re starting to notice small improvements in your confidence and focus. Keep going!',
        };
      case 4:
        return {
          title: 'Day 4: Blue Balls',
          description: 'Sensation of pressure in the testicles.',
        };
      case 5:
        return {
          title: 'Day 5: Improved Mood',
          description: 'Feeling happier and more positive.',
        };
      case 6:
        return {
          title: 'Day 6: Wet Dreams',
          description: 'Experience involuntary ejaculation during sleep.',
        };
      case 7:
        return {
          title: 'Day 7: A Week of Progress',
          description: 'You’ve made it a week! Your energy levels are higher, and you feel more in control of your impulses.',
        };
      case 8:
        return {
          title: 'Day 8: Deep Voice',
          description: 'You may notice your voice becoming deeper.',
        };
      case 9:
        return {
          title: 'Day 9: Mental Clarity',
          description: 'Your mind feels sharper, and you’re more productive.',
        };
      case 10:
        return {
          title: 'Day 10: More Positive',
          description: 'More positive outlook on life.',
        };
      case 11:
        return {
          title: 'Day 11: Reduced Anxiety',
          description: 'You might experience a decrease in feelings of anxiety.',
        };
      case 12:
        return {
          title: 'Day 12: Self-Worth',
          description: 'You may notice improvement in your self-esteem.',
        };
      case 13:
        return {
          title: 'Day 13: Increased Energy',
          description: 'You might notice a surge in your energy levels.',
        };
      case 14:
        return {
          title: 'Day 14: Mental Clarity',
          description: 'Your mind feels sharper, and you’re more productive. You’re starting to see the benefits of your discipline.',
        };
      case 15:
        return {
          title: 'Day 15: A New You',
          description: 'Congratulations! You’ve reached halfway through the month. Your confidence, focus, and energy are at their peak. Keep building on this foundation.',
        };
            case 14:
        return {
          title: 'Day 14: Mental Clarity',
          description: 'Your mind feels sharper, and you’re more productive. You’re starting to see the benefits of your discipline.',
        };
      case 15:
        return {
          title: 'Day 15: A New You',
          description: 'Congratulations! You’ve reached halfway through the month. Your confidence, focus, and energy are at their peak. Keep building on this foundation.',
        };
      default:
        return {
          title: `Day ${streak}: Keep Going!`,
          description: 'Every day you stay committed, you’re rewiring your brain for success. Stay focused and keep pushing forward.',
        };
    }
  };

  const effects = getEffectsForStreak();

  return (
    <View style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* Profile Section */}
        <View style={[styles.profileSection, { backgroundColor: cardBackground }]}>
          <Image
            source={{ uri: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg' }} // Replace with your profile image URL
            style={styles.profileImage}
          />
          <Text style={[styles.profileName, textStyle]}>Amirul Amri</Text>
          <Text style={[styles.profileBio, textStyle]}>Striving to be the best version of myself.</Text>
        </View>

        {/* Streak Overview */}
        <View style={[styles.streakContainer, { backgroundColor: cardBackground }]}>
          <Text style={styles.fireEmoji}>{streak > 0 ? '🔥' : '❄️'}</Text>
          <Text style={[styles.streakText, textStyle]}>{streak} Days</Text>
          <Text style={[styles.streakLabel, textStyle]}>Current Streak</Text>
        </View>

        {/* Effects Section */}
        <View style={[styles.effectsContainer, { backgroundColor: cardBackground }]}>
          <Text style={[styles.sectionTitle, textStyle]}>Today’s Effects</Text>
          <Text style={[styles.effectTitle, textStyle]}>{effects.title}</Text>
          <Text style={[styles.effectDescription, textStyle]}>{effects.description}</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.button} onPress={incrementDayManually}>
          <Text style={styles.buttonText}>I Did It Today!</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNavigation, { backgroundColor: cardBackground }]}>
        <TouchableOpacity style={styles.navItem} onPress={incrementDayManually}>
          <Text style={[styles.navText, textStyle]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={incrementDayManually}>
          <Text style={[styles.navText, textStyle]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={incrementDayManually}>
          <Text style={[styles.navText, textStyle]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#007ACC',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  streakContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  fireEmoji: {
    fontSize: 60,
  },
  streakText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  },
  streakLabel: {
    fontSize: 16,
    color: '#666',
  },
  effectsContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  effectTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  effectDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007ACC',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  developerButton: {
    backgroundColor: '#FF5733',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  developerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
  },
});

export default App;