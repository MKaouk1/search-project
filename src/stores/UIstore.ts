import { defineStore } from "pinia";
export const useUiStore = defineStore("UI", {
  state: () => ({
    title: "",
    date: "",
    text: "",
  }),
  actions: {
    setTitle(value: string) {
      this.title = value;
    },
    setDate(value: string) {
      this.date = value;
    },
    setText(value: string) {
      this.text = value;
    },
  },
  getters:{
    getTitle: (state) => state.title,
    getDate: (state) => state.date,
    getText: (state) => state.text

  },
});
