import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { DictionnaryManager } from '../../../services';
import { ListItem, Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
// import FranceFlag from "../../../../assets/images/FranceFlag.png";
// import GermanFlag from "../../../../assets/images/GermanFlag.png";

const SearchDropdown = ({data}) => {
  const [list, setList] = useState([]);
  const navigation = useNavigation(); 

  const createDataList = (data) => {
    setList(data.map((element) => {
      if(element.lang === "de"){
        return ({id: element["_id"]["$oid"], title: element.title, lang: "https://icons.iconarchive.com/icons/custom-icon-design/flat-europe-flag/512/Germany-icon.png"})
      } else if(element.lang === "fr"){
        return ({id: element["_id"]["$oid"], title: element.title, lang: "https://icons.iconarchive.com/icons/custom-icon-design/flat-europe-flag/512/France-icon.png"})
      }
    }));
  };

  useEffect(() => {
    createDataList(data);
  }, [data]);

  const handleOnPress = (id) => {
    navigation.navigate({
      name: 'Dictionnaire',
      params: { searchId: id },
    });
  }

  return(
    <View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() => handleOnPress(l.id)}>
        <Avatar source={{uri: l.lang}} />
        <ListItem.Content>
          <ListItem.Title>{l.title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
  );
};

const styles = StyleSheet.create({

});


export default SearchDropdown;
