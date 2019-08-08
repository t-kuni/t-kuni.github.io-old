<template>
    <div class="">
        <div>
            <a :href="book.link">
                <span>📙</span>
                <span class="pl-2">{{book.title}}</span>
            </a>
        </div>

        <!-- タグ -->
        <div class="d-flex">
            <b-badge class="tag m-1" v-for="tag in book.tags" @click="onClickTag(tag)">{{tag}}</b-badge>
        </div>

        <!-- 画像 -->
        <div class="text-center mt-3" v-html="book.image"></div>

        <!-- 進捗 -->
        <div class="progress-area d-flex justify-content-center align-items-center mt-3">
            <span>進捗</span>
            <progress-bar class="ml-2" :value="book.progress"></progress-bar>
        </div>

        <!-- 読書開始 -->
        <div class="d-flex justify-content-center mt-3">
            <div>読書開始： {{startAt}}</div>
        </div>
        <div class="thoughs-mask mt-3" :style="{maxHeight: openingMore ? 'none' : null}">
            <p ref="thoughsArea" v-html="lf2br(book.thought)"></p>
        </div>
        <div class="more-read-area mt-3" v-if="dispMoreRead && !openingMore">
            <a href="javascript:void(0);" @click="onClickMoreRead">もっと見る</a>
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
        book: {
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
    .tag {
        cursor: pointer;
    }

    .thoughs-mask {
        overflow: hidden;
        max-height: 75px;
    }

    .more-read-area {
        text-align: center;
    }
</style>
