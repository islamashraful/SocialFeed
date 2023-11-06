import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {getFontFamily} from './assets/fonts/helper';
import UserStory from './components/UserStory';

const USER_STORIES = [
  {
    id: 1,
    firstName: 'Joseph',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 2,
    firstName: 'Joseph',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 3,
    firstName: 'Joseph',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 4,
    firstName: 'Angel',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 5,
    firstName: 'White',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 6,
    firstName: 'Oliver',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 7,
    firstName: 'Ashraful',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 8,
    firstName: 'Nikolas',
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    id: 9,
    firstName: 'Nino',
    profileImage: require('./assets/images/default_profile.png'),
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faEnvelope} color="#898dae" size={20} />
          <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>9</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userStoryContainer}>
        <FlatList
          data={USER_STORIES}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 14,
    backgroundColor: '#f9fafb',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#f35bac',
    alignItems: 'center',
    justifyContent: 'center',
    width: 14,
    height: 14,
    borderRadius: 8,
    right: 6,
    top: 6,
    position: 'absolute',
  },
  messageNumber: {
    color: '#fff',
    fontSize: 10,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 16,
  },
});

export default App;
