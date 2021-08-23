import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Button, Keyboard } from "react-native";
import { LessonManager } from "../../../services";

const EditLesson = ({ title, content, editLesson, lessonId }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleOnPress = () => {
    LessonManager.lessonUpdate(lessonId, newTitle, newContent )
    .catch((error) => console.log(error));
    editLesson(newTitle, newContent)
  };

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        onChangeText={setNewTitle}
        value={newTitle}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNewContent}
        value={newContent}
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

export default EditLesson;
