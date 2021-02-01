import {Button, Text, View} from "react-native";
import * as React from "react";

export default function MainScreen({navigation}) {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Chats"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}
