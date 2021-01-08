const app = {
    template: `
        <h1>{{text}}</h1>
        <p>
            <label>New Todo</label>
            <input type="text" v-model="todo.text"/>
        </p>
        <p>
            <button @click="addNewTodo">Add new</button>
        </p>
        <p>
            <ul>
                <li v-for="(todo, i) in todos" :class="todo.crossed ? 'crossed': ''">
                    {{i + 1}} - {{todo.text}} 
                    <button @click="todo.crossed = !todo.crossed">{{ todo.crossed ? "Undone" : "Done"}}</button>
                    <button @click="deleteTodo(i)">Delete</button>
                </li>

                var tip = (totalBil / 100) * {{howWasYourService}}
                {{totalBill}} + {{tip}}  = {{total}}
                {{total / numberOfPersons}}
            </ul>
        </p>
    `,
    data () {
        return {
            text: "ToDo List!",
            todo: {text: "", crossed: false},
            todos: []
        }
    },
    methods: {
        addNewTodo() {
            this.todos.push(this.todo);
            this.todo = {text: "", crossed: false};
        },
        deleteTodo(i) {
            this.todos.splice(i, 1);
        },
    },
}

Vue.createApp(app).mount("#app");