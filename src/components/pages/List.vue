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
import { mapState } from 'vuex';
import Tile from '@/components/elements/Tile';

export default {
    components: { Tile },

    computed: {
        ...mapState({
            posts: state => state.news.posts.data,
        }),
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
