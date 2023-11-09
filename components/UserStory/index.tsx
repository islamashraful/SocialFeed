import React from 'react';
import { View, StyleSheet, Text, ImageSourcePropType } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import UserProfileImage from '../UserProfileImage';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

interface Props {
  firstName: string;
  profileImage: ImageSourcePropType;
}

const UserStory = ({ firstName, profileImage }: Props) => (
  <View style={styles.storyContainer}>
    <UserProfileImage
      profileImage={profileImage}
      imageDimension={horizontalScale(65)}
    />
    <Text style={styles.firstName}>{firstName}</Text>
  </View>
);

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(16),
  },
  firstName: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default UserStory;
