<template>
    <button class="btn btn-primary" @click="share">Share on Facebook</button>
</template>

<script>
    import { eventBus } from './main';

    export default{
        methods: {
            share(){
                eventBus.$emit('articleWasShared', {
                    media: 'Facebook',
                });
                
                this.$emit('articleWasShared', {
                    media: 'Facebook',
                });
            }
        }
    }
</script>
