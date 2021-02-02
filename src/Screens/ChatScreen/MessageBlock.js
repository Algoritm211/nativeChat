import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "react-native-elements";


const MessageBlock = () => {

  return (
    <View style={styles.messageBlockContainer}>
      <View style={styles.messageAvatar}>
        <Avatar
          size={'medium'}
          rounded
          source={{
            uri:
              'https://www.memphisveterinaryspecialists.com/files/best-breeds-of-house-cats-memphis-vet-1-1.jpeg',
          }}
        />
      </View>
      <View style={styles.messageBlock}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate hic mollitia perspiciatis quos. Ad, amet assumenda at cum dicta dignissimos dolor eaque eligendi ex id maiores quidem quo sequi veniam.</Text>
      </View>
    </View>

  )
}
export default MessageBlock


const styles = StyleSheet.create({
  messageBlockContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '80%',
    marginBottom: 10
  },
  messageAvatar: {
    marginRight: 10
  },
  messageBlock: {
    minWidth: 160,
    minHeight: 60,
    backgroundColor: '#d2d2d2',
    borderRadius: 8,
    padding: 8
  }
})
