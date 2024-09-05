<template>
  <div class="resume">
    <!-- 个人信息 -->
    <section class="personal-info">
      <h1>{{ data.personalInfo.name }} <p>{{ data.personalInfo.sex }}</p></h1>
      <p>{{ data.personalInfo.title }}</p>
      <p>{{ data.personalInfo.address }}</p>
      <p>{{ data.personalInfo.email }} | {{ data.personalInfo.github }} | {{ data.personalInfo.phone }}</p>
    </section>

    <!-- 教育背景 -->
    <section class="education">
      <h2>教育背景</h2>
      <ul>
        <li v-for="edu in data.education" :key="edu.id">
          <h3>{{ edu.degree }} - {{ edu.institution }}</h3>
          <p>{{ edu.startDate }} - {{ edu.endDate }}</p>
          <p>{{ edu.major }}</p>
        </li>
      </ul>
    </section>

    <!-- 工作经验 -->
    <section class="work-experience">
      <h2>工作经验</h2>
      <ul>
        <li v-for="job in data.workExperience" :key="job.id">
          <h3>{{ job.location }} - {{ job.company }}</h3>
          <p>{{ job.start_date }} - {{ job.end_date }}</p>
          <p v-for="duty in job.responsibilities">
            <span>{{ duty }}</span>
          </p>
        </li>
      </ul>
    </section>
    <section class="work-experience">
      <h2>项目经验</h2>
      <ul>
        <li v-for="item in data.projects" :key="item.id">
          <h3>{{ item.title }} | {{ item.role }}</h3>
          <span v-for="duty in item.technologies">
            <span class="tags">{{ duty }}</span>
          </span>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </section>

    <!-- 技能 -->
    <section class="skills">
      <h2>技能</h2>
      <span v-for="skill in data.skills" :key="skill.id">
            <span class="tags">{{ skill }}</span>
      </span>
    </section>
  </div>
</template>

<script>
import jsonData from '@/assets/data/resumeInfo.json'; // 导入简历信息
export default {
  name: 'Resume',
  data() {
    return {
      data: jsonData
    };
  },

}
</script>

<style scoped>
.resume {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.personal-info h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.personal-info p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.education,
.work-experience,
.skills {
  margin-top: 2rem;
}

.education h2,
.work-experience h2,
.skills h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tags {
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background-color: #e0e0e0;
  border-radius: 4px;
}
.skills .tags {
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  margin: 5px;
  background-color: #0b6b8b;
  border-radius: 4px;
}

.education ul,
.work-experience ul,
.skills ul {
  list-style-type: none;
  padding: 0;
}

.education li,
.work-experience li {
  margin-bottom: 1rem;
}

.education h3,
.work-experience h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.education p,
.work-experience p {
  font-size: 1rem;
  color: #555;
}

.skills li {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.skills li::before {
  content: '•';
  color: #007BFF;
  margin-right: 0.5rem;
}
</style>