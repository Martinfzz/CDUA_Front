import React, { useState} from "react";
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Button, Keyboard } from "react-native";
import { LessonManager } from "../../services";
import { useFocusEffect } from '@react-navigation/native';

const Lesson = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const lessonId = route.params.lessonId;

  console.log(lessonId)

  const handleOnPress = () => {
    LessonManager.lessonUpdate(lessonId, title, content ).then((response) => navigation.navigate('Lessons'))
    .catch((error) => console.log(error));
  };

  useFocusEffect(
    React.useCallback(() => {
      LessonManager.lessonShow(lessonId).then((response) => {setTitle(response.title); setContent(response.content)})
    .catch((error) => console.log(error));
    }, [])
  );

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
      />
      <Button
        onPress={handleOnPress}
        title="Mettre à jour"
        color="#841584"
      />
    </View>
  </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
});

export default Lesson;
