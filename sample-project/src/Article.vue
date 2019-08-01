<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>Published on {{ published | moment }}</p>
        <p class="lead">{{ content }}</p>
        <!-- <app-author :firstName='author.firstName' 
                    :lastName="author.lastName">
        </app-author> -->
        <app-author :author="author"></app-author>
    </div>
</template>



<script>
    import moment from 'moment';
    import Author from './Author.vue';

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
            };
        },

        filters: {
            moment: function(value){
                return moment(value).format('MMMM Do');
            }
        },

        components: {
            appAuthor: Author,
        }
    }
</script>

<style scoped>
    * {
        color: red;
        font-style: italic;
    }
</style>