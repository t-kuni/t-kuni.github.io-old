<template>
    <canvas class="canvas" ref="canvas"></canvas>
</template>

<script>
    export default {
        mounted() {
            const canvas          = this.$refs.canvas;
            const context         = this.context = canvas.getContext('2d');
            context.canvas.width  = this.width = canvas.clientWidth;
            context.canvas.height = this.height = canvas.clientHeight;
            this.tick = 0;
            window.requestAnimationFrame(ts => this.loop(ts));
        },
        methods: {
            loop(timestamp) {
                const context = this.context;

                context.clearRect(0, 0, this.width, this.height);

                const anim = x => {
                    return Math.sin(Math.PI * x - Math.PI * this.tick / 100)
                };

                context.beginPath();
                context.strokeStyle = "#051560";
                context.lineWidth = 10;
                const res           = 60;
                for (var rad = 0; rad <= Math.PI; rad += Math.PI / res) {
                    const vx       = -Math.cos(rad);
                    const vy       = anim(vx);
                    const [px, py] = this.projection(vx, vy);

                    if (rad === 0) {
                        context.moveTo(px, py);
                    } else {
                        context.lineTo(px, py);
                    }
                }
                context.stroke();

                this.tick++;
                window.requestAnimationFrame(ts => this.loop(ts));
            },
            projection(x, y) {
                return [(x + 1) / 2 * this.width, (y + 1) / 2 * this.height];
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';

    .canvas {
        background-color: #132689;
    }
</style>
