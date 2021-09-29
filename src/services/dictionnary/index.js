import API from "../api";

export default class DictionnaryManager {
  static async dictionnaryShow(wordId) {
    try {
      const response = await API.get(`/dictionnaries/${wordId}`);
      return response.data;
    } catch (error) {
      try {
        const response = await API.get(`https://api.pons.com/v1/dictionary?&q=${word}&l=defr&fm=1&ref=true`);
        API.post("/dictionnaries", { dictionnary: { title: response.data[0].hits[0].roms[0].headword.toLowerCase(), lang: response.data[0].lang, data: [response.data[0]]}})
        return response.data;
      } catch (error) {
        return error;
      }
    }
  }

  static async dictionnarySearch(word) {
    try {
      const response = await API.get(`/dictionnary/${word.toLowerCase()}`);
      return response.data;
    } catch (error) {
        return error;
    }
  }
}
