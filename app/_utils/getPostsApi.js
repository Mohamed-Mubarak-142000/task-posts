import axiosClient from "./axiosClient";

const getAllPosts = () => axiosClient.get("/posts");
const getOnePosts = (id) => axiosClient.get(`/posts/${id}`);
const getCommentsOfPost = (id) => axiosClient.get(`/posts/${id}/comments`);

export default { getAllPosts, getOnePosts, getCommentsOfPost };
