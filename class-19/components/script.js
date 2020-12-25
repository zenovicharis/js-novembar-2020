const TodoItem = {
    template: `
        <li>{{value}}</li>
    `,
    props: ['value'],
    data() {
        return {

        }
    },
    methods: {
        changeMethod () {
            // this.$parent.$parent.items
        }
    }
}


const TodoList = {
    components: {
        "todo-item": TodoItem,
    },
    template: `
        <h1>This is TODO LIST</h1>
        <ul>
            <todo-item v-for="item in items" :value="item" @changedValue="changeElementAtIndex"></todo-item>
        </ul>
        {{items}}
        
        <neka-komponenta></neka-komponenta>
    `,
    props: ["items"],
    data() {
        return {

        }
    },
    methods: {
        changeElementAtIndex() {

        }
    }
}



const RootApp = Vue.createApp({
    components: {
        "todo-list": TodoList,
        // "todo-item": TodoItem
    },
    data() {
        return {
            todoList: [
                "1",
                "2",
                "3",
                "4"
            ]
        }
    }
});



// RootApp.component("todo-list", TodoList)

RootApp.mount("#app");