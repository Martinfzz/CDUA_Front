import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LessonsList = ({ data, onPressLesson }) => {
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return(
    <Item
        item={data}
        onPress={() => onPressLesson(data["_id"])}
        backgroundColor={{  }}
        textColor={{  }}
      />
  );
};

const styles = StyleSheet.create({
});

export default LessonsList;
