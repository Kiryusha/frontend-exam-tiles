<template lang="pug">
    article.tile(
        :class="{'_double': info.type === 'double'}"
        @click="handleClick"
    )
        .tile__background(:style="bgImage")
        .tile__content
            h5.tile__title {{ info.title }}
            .tile__description {{ info.description }}
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        info: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            bgImage: '',
        }
    },

    computed: {

    },

    created() {
        const randomWidth = Math.floor((Math.random() * 4) + 5);
        this.bgImage = `background-image: url("http://placekitten.com/${randomWidth}00/500");`;
    },

    methods: {
        ...mapMutations(['SET_ACTIVE_POST']),

        handleClick() {
            this.$router.push(`/posts/${this.info.id}/`);
        }
    }
};
</script>

<style lang="stylus" scoped>
.tile
    height 220px
    margin 0 10px 10px 0
    border 2px solid #0
    border-radius 5px
    width calc(33.3% - 10px)
    cursor pointer
    position relative
    overflow hidden

    &__background
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-size cover
        background-position center center
        background-repeat no-repeat
        transition .4s

    &__content
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        padding 20px
        background linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)
        overflow hidden

    &__title
        font-family 'Roboto Slab', sans-serif
        font-size 16px
        font-weight bold
        margin 0 0 10px
        color #f

    &__description
        color #f

    &:hover &__background
        transform scale(1.1)

    &._double
        width calc(66.6% - 10px)

    @media only screen and (max-width: 1024px)
        width calc(50% - 10px)

        &._double
            width 100%

    @media only screen and (max-width: 480px)
        width 100%
</style>
