<template lang="pug">
    header.header
        .container
            .header__content
                nav.header__menu
                    router-link.header__item(
                        v-if="isDetail"
                        :to="'/'"
                    ) Назад на главную
                    .header__item(v-else) Новости
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['processedPosts']),

        isDetail() {
            return this.processedPosts.hasOwnProperty(this.$route.params.post);
        },
    },
};
</script>

<style lang="stylus" scoped>
.header
    position fixed
    top 0
    left 0
    right 0
    z-index 10

    &__content
        height 60px
        border 2px solid #0
        border-radius 5px
        display flex
        align-items center
        padding 0 20px
        background #f

    &__item
        font-family 'Roboto Slab', sans-serif
        text-decoration none
        font-size 20px
        font-weight bold
        color #3
</style>
