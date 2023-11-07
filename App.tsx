import React, {useEffect, useState} from 'react';
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
import UserPost, {Post} from './components/UserPost';
import {
  USER_POSTS_PAGE_SIZE,
  USER_STORIES_PAGE_SIZE,
  pagination,
} from './utils/pagination';
import {USER_POSTS, USER_STORIES} from './mocks';
import {Story} from './models';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [paginatedPostsData, setPaginatedPostsData] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const data = pagination(USER_STORIES, currentPage, USER_STORIES_PAGE_SIZE);
    setPaginatedData(data);
    setIsLoading(false);

    setIsLoadingPosts(true);
    const posts = pagination(
      USER_POSTS,
      currentPostsPage,
      USER_POSTS_PAGE_SIZE,
    );
    setPaginatedPostsData(posts);
    setIsLoadingPosts(false);
  }, []);

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
                  onEndReached={() => {
                    if (isLoading) {
                      return;
                    }
                    setIsLoading(true);
                    const contentsToAppend = pagination(
                      USER_STORIES,
                      currentPage + 1,
                      USER_STORIES_PAGE_SIZE,
                    );
                    if (contentsToAppend.length) {
                      setCurrentPage(currentPage + 1);
                      setPaginatedData(prev => [...prev, ...contentsToAppend]);
                    }
                    setIsLoading(false);
                  }}
                  data={paginatedData}
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
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingPosts) {
              return;
            }
            setIsLoadingPosts(true);
            const contentsToAppend = pagination(
              USER_POSTS,
              currentPostsPage + 1,
              USER_POSTS_PAGE_SIZE,
            );
            if (contentsToAppend.length) {
              setCurrentPostsPage(currentPostsPage + 1);
              setPaginatedPostsData(prev => [...prev, ...contentsToAppend]);
            }
            setIsLoadingPosts(false);
          }}
          data={paginatedPostsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <UserPost {...item} />}
          keyExtractor={item => item.id.toString()}
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
