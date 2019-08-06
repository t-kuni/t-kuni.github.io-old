<template>
    <div class="">
        <div>
            <a :href="book.link">
                <span>📙</span>
                <span class="pl-2">{{book.title}}</span>
            </a>
        </div>
        <div class="text-center mt-3" v-html="book.image"></div>
        <div class="d-flex justify-content-center mt-3">
            <progress-bar :value="book.progress"></progress-bar>
        </div>
        <div class="d-flex justify-content-center mt-3">
            <div>読書期間： {{localizeDate(book.start)}}～ {{book.spent}}時間</div>
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
    },
    methods   : {
        localizeDate(dateStr) {
            const date = new Date(dateStr);
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            return y + '年' + m + '月' + d + '日';
        },
        lf2br(str) {
            return str.replace(/\r?\n/g, '<br>');
        },
        onClickMoreRead() {
            this.openingMore = true;
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
