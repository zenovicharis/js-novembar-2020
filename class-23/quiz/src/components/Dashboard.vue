<template>
    <div>
        <h1>{{title}}</h1>
        <div>
            <p>Enter number of questions you wish:</p>
            <input type="number" v-model="config.numberOfQuestions">
        </div>
        <div>
            <p>Please pick category that you want:</p>
            <select v-model="config.category">
                <option value="11">Entertainment: Film</option>
                <option value="10">Entertainment: Books</option>
                <option value="9">General Knowledge</option>
            </select>
        </div>
        <div>
            <button @click="submitConfig">Go To Quiz</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Dashboard",
    data () {
        return {
            title: "Dashboard Title",
            config: {
                numberOfQuestions: 0,
                category: ""
            }
        }
    },
    methods: {
        submitConfig () {
            // Validation Needed
            if (this.config.category != "" && this.config.numberOfQuestions > 0) {
                this.$emit("submitConfig", this.config);
            } else {
                alert("Please enter data in form");
            }
        }
    },
}
</script>
<style>
    
</style>