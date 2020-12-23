const Counter = {
    data() {
        return {
            value: 0
        }
    },
    methods: {
        increase() {
            this.value++;
        },
        decrease() {
            this.value--;
        }
    }
}


Vue.createApp(Counter).mount("#app");

//

const Reverser = {
    data() {
        return {
            message: 'Civic',
            reversedMessage: ''
        }
    },
    methods: {
        reverseMessage() {
            this.reversedMessage = this.message.split("").reverse().join("");
        }
    }
}

Vue.createApp(Reverser).mount("#reverser");

//


const Looper = {
    data() {
        return {
            students: [
                "Haris",
                "Vahid",
                "Milos",
                "Alen",
                "Emir",
                "Zerin",
                "Ajla",
                "Marko"
            ],
            newStudent: ""
        }
    },
    methods: {
        addStd() {
            this.students.push(this.newStudent);
            this.newStudent = ""
        },
        removeStd(index) {
            this.students.splice(index, 1);
        }
    }
}

Vue.createApp(Looper).mount("#looper");


//

const Conditioner = {
    data() {
        return {
            isGreen: true,
        }
    }
}

Vue.createApp(Conditioner).mount("#conditioner");