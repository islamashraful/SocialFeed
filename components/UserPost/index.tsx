import React from 'react';
import {View, StyleSheet, ImageSourcePropType, Image, Text} from 'react-native';
import UserProfileImage from '../UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {getFontFamily} from '../../assets/fonts/helper';

export interface Post {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  id: number;
  image: ImageSourcePropType;
  profileImage: ImageSourcePropType;
}

const UserPost = (props: Post) => {
  const {
    firstName,
    lastName,
    location,
    likes,
    comments,
    bookmarks,
    image,
    profileImage,
  } = props;

  return (
    <View style={styles.userPostContainer}>
      <View style={styles.header}>
        <UserProfileImage profileImage={profileImage} imageDimension={48} />
        <View style={styles.headerRight}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.location}>{location}</Text>
          </View>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869f" size={24} />
        </View>
      </View>

      <View>
        <Image style={styles.image} source={image} />
      </View>

      <View style={styles.footer}>
        <View style={styles.reactionContainer}>
          <FontAwesomeIcon icon={faHeart} color="#79869f" />
          <Text style={styles.reactIcon}>{likes}</Text>
        </View>
        <View style={styles.reactionContainer}>
          <FontAwesomeIcon icon={faMessage} color="#79869f" />
          <Text style={styles.reactIcon}>{comments}</Text>
        </View>
        <View style={styles.reactionContainer}>
          <FontAwesomeIcon icon={faBookmark} color="#79869f" />
          <Text style={styles.reactIcon}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userPostContainer: {
    marginHorizontal: 16,
    marginTop: 36,
    borderBottomColor: '#eff2f6',
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  image: {
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  reactionContainer: {
    flexDirection: 'row',
    marginRight: 24,
  },
  reactIcon: {
    marginLeft: 4,
    color: '#79869f',
  },
  name: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869f',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 4,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UserPost;
