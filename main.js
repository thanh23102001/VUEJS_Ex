var vueInstance = new Vue (
    {
        el: '#app',
        data:{
            title:'Hi',
            url:'https://www.youtube.com/',
            target: '_blank',
            check: true ,
            price: 10000   
        },
        methods:{
            say: function(text){
                return 'Hello ' + text;
            },
            formatPrice(){
                var number = this.price;
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
            }
        }
    }
);
console.log(vueInstance);

