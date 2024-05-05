import { create } from "zustand";

const useStore = create((set) => ({
  posts: [],
  title: "",
  body: "",
  search: "",

  // Set posts
  // Set posts and sort them by id in descending order
  setPosts: (newPosts) =>
    set((state) => ({
      posts: [...newPosts, ...state.posts].sort(
        (a, b) => b.id - a.id // Sort by id in descending order
      ),
    })),

  // Add a new post and sort by id in descending order
  addPost: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts].sort(
        (a, b) => b.id - a.id // Sort by id in descending order
      ),
    })),
  // Other state updates
  setTitle: (title) => set({ title }),
  setBody: (body) => set({ body }),
  setSearch: (search) => set({ search }),

  // Reset form
  resetForm: () => set({ title: "", body: "" }),
}));

export default useStore;
