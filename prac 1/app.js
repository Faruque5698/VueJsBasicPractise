// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');
//
// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listElement = document.createElement('li');
//     listElement.textContent = enteredValue;
//     listEl.appendChild(listElement);
// }
//
// buttonEl.addEventListener('click',addGoal);


Vue.createApp({
data() {
    return {
        goals:[],
        enteredValue: ''
    };
},

methods: {
    addGoal(){
        this.goals.push(this.enteredValue);
    }
},

}).mount('#app');