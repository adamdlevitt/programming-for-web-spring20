Vue.component('brewery-locations', {
    template:`<div v-bind:class="['brewery']"> 
        <h3>{{brewery.name}}</h3>
        <div>{{brewery.brewery_type}}</div>
        <div>{{brewery.street}}</div>
        <div>{{brewery.phone}}</div>
        <div>{{brewery.website_url}}</div>
    </div>`,
    props: [`brewery`],
});
const vm = new Vue({
    el: "#breweryApp",
    data: {
        breweries: []
    },
    mounted () {
        axios
            .get('https://api.openbrewerydb.org/breweries?by_city=new_york')
            .then(response => {
                console.log('response', response);
                vm.breweries = response.data;
                console.log(vm.breweries);
            })
    }
});
