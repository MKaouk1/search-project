export default {
    props: {
      title: String,
      date: String,
      text: String,
      searchQuery: String,
    },
    computed: {
      snippet() {
        return this.text.length > 250
          ? this.text.slice(0, 250) + "..."
          : this.text;
      },
    },
    methods: {
      highlightText(text) {
        if (this.searchQuery) {
          const searchQueryLower = this.searchQuery.toLowerCase();
  
          const words = text.split(' ');
  
          const highlightedText = words.map(word => {
            if (word.toLowerCase().includes(searchQueryLower)) {
              return '<span class="highlight">'+ word + '</span>';
            }
            return word;
          });
  
          return highlightedText.join(' ');
        }
  
        return text;
      },
    },
  };