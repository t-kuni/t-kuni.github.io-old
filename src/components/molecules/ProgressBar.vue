<template>
    <div class="board">
        <div class="bar" :style="{width: value + '%'}" :class="{full: value == 100}">
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    mounted() {
    },
    props     : {
        value: {
            type: Number,
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
    @import '../../scss/variables';

    $height: 20px;

    .board {
        width: 200px;
        height: $height;
        border-radius: $height / 2;
        border: 1px solid $base-border-color;
    }

    .bar {
        height: 100%;
        border-radius: $height / 2 0 0 $height / 2;
        background-color: #00B370;

        &.full {
            border-radius: $height / 2;
        }
    }
</style>
