import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation, route }) => {

  return (
    <View style={globalStyles.container}>
      <Text>{route.params.item.title}</Text>
      <Text>{route.params.item.body}</Text>
      <Text>{route.params.item.rating}</Text>
    </View>
  )
}

export default ReviewDetails;

