<template>
    <div class="project-details">
      <h2 class="title">{{ project.title }}</h2>
      <p class="description">{{ project.longDescription }}</p>
      <div class="stats">
        <div v-for="(value, key) in project.stats" :key="key" class="stat">
          <span class="value">{{ value }}</span>
          <span class="key">{{ key }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles for ProjectDetails */
  .project-details {
    margin-top: 16px;
    padding: 16px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4a4a4a;
    margin-bottom: 8px;
  }
  
  .description {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 16px;
  }
  
  .stats {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  
  .stat {
    text-align: center;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #ffffff;
    flex: 1 1 calc(33.333% - 16px);
  }
  
  .value {
    font-size: 1.25rem;
    font-weight: bold;
    color: #007bff;
  }
  
  .key {
    font-size: 0.875rem;
    color: #6c757d;
    margin-top: 4px;
  }
  </style>
  