import API from "../api";

export default class LessonManager {
  static async lessonIndex() {
    try {
      const response = await API.get("/lessons");
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async lessonShow(lessonId) {
    try {
      const response = await API.get(`/lessons/${lessonId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async lessonCreate(title, content, userId) {
    try {
      const response = await API.post("/lessons", { lesson: { title: title, content: content, user_id: userId }});
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async lessonUpdate(lessonId, title, content) {
    try {
      const response = await API.patch(`/lessons/${lessonId}`, { lesson: { title: title, content: content }});
      return response;
    } catch (error) {
      return error;
    }
  }

  static async lessonDelete(lessonId) {
    try {
      const response = await API.delete(`/lessons/${lessonId}`);
      return response;
    } catch (error) {
      return error;
    }
  }
}
