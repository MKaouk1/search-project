<template>
    <div class="article-preview">
      <h3 class="article-title" v-html="title"></h3>
      <p class="article-date">{{ date }}</p>
      <p class="article-snippet" v-html="snippet"></p>
    </div>
  </template>
  <script src="./script.js"></script>
  <style src="./styles.css"></style>