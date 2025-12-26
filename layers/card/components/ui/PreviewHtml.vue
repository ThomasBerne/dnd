<script setup lang="ts">
const { content } = defineProps<{ content: string }>();
</script>

<template>
  <div class="d-preview-html" v-html="content" />
</template>

<style lang="scss">
.d-preview-html {
  // eslint-disable vue-scoped-css/no-unused-selector
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  hr {
    margin: 1rem 0;
    color: var(--color-green-500);
  }

  p {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--color-green-500);

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5em;
    padding-left: 0;
  }

  ol {
    list-style-type: decimal;
    margin-left: 1.5em;
    padding-left: 0;
  }

  img {
    border-radius: 1rem;
    margin: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid var(--color-green-500);
      padding: 1rem;
    }
  }
}
</style>
