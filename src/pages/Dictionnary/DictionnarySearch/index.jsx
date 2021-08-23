import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SectionList, useWindowDimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { DictionnaryManager } from '../../../services';
import RenderHtml from 'react-native-render-html';

const DictionnarySearch = () => {
  const [result, setResult] = useState([])
  const [data, setData] = useState([])
  const [isFetched, setIsFetched] = useState(false)
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    DictionnaryManager.dictionnarySearch("monat").then((response) => 
    {
      setResult(response),
      setIsFetched(true),
      setData(response[0].hits[0].roms[0].arabs.map(( element ) => ({title: element.header, data: element.translations.map(( element ) => [[element.source], [element.target]])})))
    })
      .catch((error) => console.log(error));
  }, []);

  const Item = ({ content }) => (
    <RenderHtml
      contentWidth={width}
      source={{ html: content.toString() }}
    />
  );

  return(
    <View style={styles.container}>
      { isFetched && <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item content={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <RenderHtml
            contentWidth={width}
            source={{ html: title.toString() }}
          />
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