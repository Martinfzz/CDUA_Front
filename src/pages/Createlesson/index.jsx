import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Button, Keyboard } from "react-native";
import { useSelector } from "react-redux";
import { LessonManager } from "../../services";

const CreateLesson = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userId = useSelector((loginstore) => loginstore.user.userProfile);

  const handleOnPress = () => {
    LessonManager.lessonCreate(title, content, userId ).then((response) => navigation.navigate({
      name: 'Lesson',
      params: { lessonId: response._id },
    }))
    .catch((error) => console.log(error));
  };

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Titre"
          />
          <TextInput
            style={styles.input}
            onChangeText={setContent}
            value={content}
          />
          <Button
            onPress={handleOnPress}
            title="Valider"
            color="#841584"
          />
        </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
});

export default CreateLesson;
