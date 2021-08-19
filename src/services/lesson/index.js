import API from "../api";

export default class StoreManager {
  static async lessonIndex() {
    try {
      const response = await API.get("/lesson");
      return response;
    } catch (error) {
      return error;
    }
  }

  static async lessonShow(lessonId) {
    try {
      const response = await API.get(`/lesson/${lessonId}`);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async lessonCreate(title, content, userId) {
    try {
      const response = await API.post("/lesson", { lesson: { title: title, content: content, user_id: userId }});
      return response;
    } catch (error) {
      return error;
    }
  }

  static async lessonUpdate(lessonId, title, content) {
    try {
      const response = await API.patch(`/lesson/${lessonId}`, { lesson: { title: title, content: content }});
      return response;
    } catch (error) {
      return error;
    }
  }

  static async lessonDelete(lessonId) {
    try {
      const response = await API.delete(`/lesson/${lessonId}`);
      return response;
    } catch (error) {
      return error;
    }
  }
}
