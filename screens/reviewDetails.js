import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = ({ navigation, route }) => {
  const rating = route.params.item.rating;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.item.title}</Text>
        <Text>{route.params.item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image
            source={images.ratings[rating]}
          />
        </View>
      </Card>
    </View>
  )
}

export default ReviewDetails;


const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
})
