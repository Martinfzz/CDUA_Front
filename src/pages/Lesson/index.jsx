import React, { useState} from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Button, Keyboard } from "react-native";
import { LessonManager } from "../../services";
import { useFocusEffect } from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
import EditLesson from "../../components/Lessons/EditLesson";

const Lesson = ({ route }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [edit, setEdit] = useState(false);
  const lessonId = route.params.lessonId;

  useFocusEffect(
    React.useCallback(() => {
      LessonManager.lessonShow(lessonId).then((response) => {setTitle(response.title); setContent(response.content)})
    .catch((error) => console.log(error));
    }, [])
  );

  const handleOnPressEdit = () => {
    setEdit(true);
  }

  const handleEditLesson = (newTitle, newContent) => {
    setTitle(newTitle);
    setContent(newContent);
    setEdit(false);
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1}}>
      { !edit && <View>
        <Text onPress={handleOnPressEdit}>{title}</Text>
        <Text onPress={handleOnPressEdit}>
          <Markdown>{content}</Markdown>
        </Text>
        </View> }
      { edit && <EditLesson title={title} content={content} editLesson={handleEditLesson} lessonId={lessonId} /> }
    </View>
  </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
});

export default Lesson;
