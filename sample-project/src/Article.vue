<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>Published on {{ published | moment }}</p>
        <p> Shares: {{ shares}} </p>
        <p class="lead">{{ content }}</p>
        <!-- <app-author :firstName='author.firstName' 
                    :lastName="author.lastName">
        </app-author> -->
        <app-author :author="author"></app-author>

        <br><br>
        <!-- this $data shares data property from script -->
        <app-social-sharing :article="$data" @articleWasShared="shared('hello', $event)"></app-social-sharing>
    </div>
</template>



<script>
    import moment from 'moment';
    import Author from './Author.vue';
    import Social from './Social.vue';

    export default{
        data(){
            return {
                title: '10 reason why vuejs is awesome',
                published: new Date(),
                content: 'Hi there is article content',
                author: {
                    firstName: 'Eyakub',
                    lastName: 'Sorkar',
                },
                shares: 0,
            };
        },

        filters: {
            moment: function(value){
                return moment(value).format('MMMM Do');
            }
        },

        methods: {
            shared: function(message, event){
                this.shares++;
                console.log(message);
                console.log(event);
            }
        },

        components: {
            appAuthor: Author,
            appSocialSharing: Social,
        },

    }
</script>

<style scoped>
    /* * {
        color: red;
        font-style: italic;
    } */
</style>