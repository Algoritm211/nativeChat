import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "react-native-elements";


const MessageBlock = ({message}) => {

  return (
    <View style={styles.messageBlockContainer}>
      <View style={styles.messageAvatar}>
        <Avatar
          size={'medium'}
          rounded
          source={{
            uri:
              message.photo || 'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png',
          }}
        />
      </View>
      <View style={styles.messageBlock}>
        <Text>{message.message}</Text>
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
