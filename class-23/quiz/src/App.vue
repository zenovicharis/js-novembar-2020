<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Dashboard @submitConfig="getQuestionsForQuiz" v-if="isDashboardState"/>
  <Questions @submitScore="displayScore" :questions="bulkQuestions" v-if="isQuestionState"/>
  <Score :result="result" v-if="isScoreState" @newGame="setNewGame"/>


</template>

<script>
import axios from 'axios'
import Dashboard from './components/Dashboard.vue'
import Questions from './components/Questions.vue'
import Score from './components/Score.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    Questions,
    Score
  },
  computed: {
    isDashboardState () {
      return this.quizState == "dashboard"
    },
    isQuestionState () {
      return this.quizState == "questions"
    },
    isScoreState () {
      return this.quizState == "score"
    }
  },
  data() {
    return {
      quizState: "dashboard",
      bulkQuestions: [],
      result: []
    }
  },
  methods: {
    getQuestionsForQuiz (config) {
      var self = this

      axios.get(`https://opentdb.com/api.php?amount=${config.numberOfQuestions}&category=${config.category}`)
        .then(response => {
          self.bulkQuestions = response.data.results
          this.quizState = "questions"
        })
    },
    displayScore(answers) {
      this.result = [...answers];
      this.quizState = "score";
    },
    setNewGame () {
      this.quizState = "dashboard";
      this.result = []
      this.bulkQuestions = []
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
