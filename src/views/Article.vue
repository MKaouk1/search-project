<template>
  <div class="article">
    <h2 class="title">{{ title }}</h2>
    <p class="date">{{ date }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '@/stores/UIstore';

export default defineComponent({
  name: 'Article',
  data() {
    return {
      title: '' as string,
      date: '' as string,
      text: '' as string,
    };
  },
  mounted() {
    const uiStore = useUiStore();
    this.title = uiStore.getTitle;
    this.date = uiStore.getDate;
    this.text = uiStore.getText;
  }
});
</script>

<style scoped>
.article {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.article:hover {
  transform: scale(1.02);
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.date {
  font-size: 14px;
  color: #888;
  margin-bottom: 15px;
}

.text {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}
</style>