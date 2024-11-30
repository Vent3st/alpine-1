<template>
    <div class="portfolio-showcase">
      <div class="container">
        <header class="text-center mb-12">
          <p class="subtitle">
            Showcasing expertise in GTM strategy, AI-driven insights, and Business Intelligence to drive growth and innovation.
          </p>
        </header>
  
        <div class="tabs">
          <ul class="tab-list">
            <li
              v-for="category in categories"
              :key="category.id"
              :class="['tab', activeCategory === category.id ? 'active' : '']"
              @click="setActiveCategory(category.id)"
            >
              {{ category.label }}
            </li>
          </ul>
          <div class="tab-content">
            <div class="projects">
              <ProjectCard
                v-for="(project, index) in filteredProjects"
                :key="index"
                :project="project"
                @select-project="setActiveProject"
              />
            </div>
            <div v-if="activeProject" class="project-details">
              <ProjectDetails :project="activeProject" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  import ProjectDetails from './ProjectDetails.vue';
  
  export default {
    components: {
      ProjectCard,
      ProjectDetails,
    },
    data() {
      return {
        activeCategory: 'all',
        activeProject: null,
        categories: [
          { id: 'all', label: 'All Projects' },
          { id: 'web', label: 'AI Apps' },
          { id: 'dashboard', label: 'Dashboards' },
          { id: 'mobile', label: 'Web Apps' },
        ],
        projects: [
          {
            title: 'Executive Dashboard',
            description: 'Full-featured executive dashboard with real-time analytics',
            category: 'dashboard',
            image: '/ExecutiveDashboard--WebP.webp',
            tags: ['Tableau', 'SQL', 'Redshift'],
          },
          {
            title: 'Customer Healthscore Dashboard',
            description: 'A clear, data-driven view of customer engagement and satisfaction',
            category: 'dashboard',
            image: '/HSDashboard1--WebP.webp',
            tags: ['Tableau', 'SQL', 'Redshift'],
          },
          {
            title: 'Geographic Customer Map',
            description: 'A map of customers by zipcode',
            category: 'dashboard',
            image: '/CohortCustomerMapping--WebP.webp',
            tags: ['Tableau', 'SQL', 'Tableau Data Prep', 'Redshift'],
          },
        ],
      };
    },
    computed: {
      filteredProjects() {
        return this.activeCategory === 'all'
          ? this.projects
          : this.projects.filter((project) => project.category === this.activeCategory);
      },
    },
    methods: {
      setActiveCategory(categoryId) {
        this.activeCategory = categoryId;
        this.activeProject = null;
      },
      setActiveProject(project) {
        this.activeProject = project;
      },
    },
  };
  </script>
  
  <style scoped>
  /* General container */
  .portfolio-showcase {
    font-family: Arial, sans-serif;
    padding: 16px;
    background-color: transparent; /* Set background to transparent */
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Header styles */
  .text-center {
    text-align: center;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fefdfd;
  }
  
  .subtitle {
    font-size: 1.25rem;
    color: #fbfbfc;
  }
  
  /* Tabs */
  .tabs {
    margin-top: 32px;
  }
  
  .tab-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    gap: 16px;
  }
  
  .tab {
    cursor: pointer;
    padding: 8px 16px;
    border: 1px solid #dee2e6;
    background-color: #ffffff;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .tab.active {
    background-color: #007bff;
    color: #ffffff;
  }
  
  /* Projects grid */
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 32px;
  }
  
  .project-details {
    margin-top: 32px;
    padding: 16px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    background-color: #ffffff;
  }
  </style>
  