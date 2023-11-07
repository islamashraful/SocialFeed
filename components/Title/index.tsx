import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
});

export default Title;
