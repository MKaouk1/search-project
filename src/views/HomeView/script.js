import { useUiStore } from "@/stores/UIstore";
import ArticlePreview from "@/components/ArticlePerview/index.vue";
import { fakeArticles } from "@/fakeArticles/fakedata";
import { useRouter } from "vue-router";

export default {
  components: {
    ArticlePreview,
  },
  data() {
    return {
      fakeArticles,
      searchQuery: "",
    };
  },
  computed: {
    filteredArticles() {
      if(this.searchQuery === ""){
        return this.fakeArticles.map((article) => ({
          ...article,
          highlightedTitle: article.title,
          highlightedText:article.text
        }))
      }
      if (this.searchQuery) {
        const searchQueryLower = this.searchQuery.toLowerCase();

        return this.fakeArticles.filter((article) => {
          const titleMatch = article.title
            .toLowerCase()
            .includes(searchQueryLower);
            
          const textMatch = article.text
            .toLowerCase()
            .includes(searchQueryLower);

          if (titleMatch || textMatch) {
            article.highlightedTitle = this.highlightText(
              article.title,
              searchQueryLower
            );
            article.highlightedText = this.highlightText(
              article.text,
              searchQueryLower
            );
          }

          return titleMatch || textMatch;
        });
      }
      return this.fakeArticles;
    },
  },
  methods: {
    goToArticle(title, date, text) {
      const UIStore = useUiStore();
      UIStore.setTitle(title);
      UIStore.setDate(date);
      UIStore.setText(text);
      this.$router.push('/article');
    },
    highlightText(text, searchQueryLower) {
      const words = text.split(" ");

      return words
        .map((word) => {
          if (word.toLowerCase().includes(searchQueryLower)) {
            return `<span class="highlight">${word}</span>`;
          }
          return word;
        })
        .join(" ");
    },
  },
};