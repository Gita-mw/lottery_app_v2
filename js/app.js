new Vue({
    el: "#lottery",
    data: {
        isShown: false,
        randomNumber: '',
        max: 100
    },
    methods: {
        displayNumber: function() {
            this.randomNumber = Math.floor(Math.random() * this.max + 1);
            this.isShown = true;
        }
    }
});