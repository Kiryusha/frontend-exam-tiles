<template lang="pug">
    header.header
        .container
            .header__content
                nav.header__menu
                    router-link.header__link(:to="'/'") Главная
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped>
.header
    position fixed
    top 0
    left 0
    right 0

    &__content
        height 60px
        border 2px solid #0
        border-radius 5px
        display flex
        align-items center
        padding 0 20px

    &__link
        font-family 'Roboto Slab', sans-serif
        text-decoration none
        font-size 20px
        font-weight bold
        color #3
</style>
