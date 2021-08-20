import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { LessonManager } from "../../services";
import LessonsList from "../../components/Lessons/LessonsList";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    LessonManager.lessonIndex().then((response) => setLessons(response))
    .catch((error) => console.log(error));
  }, []);

  const handleOnPress = (value) => {
    setSelectedId(value);
  }

  const renderItem = ({ item }) => (
    <LessonsList data={item} onPressLesson={handleOnPress} />
  );

  return(
    <View>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={item => JSON.stringify(item["_id"])}
        extraData={selectedId}
      />
    </View>
  );
};

export default Lessons;
