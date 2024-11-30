<template>
    <div class="project-card">
      <div class="image-container">
        <img
          :src="project.image"
          :alt="project.title"
          class="project-image"
        />
        <div class="overlay"></div>
      </div>
      <div class="content">
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-description">{{ project.description }}</p>
  
        <div class="tags">
          <span
            v-for="(tag, index) in project.tags"
            :key="index"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
  
        <div class="metrics">
          <div
            v-for="(metric, index) in project.metrics"
            :key="index"
            class="metric"
          >
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
          </div>
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
  /* Scoped styles for ProjectCard */
  .project-card {
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  
  .project-card:hover {
    border-color: #555;
    transform: translateY(-4px);
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
    height: 150px;
  }
  
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .project-image {
    opacity: 0.9;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
  
  .content {
    padding: 16px;
  }
  
  .project-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 8px;
  }
  
  .project-description {
    font-size: 0.875rem;
    color: #bbb;
    margin-bottom: 16px;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .tag {
    background-color: #333;
    color: #ddd;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  .metric {
    text-align: center;
  }
  
  .metric-value {
    font-size: 1.25rem;
    font-weight: bold;
    color: #4a90e2;
  }
  
  .metric-label {
    font-size: 0.75rem;
    color: #bbb;
  }
  </style>
  