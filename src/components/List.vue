<template lang="html">
    <div class="list">

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            posts: state => state.news.posts,
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
}
</script>

<style lang="css" scoped>
</style>
