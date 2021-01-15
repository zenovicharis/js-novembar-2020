<template>
    <div>
        <h1>Questions</h1>
        <div v-if="questionsComputed.length > 0">
            <p v-html="questionsComputed[currentQuestion].question"></p>
            <ul style="list-style-type:none">
                <li v-for="(suggestion, key) in questionsComputed[currentQuestion].suggestedAnswers" :key="key">
                    <a @click="submitAnswer(questionsComputed[currentQuestion], suggestion)" v-html="suggestion"></a>
                </li>
            </ul>
            <div>
                <button @click="currentQuestion--" :disabled="currentQuestion == 0">Back</button>
                <button @click="currentQuestion++" :disabled="questionsComputed.length == (currentQuestion + 1)">Next</button>
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
            return this.localQuestions.map(q => {
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
            listOfAnswers: [],
            localQuestions: [],
        }
    },
    methods: {
        submitAnswer(obj, answer, i) {
            obj.correctAnswer = obj['correct_answer'] == answer
            obj.givenAnswer = answer
            this.listOfAnswers.push(obj);
            if(this.currentQuestion == (this.localQuestions.length - 1)) {
                this.currentQuestion = 0;
            }
            this.localQuestions.splice(i, 1);
            if(this.localQuestions.length == 0) {
                this.$emit("submitScore", this.listOfAnswers)
            }
        }
    },
    mounted () {
        this.localQuestions = [...this.questions];
    }
}
</script>
<style lang="scss">
    ul {
        display: flex;
        justify-content: space-around;
        li {
            display: inline-block;
            > a {
                display: inline-block;
                text-decoration: none;
                color: #fff;
                background: #000;
                border: 1px solid blue;
                padding: 1rem;
                cursor: pointer;
            }
        }
    }
</style>