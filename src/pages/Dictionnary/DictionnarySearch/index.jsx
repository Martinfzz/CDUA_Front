import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
import { WebView } from 'react-native-webview';
import { DictionnaryManager } from '../../../services';

const DictionnarySearch = () => {
  const [result, setResult] = useState([])
  const [data, setData] = useState([])
  const [isFetched, setIsFetched] = useState(false)
  
  useEffect(() => {
    DictionnaryManager.dictionnarySearch("monat").then((response) => 
    {
      setResult(response),
      setIsFetched(true),
      setData(response[0].hits[0].roms[0].arabs.map(( element ) => ({title: element.header, data: element.translations.map(( element ) => [[element.source], [element.target]])})))
    })
      .catch((error) => console.log(error));
  }, []);

  const Item = ({ content }) =>{ 
    return(
      <View><Text>dslfi</Text></View>
  );}

  return(
    <View style={styles.container}>
      <WebView
      originWhitelist={['*']}
      source={{ html: '<h1>dsfgpjkfd</h1>' }}
  />
      
      { isFetched && <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item content={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      </View> }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default DictionnarySearch;
