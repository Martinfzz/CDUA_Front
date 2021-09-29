import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SectionList, TextInput } from 'react-native';
import { DictionnaryManager } from '../../../services';
import { SearchBar } from 'react-native-elements';

const SearchBarInput = () => {
  const [data, setData] = useState([])
  const [isFetched, setIsFetched] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  
  const updateSearch = (input) => {
    setSearchInput(input)
  }

  useEffect(() => {
    DictionnaryManager.dictionnarySearch(searchInput).then((response) => 
    {
      setIsFetched(true),
      setData(response)
    })
      .catch((error) => console.log(error));
  }, [searchInput])

  console.log(data)

  return(
    <SearchBar
        placeholder="Rechercher"
        onChangeText={updateSearch}
        value={searchInput}
      />
  );
};

const styles = StyleSheet.create({

});


export default SearchBarInput;
