<template>
    <small>
        Written by {{ author.firstName }} {{ author.lastName }}
    </small>
</template>


<script>
    export default{
        // props:['firstName', 'lastName'],
        props: ['author']
    }
</script>
