<template lang="pug">
    section.not-found
        .container
            .not-found__content
                h1.not-found__title Такой страницы не существует.
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped>
.not-found

    &__content
        border 2px solid #0
        border-radius 5px
        padding 20px

    &__title
        font-family 'Roboto Slab', sans-serif
        font-size 24px
        margin 0
</style>
