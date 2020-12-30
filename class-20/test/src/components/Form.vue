<template>
    <div>
        <div>
            <Table :students="students"/>
        </div>
        <p>
            <label for="">Full Name</label>
            <input type="text" v-model="student.fullName">
        </p>
        <p>
            <label for="">Birth Place</label>
            <input type="text" v-model="student.birthPlace">
        </p>
        <p>
            <label for="">Birthdate</label>
            <input type="text" v-model="student.birthDate">
        </p>
        <p>
            <button @click="add">Add Student</button>
        </p>
    </div>
</template>
<script>
import Table from "./Table"


export default {
    name: "Form",
    components: {
        Table
    },
    data() {
        return {
            student: {
                fullName: "",
                birthPlace: "",
                birthDate: "",
            },
            students: []
        }
    },
    methods: {
        add() {
            var std = Object.assign({}, this.student);
            this.students.push(std);
        }
    },
}
</script>
<style>
    
</style>