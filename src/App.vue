<template lang="pug">
    .page
        Header
        transition(name="fade")
            router-view
</template>

<script>
import Header from '@/components/layout/Header';

export default {
    components: { Header },
};
</script>

<style lang="stylus" scoped>
@require '~normalize.css'

.fade-enter-active,
.fade-leave-active
    transition opacity .2s

.fade-enter,
.fade-leave-to
    opacity 0

*
    box-sizing border-box
</style>
