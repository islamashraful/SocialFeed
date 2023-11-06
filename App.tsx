import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
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

interface Story {
  id: number;
  firstName: string;
  profileImage: ImageSourcePropType;
}

const USER_STORIES: Story[] = [
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

const USER_POSTS: Post[] = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Boston, MA',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 1,
    image: require('./assets/images/default_post.png'),
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Jennifer',
    lastName: 'Wilkson',
    location: 'Worcester, MA',
    likes: 1301,
    comments: 25,
    bookmarks: 70,
    id: 2,
    image: require('./assets/images/default_post.png'),
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Worcester, MA',
    likes: 100,
    comments: 8,
    bookmarks: 3,
    id: 3,
    image: require('./assets/images/default_post.png'),
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    lastName: 'Vacheishvili',
    location: 'New York, NY',
    likes: 200,
    comments: 16,
    bookmarks: 6,
    id: 4,
    image: require('./assets/images/default_post.png'),
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nicolas',
    lastName: 'Namoradze',
    location: 'Berlin, Germany',
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    id: 5,
    image: require('./assets/images/default_post.png'),
    profileImage: require('./assets/images/default_profile.png'),
  },
];

const USER_STORIES_PAGE_SIZE = 4;
const USER_POSTS_PAGE_SIZE = 2;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [paginatedPostsData, setPaginatedPostsData] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  function pagination<T>(database: T[], page: number, size: number): T[] {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  }

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
