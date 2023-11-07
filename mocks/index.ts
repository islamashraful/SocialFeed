import {Post} from '../components/UserPost';
import {Story} from '../models';

export const USER_STORIES: Story[] = [
  {
    id: 1,
    firstName: 'Joseph',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 2,
    firstName: 'Joseph',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 3,
    firstName: 'Joseph',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 4,
    firstName: 'Angel',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 5,
    firstName: 'White',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 6,
    firstName: 'Oliver',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 7,
    firstName: 'Ashraful',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 8,
    firstName: 'Nikolas',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 9,
    firstName: 'Nino',
    profileImage: require('../assets/images/default_profile.png'),
  },
];

export const USER_POSTS: Post[] = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Boston, MA',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 1,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Jennifer',
    lastName: 'Wilkson',
    location: 'Worcester, MA',
    likes: 1301,
    comments: 25,
    bookmarks: 70,
    id: 2,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Worcester, MA',
    likes: 100,
    comments: 8,
    bookmarks: 3,
    id: 3,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    lastName: 'Vacheishvili',
    location: 'New York, NY',
    likes: 200,
    comments: 16,
    bookmarks: 6,
    id: 4,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nicolas',
    lastName: 'Namoradze',
    location: 'Berlin, Germany',
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    id: 5,
    image: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
];
