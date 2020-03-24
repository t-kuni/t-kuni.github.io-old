<template>
    <div class="">
        <div>
            <router-link :to="{ name: 'product', params: { permalink: product.permalink }}">
                <span>📦</span>
                <span class="pl-2">{{product.title}}</span>
            </router-link>
        </div>

        <!-- タグ -->
        <div class="d-flex flex-wrap">
            <b-badge class="tag m-1" v-for="skill in product.skills">{{skill}}</b-badge>
        </div>

        <div>
            {{product.description}}
        </div>
    </div>
</template>

<script>
  import ProgressBar from "./ProgressBar";
  import {MUTATION} from "../../mutations";

  export default {
    components: {ProgressBar},
    mounted() {
        this.dispMoreRead = this.$refs.thoughsArea.scrollHeight > 75;
    },
    props     : {
        product: {
            type: Object,
        },
    },
    data      : function () {
      return {
          dispMoreRead: false,
          openingMore: false,
      }
    },
    computed  : {
        startAt() {
            if (this.book.start === null) {
                return '未読';
            }

            return this.localizeYearMonth(this.book.start) + ' ～';
        }
    },
    methods   : {
        localizeDate(dateStr) {
            const date = new Date(dateStr);
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            return y + '年' + m + '月' + d + '日';
        },
        localizeYearMonth(dateStr) {
            const date = new Date(dateStr);
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            return y + '年 ' + m + '月';
        },
        lf2br(str) {
            return str.replace(/\r?\n/g, '<br>');
        },
        onClickMoreRead() {
            this.openingMore = true;
        },
        onClickTag(tag) {
            this.$store.commit(MUTATION.SET_TAG_TO_BOOK_SEARCH_TEXT, {
                tag,
            })
        }
    }
  }
</script>

<style scoped lang="scss">
    .thoughs-mask {
        overflow: hidden;
        max-height: 75px;
    }

    .more-read-area {
        text-align: center;
    }
</style>
