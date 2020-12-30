<template>
    <div>
        <table>
            <th>Full Name</th>
            <th>Birth Place</th>
            <th>Birthdate</th>

            <tr v-for="(student, i) in students" :key="i">
                <td>{{student.fullName}}</td>
                <td>{{student.birthPlace}}</td>
                <td>{{student.birthDate}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: "Table",
    props: {
        students: []
    },
    data() {

    },
    methods: {
        
    },
}
</script>
<style lang="">
    
</style>