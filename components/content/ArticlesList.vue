<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

const excludedArticles = [
  'get-started',
  'configure',
  'write-articles',
  'design-tokens'
]

// @ts-ignore
const { data: _articles } = await useAsyncData(props.path, async () => {
  const articles = await queryContent(withTrailingSlash(props.path))
    .sort({ date: -1 })
    .find()
    
  return articles.filter(article => {
    const path = article._path?.split('/').pop()
    return !excludedArticles.some(excluded => path?.includes(excluded))
  })
})

const articles = computed(() => _articles.value || [])
</script>

<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="vertical-layout">
      <NuxtLink 
        v-for="article in articles" 
        :key="article._path"
        :to="article._path" 
        class="article-link"
      >
        <span class="title">{{ article.title }}</span>
        <time>{{ formatDate(article.date) }}</time>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.articles-list': {
    width: '100%',
    '.vertical-layout': {
      display: 'flex',
      flexDirection: 'column',
      gap: '{space.4}',
      '.article-link': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '{space.4}',
        borderBottom: '1px solid {color.gray.200}',
        '@dark': {
          borderColor: '{color.gray.800}'
        },
        '&:hover': {
          backgroundColor: '{color.gray.50}',
          '@dark': {
            backgroundColor: '{color.gray.800}'
          }
        },
        '.title': {
          color: '{color.gray.900}',
          fontWeight: '{fontWeight.medium}',
          '@dark': {
            color: '{color.gray.100}'
          }
        },
        'time': {
          color: '{color.gray.500}',
          fontSize: '{text.sm.fontSize}'
        }
      }
    }
  }
})
</style>
