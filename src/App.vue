<template lang="pug">
    .page
        Header
        main.page__main
            transition(name="fade")
                router-view
</template>

<script>
import Header from '@/components/layout/Header';

export default {
    components: { Header },
};
</script>

<style lang="stylus">
@require '~normalize.css'

.fade-enter-active,
.fade-leave-active
    transition opacity .2s

.fade-enter,
.fade-leave-to
    opacity 0

*
    box-sizing border-box

html,
body,
.page
    font-family 'Open Sans', sans-serif
    color #3
    height 100%

.container
    max-width 1280px
    margin 0 auto

.page
    position relative

    &__main
        padding-top 70px
</style>
