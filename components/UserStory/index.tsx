import React from 'react';
import { View, StyleSheet, Text, ImageSourcePropType } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import UserProfileImage from '../UserProfileImage';

interface Props {
  firstName: string;
  profileImage: ImageSourcePropType;
}

const UserStory = ({ firstName, profileImage }: Props) => (
  <View style={styles.storyContainer}>
    <UserProfileImage profileImage={profileImage} imageDimension={65} />
    <Text style={styles.firstName}>{firstName}</Text>
  </View>
);

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: 16,
  },
  firstName: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default UserStory;
