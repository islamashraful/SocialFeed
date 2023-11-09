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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getFontFamily } from './assets/fonts/helper';
import UserStory from './components/UserStory';
import UserPost from './components/UserPost';
import {
  USER_POSTS_PAGE_SIZE,
  USER_STORIES_PAGE_SIZE,
} from './utils/pagination';
import { USER_POSTS, USER_STORIES } from './mocks';
import usePagination from './hooks/usePagination';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from './styles/scaling';

const App = () => {
  const { data: stories, handleEndReached: handleEndReachedStories } =
    usePagination(USER_STORIES, USER_STORIES_PAGE_SIZE);

  const { data: posts, handleEndReached: handleEndReachedPosts } =
    usePagination(USER_POSTS, USER_POSTS_PAGE_SIZE);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity style={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898dae"
                    size={20}
                  />
                  <View style={styles.messageNumberContainer}>
                    <Text style={styles.messageNumber}>9</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={handleEndReachedStories}
                  data={stories}
                  renderItem={({ item }) => (
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
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={handleEndReachedPosts}
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <UserPost {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: horizontalScale(14),
    backgroundColor: '#f9fafb',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#f35bac',
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(14),
    height: horizontalScale(14),
    borderRadius: horizontalScale(8),
    right: horizontalScale(6),
    top: verticalScale(6),
    position: 'absolute',
  },
  messageNumber: {
    color: '#fff',
    fontSize: scaleFontSize(10),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(16),
  },
});

export default App;
