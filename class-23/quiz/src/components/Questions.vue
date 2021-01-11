<template>
    <div>
        <h1>Questions</h1>
        <div>
            <p v-html="questionsComputed[currentQuestion].question"></p>
            <ul style="list-style-type:none">
                <li v-for="(suggestion, key) in questionsComputed[currentQuestion].suggestedAnswers" :key="key">
                    <button @click="submitAnswer(questionsComputed[currentQuestion], suggestion)">{{suggestion}}</button>
                </li>
            </ul>
            <div>
                <button @click="currentQuestion--" :disabled="currentQuestion == 0">Back</button>
                <button @click="currentQuestion++" :disabled="questions.length == (currentQuestion + 1)">Next</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["questions"],
    name: "Questions",
    computed: {
        questionsComputed () {
            return this.questions.map(q => {
                q.suggestedAnswers = [
                    q['correct_answer'],
                    ...q['incorrect_answers']
                ].sort(() => Math.random() - 0.5);

                return q
            });
        }
    },
    data () {
        return {
            title: "Questions",
            currentQuestion: 0,
            listOfAnswers: []
        }
    },
    methods: {
        submitAnswer(obj, answer, i) {
            // this.listOfAnswers.push(obj['correct_answer'] == answer)
            if (obj['correct_answer'] == answer) {
                this.listOfAnswers.push(true)
            } else {
                this.listOfAnswers.push(false)
            }
            console.log("condition:", i == (this.questions.length - 1), "index", i, "length" ,this.questions.length)
            if (this.currentQuestion == (this.questions.length - 1)) {
                this.$emit("submitScore", this.listOfAnswers)
            } else {
                this.currentQuestion++
            }
        }
    },
}
</script>
<style>
    
</style>