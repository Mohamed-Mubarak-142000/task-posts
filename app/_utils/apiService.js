import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const apiService = {
  getPosts: async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  },
  createPost: async (newPost) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, newPost, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Return the created post data from the response
      return response.data;
    } catch (error) {
      // Handle any errors
      console.error("Failed to create post:", error);
      throw error;
    }
  },
  getPostById: async (id) => {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  },
  getPostsByUserId: async (userId) => {
    const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
    return response.data;
  },
  getCommentsOfPost: async (id) => {
    const response = await axios.get(`${BASE_URL}/posts/${id}/comments`);
    return response.data;
  },
};

export default apiService;
