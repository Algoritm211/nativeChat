import React, {useEffect, useRef, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import MessageBlock from "./MessageBlock";
import MessageSendForm from "./MessageSendForm";
import {Icon, Button} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../redux/chatReducer-selector";
import {startMessageListening, stopMessageListening} from "../../redux/chat-reducer";


export default function ChatScreen() {

  const scrollRef = useRef()
  const dispatch = useDispatch()

  const [isScrollButton, setIsScrollButton] = useState(false)

  const messages = useSelector(getMessages)

  useEffect(() => {
    dispatch(startMessageListening())

    return () => {
      dispatch(stopMessageListening())
    }
  }, [])


  const messagesBlock = messages.map((message, index) => {
    return <MessageBlock message={message} key={index}/>
  })


  const scrollMessagesToEnd = () => {
    scrollRef.current?.scrollToEnd({animated: true})
  }

  const handleScroll = (event) => {
    const nEvent = event.nativeEvent
    if ((nEvent.contentSize.height - (nEvent.layoutMeasurement.height + nEvent.contentOffset.y)) > 200) {
      setIsScrollButton(true)
    } else {
      setIsScrollButton(false)
    }
  }

  return (
    <View style={styles.chatContainer}>
      <ScrollView
        onScroll={handleScroll}
        ref={scrollRef}>
        <View style={styles.messageContainer}>
          {messagesBlock}
        </View>
      </ScrollView>
      <View>
        <MessageSendForm scrollToEnd={scrollMessagesToEnd}/>
      </View>

      {isScrollButton &&
      <View
        style={styles.scrollDownButtonOpen}>
        <Button
          onPress={scrollMessagesToEnd}
          icon={
            <Icon
              color={'#ffffff'}
              type={'font-awesome'}
              name='arrow-down'/>
          }
        />
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },
  messageContainer: {
    padding: 15,
  },
  scrollDownButtonOpen: {
    position: 'absolute',
    right: 15,
    bottom: '15%',
    opacity: 0.7
  }
})
