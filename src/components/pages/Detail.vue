<template lang="pug">
    section.detail
        .container
            .detail__content
                template(v-if="info")
                    h1.detail__title {{ info.title }}
                    .detail__text {{ info.text }}
                template(v-else)
                    h1.detail__title Статья не найдена.
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['processedPosts']),

        info() {
            return this.processedPosts[this.$route.params.post];
        },
    },
};
</script>

<style lang="stylus" scoped>
.detail

    &__content
        border 2px solid #0
        border-radius 5px
        padding 20px

    &__title
        font-family 'Roboto Slab', sans-serif
        font-size 24px
        margin 0 0 15px

</style>
