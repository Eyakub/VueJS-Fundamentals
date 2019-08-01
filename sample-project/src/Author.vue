<template>
    <small>
        Written by {{ author.firstName }} {{ author.lastName }}
    </small>
</template>


<script>
    import { eventBus } from './main';
    export default{
        // props:['firstName', 'lastName'],
        props: {
            author: {
                type: Object,
                required: true,
            },
        },
        created(){
            eventBus.$on('articleWasShared', (data) => {
                alert('Someone shared an article on ' + data.media + "!")
            })
        }
    }
</script>
