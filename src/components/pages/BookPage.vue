<template>
    <b-container>
        <template v-for="chunk in chunkedBooks">
            <b-row class="no-gutters" :key="chunk[0].title">
                <template v-for="book in chunk">
                    <b-col class="px-1 my-1" xs="12" sm="6" :key="book.title">
                        <article class="book-item p-3">
                            <book :book="book"></book>
                        </article>
                    </b-col>
                </template>
            </b-row>
        </template>
    </b-container>
</template>

<script>
    import books from 'json-loader!yaml-loader!../../assets/books.yml'
    import Book from "../molecules/Book"
    import _ from "lodash"

  export default {
    components: {Book},
    mounted() {
    },
    props     : {},
    data      : function () {
      return {
          books,
      }
    },
    computed  : {
        chunkedBooks() {
            return _.chunk(this.books, 2)
        }
    },
    methods   : {
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';

    .book-item {
        border: 1px solid $base-border-color;
    }
</style>
