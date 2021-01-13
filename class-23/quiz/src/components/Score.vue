<template>
    <div>
        <h1>Score</h1>
        <h2>Correct Answers: {{correctAnswers}}</h2>
        <h2>Wrong Answers: {{wrongAnswers}}</h2>
        <h4><button @click="newGame">New Game</button></h4>
        <table border="1">
            <th>Question</th>
            <th>Our Answer</th>
            <th>Correct Answer</th>
            <th>Icon</th>
            <tr v-for="(answer, i) in result" :key="i">
                <td>{{answer.question}}</td>
                <td>{{answer.givenAnswer}}</td>
                <td>{{answer['correct_answer']}}</td>
                <td>
                    <img class="icons" src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_1280.png" alt="" v-if="answer.correctAnswer">
                    <img class="icons" src="https://newcastlebeach.org/images/wrong-png.png" alt="" v-else>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: "Score",
    props: ["result"],
    computed: {
        correctAnswers () {
            return this.result.filter(a => a.correctAnswer).length
        },
        wrongAnswers () {
            return this.result.filter(a => !a.correctAnswer).length
        }
    },
    data() {
        return {

        }
    },
    methods: {
        newGame () {
            this.$emit("newGame");
        }
    },
}
</script>
<style>
    .icons {
        width: 30px;
    }
</style>