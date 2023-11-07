import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface Props {
  profileImage: ImageSourcePropType;
  imageDimension: number;
}

const UserProfileImage = ({ profileImage, imageDimension }: Props) => (
  <View style={[styles.imageContainer, { borderRadius: imageDimension }]}>
    <Image
      source={profileImage}
      style={{ width: imageDimension, height: imageDimension }}
    />
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    borderColor: '#f35bac',
    padding: 3,
    borderRadius: 65,
  },
});

export default UserProfileImage;
