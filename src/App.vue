<template lang="pug">
    .page
        .page__darkening(:class="{'_active': loadingQueue.length}")
        Header
        main.page__main
            transition(name="fade")
                router-view
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Header from '@/components/layout/Header';

export default {
    components: { Header },

    computed: {
        ...mapState({
            loadingQueue: state => state.loadingQueue,
        }),
    },

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

    &__darkening
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 99999
        background-color rgba(0,0,0,.15)
        display flex
        align-items center
        justify-content center
        opacity 0
        transition opacity .33s
        visibility hidden

        &._active
            opacity 1
            visibility visible
</style>
