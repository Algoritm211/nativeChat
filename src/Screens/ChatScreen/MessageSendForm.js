import React from 'react'
import { StyleSheet, TextInput, View} from "react-native";
import {Formik} from "formik";
import {Button, Icon} from "react-native-elements";

const MessageSendForm = (props) => {


  return (
    <View style={styles.formBlock}>
      <Formik
        initialValues={{message: ''}}
        onSubmit={values => console.log(values)}
      >
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.inputContainer}>
            <View style={styles.messageInput}>
              <TextInput
                scrollEnabled={true}
                placeholder={'Введите свое сообщение'}
                value={values.message}
                multiline={true}
                onChangeText={handleChange('message')}
              />
            </View>
            <View style={styles.sendButton}>
              <Button title='Submit' onPress={() => handleSubmit()}/>
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}
export default MessageSendForm


const styles = StyleSheet.create({
  formBlock: {
    width: '100%',
    minHeight: 50,
    padding: 7,
    maxHeight: 100,
    backgroundColor: '#ffffff'
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  messageInput: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    width: '70%',
  },
  sendButton: {
    width: '20%',
  },
})
