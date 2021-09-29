import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SectionList, TextInput } from 'react-native';
import { DictionnaryManager } from '../../../services';
import { SearchBar } from 'react-native-elements';
import SearchDropdown from '../SearchDropdown';

const SearchBarInput = () => {
  const [data, setData] = useState([])
  const [isFetched, setIsFetched] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  
  const updateSearch = (input) => {
    setSearchInput(input);
    if(input.length > 0){
      DictionnaryManager.dictionnarySearch(input).then((response) => 
      {
        setData(response),
        setIsFetched(true)
    })
      .catch((error) => console.log(error));
    } else {
      setIsFetched(false);
    }
  }

  return(
    <View>
    <SearchBar
        placeholder="Rechercher"
        onChangeText={updateSearch}
        value={searchInput}
    />
    { isFetched && <SearchDropdown data={data}></SearchDropdown>}
    </View>
  );
};

const styles = StyleSheet.create({

});


export default SearchBarInput;
