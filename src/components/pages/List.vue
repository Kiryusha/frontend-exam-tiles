<template lang="pug">
    section.list
        .container
            .list__content
                Tile(
                    v-for="post, index in posts"
                    :key="index"
                    :info="post"
                )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Tile from '@/components/elements/Tile';

export default {
    components: { Tile },

    computed: {
        ...mapState({
            posts: state => state.news.posts.data,
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

<style lang="stylus" scoped>
.list
    overflow hidden

    &__content
        margin 0 -10px -10px 0
        display flex
        flex-wrap wrap
</style>
