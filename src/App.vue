<template lang="pug">
    .page
        Header
        main.page__main
            transition(name="fade")
                router-view
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/layout/Header';

export default {
    components: { Header },

    created() {
        this.FETCH_POSTS();
    },

    methods: {
        ...mapActions([
            'FETCH_POSTS',
        ]),
    },
};
</script>

<style lang="stylus">
@require '~normalize.css'

.fade-enter-active
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
    max-width 1100px
    min-width 320px
    margin 0 auto

    @media only screen and (max-width: 1024px)
        padding 0 10px

.page
    position relative

    &__main
        padding-top 70px
</style>
