import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Icon } from 'react-native-elements'
import { LessonManager } from "../../services";
import { useFocusEffect } from '@react-navigation/native';
import LessonsList from "../../components/Lessons/LessonsList";

const Lessons = ({ navigation }) => {
  const [lessons, setLessons] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      LessonManager.lessonIndex().then((response) => setLessons(response))
    .catch((error) => console.log(error));
    }, [selectedId])
  );

  const handleOnPress = (value) => {
    setSelectedId(value);
    navigation.navigate({
      name: 'Lesson',
      params: { lessonId: value },
    });
  }

  
  const handleOnPressDelete = (value) => {
    LessonManager.lessonDelete(value).then((response) => setSelectedId(response))
    .catch((error) => console.log(error));
  }

  const renderItem = ({ item }) => (
    <LessonsList data={item} onPressLesson={handleOnPress} onPressDelete={handleOnPressDelete} />
  );

  return(
    <View>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={item => JSON.stringify(item["_id"])}
        extraData={selectedId}
      />
      <Icon
        raised
        name='plus'
        type='font-awesome'
        color='#f50'
        reverse= "true"
        onPress={() => navigation.navigate("CreateLesson")} />
    </View>
  );
};

export default Lessons;
