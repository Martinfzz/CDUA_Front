import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Item } from "react-native";
import { LessonManager } from "../../services";


const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [isFetched, setIsFetched] = useState(false);


  useEffect(() => {
    LessonManager.lessonIndex().then((response) => setLessons(response))
    .catch((error) => console.log(error));
    setIsFetched(true);
  }, []);

  const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
  );

  return(
    <View>
      { isFetched && <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />}
    </View>
  );
};

export default Lessons;
