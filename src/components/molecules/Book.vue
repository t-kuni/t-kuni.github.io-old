<template>
    <div class="">
        <div>
            <a :href="book.link">{{book.title}}</a>
        </div>
        <div v-html="book.image"></div>
    </div>
</template>

<script>
  export default {
    components: {},
    mounted() {
    },
    props     : {
        book: {
            type: Array,
        },
    },
    data      : function () {
      return {
      }
    },
    computed  : {
    },
    methods   : {
    }
  }
</script>

<style scoped lang="scss">
</style>
