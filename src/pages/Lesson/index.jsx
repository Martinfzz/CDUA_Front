import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { LessonManager } from "../../services";

const Lesson = ({ route }) => {
  const [lesson, setLesson] = useState([]);
  
  useEffect(() => {
    LessonManager.lessonShow(route.params.lessonId["$oid"]).then((response) => setLesson((response)))
    .catch((error) => console.log(error));
  }, []);

  return(
    <View>
      <Text>{lesson.title}</Text>
      <Text>{lesson.content}</Text>
    </View>
  );
};

export default Lesson;
