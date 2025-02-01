<template>
  <div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search articles"
      class="search-bar"
    />
    <div>
      <ArticlePreview
        v-for="article in filteredArticles"
        :key="article.title"
        :title="article.highlightedTitle || article.title"
        :date="article.date"
        :text="article.highlightedText || article.text"
        :searchQuery="searchQuery"
        @click="goToArticle(article.title, article.date, article.text)"
      />
    </div>
  </div>
</template>
  <script src="./script.js"></script>
  <style src="./styles.css"></style>