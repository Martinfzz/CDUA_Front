import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'

const LessonsList = ({ data, onPressLesson, onPressDelete }) => {
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}
        <Icon
          name='trash'
          type='font-awesome'
          color='#f50'
          onPress={() => onPressDelete(item._id["$oid"])} />
      </Text>
    </TouchableOpacity>
  );

  return(
    <Item
        item={data}
        onPress={() => onPressLesson(data._id["$oid"])}
        backgroundColor={{  }}
        textColor={{  }}
      />
  );
};

const styles = StyleSheet.create({
});

export default LessonsList;
