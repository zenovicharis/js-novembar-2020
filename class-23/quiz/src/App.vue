<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Dashboard @submitConfig="getQuestionsForQuiz" v-if="isDashboardState"/>
  <Questions @submitScore="displayScore" :questions="bulkQuestions" v-if="isQuestionState"/>

</template>

<script>
import axios from 'axios'
import Dashboard from './components/Dashboard.vue'
import Questions from './components/Questions.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    Questions
  },
  computed: {
    isDashboardState () {
      return this.quizState == "dashboard"
    },
    isQuestionState () {
      return this.quizState == "questions"
    }
  },
  data() {
    return {
      quizState: "dashboard",
      bulkQuestions: []
    }
  },
  methods: {
    getQuestionsForQuiz (config) {
      console.log(config);
      var self = this

      axios.get(`https://opentdb.com/api.php?amount=${config.numberOfQuestions}&category=${config.category}`).then(response => {
        self.bulkQuestions = response.data.results
        this.quizState = "questions"
        console.log(self.bulkQuestions);
      })
    },
    displayScore(answers) {
      var list = answers.reduce((acc, e) => {
        if (e) {
          acc.correct++
        } else {
          acc.falseAns++
        }
        return acc
      }, { correct: 0, falseAns: 0});

      alert(`Correct: ${list.correct} False: ${list.falseAns}`);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
