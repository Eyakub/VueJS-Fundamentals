<template>
    <small>
        Written by {{ author.firstName }} {{ author.lastName }}
    </small>
</template>


<script>
    export default{
        data(){
            return {
                author: {
                    firstName: 'Eyakub',
                    lastName: 'Sorkar',
                },
            };
        }
    }
</script>
