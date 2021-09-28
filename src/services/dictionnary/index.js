import API from "../api";

export default class DictionnaryManager {
  static async dictionnarySearch(word) {
    try {
      const response = await API.get(`https://api.pons.com/v1/dictionary?&q=${word}&l=defr&fm=1&ref=true`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
