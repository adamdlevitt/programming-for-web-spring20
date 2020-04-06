Vue.component('my-component', {
    props: ['title', 'author', 'publisher', 'genre', 'summary', 'collected'],
    template: `<div>
    <div class="cell comic-title">{{title}}</div>
    <div class="cell comic-author">{{author}}</div>
    <div class="cell comic-publisher">{{publisher}}</div>
    <div class="cell comic-genre">{{genre}}</div>
    <div class="cell comic-summary">{{summary}}</div>
    <div class="cell collected">{{collected}}</div>
    </div>`
});

var vm = new Vue({
    el: '#app',
    data: {
        newComicObj: {
            title: '',
            author: '',
            publisher: '',
            genre: '',
            summary: '',
            collected: false
        },
        comics: [
            {
            title: "Cankor",
            author: "Matthew Allison",
            publisher: "AdHouse Books",
            genre: "Alternative/Psychedelic",
            summary: "There is drama, action, heroics and adversarial confrontations, - Cankor breaks rules, sets new standards and stays weirdly fun through and through.",
            collected: false
            },
            {
            title: "COPRA",
            author: "Michel Fiffe",
            publisher: "Image comics",
            genre: "Action/Espionage",
            summary: "They are ugly. They are mean. But up until today, they have always been loyal. So when one of their own betrays them, COPRA has no choice but to turn their nightmarish skills back on everyone who ever even looked at them funny.",
            collected: true
            },
            {
            title: "Zerosis Deathscape",
            author: "Simmons & Bayer",
            publisher: "All-Time Comics",
            genre: "Outlaw",
            summary: "Smashing together all the characters established in Season 1 of All-Time Comics, space and time meet anti-time and alternate-space, pushing them into new realms of inter-dimensional ferocity, and excitement!",
            collected: true
            },
            {
            title: "Saga",
            author: "Brian K. Vaughan & Fiona Staples",
            publisher: "Image Comics",
            genre: "Epic Space Opera/Fantasy",
            summary: "Husband and wife, Alana and Marko, from long-warring extraterrestrial races, flee authorities from both sides of a galactic war as they struggle to care for their daughter, Hazel.",
            collected: true
            },
            {
            title: "Immortal Hulk",
            author: "Joe Bennett & Al Ewing",
            publisher: "Marvel",
            genre: "Superhero/Horror",
            summary: "The drastic shifts in the Hulk character are terrifying elements of horror, religious symbolism, character pacing tangential to upheavals, almost.  Having said that, The Immortal Hulk performs amazing at each level. Forget the angry giant that punched into things, The Immortal Hulk is a fantastic horror comic that may have given a new life to an otherwise vanilla character.",
            collected: false
            }
        ]
    },
    methods: {
        submitHandler: () => {
            console.log('submitted', vm.comics);
            vm.comics = vm.comics.concat(vm.newComicObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newComicObj = {
                comic: '',
                author: '',
                publisher: '',
                genre: '',
                summary: '',
                collected: false
            };
        },
        }
    }
);