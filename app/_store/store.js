import { create } from "zustand";

const useStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  addPost: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts],
    })),

  search: "",
  setSearch: (search) => set({ search }),
}));

export default useStore;
