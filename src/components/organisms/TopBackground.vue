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
            this.tick             = 0;
            window.requestAnimationFrame(ts => this.loop(ts));
        },
        methods: {
            loop(timestamp) {
                const context = this.context;

                context.clearRect(0, 0, this.width, this.height);

                const lineFactory = (waveHeight, waveWidth, angle, shiftX, shiftY) => {
                    return x => {
                        x += shiftX;
                        const y = this.angle(angle) * x + Math.sin(Math.PI * x * this.waveWidth(waveWidth)) / this.waveHeight(waveHeight)
                        return y + shiftY;
                    };
                };

                const waveHeight = 0.1 + this.animParam(0.0, 0.1, 400);
                const waveWidth  = 0.5 + this.animParam(0.1, 0.2, 800);
                const angle      = -15 + this.animParam(-15, 0, 500);
                const shiftX     = this.animParam(0.0, 1, 2000);
                const shiftY     = 0 + this.animParam(-0.1, 0.1, 300);
                const line1      = lineFactory(waveHeight, waveWidth, angle, shiftX, shiftY);

                const angle2  = 15 + this.animParam(0, 15, 500);
                const shiftY2 = 0 + this.animParam(-0.1, 0.1, 300);
                const line2   = lineFactory(waveHeight, waveWidth, angle2, shiftX, shiftY2);

                const width      = 10;
                const resolution = 60 + this.animParam(-60, 0, 500);
                this.draw2Line(line1, line2, width, resolution, (x1, y1, x2, y2) => {
                    const gradient = context.createLinearGradient(0, y1, 0, y2)
                    gradient.addColorStop(0.0, '#4556AD');
                    gradient.addColorStop(0.8, '#132689');
                    return gradient;
                });

                this.tick++;
                window.requestAnimationFrame(ts => this.loop(ts));
            },
            /**
             * ２本のラインを描画してポリゴンにし、グラデーションを掛ける。
             */
            draw2Line(line1, line2, width, resolution, gradientMaker) {
                const context = this.context;

                var x1 = Number.MAX_SAFE_INTEGER;
                var y1 = Number.MAX_SAFE_INTEGER;
                var x2 = 0;
                var y2 = 0;

                context.beginPath();
                context.lineWidth = 1;
                for (var rad = 0; rad < Math.PI; rad += Math.PI / resolution) {
                    const vx       = -Math.cos(rad);
                    const vy       = line1(vx);
                    const [px, py] = this.projection(vx, vy);

                    if (rad === 0) {
                        context.moveTo(px, py);
                    } else {
                        context.lineTo(px, py);
                    }

                    x1 = Math.min(x1, px);
                    y1 = Math.min(y1, py);
                    x2 = Math.max(x2, px);
                    y2 = Math.max(y2, py);
                }

                // 最後の１点
                var vx       = -Math.cos(Math.PI);
                var vy       = line1(vx);
                var [px, py] = this.projection(vx, vy);
                context.lineTo(px, py);

                x1 = Math.min(x1, px);
                y1 = Math.min(y1, py);
                x2 = Math.max(x2, px);
                y2 = Math.max(y2, py);

                for (rad = Math.PI; rad > 0; rad -= Math.PI / resolution) {
                    const vx       = -Math.cos(rad);
                    const vy       = line2(vx);
                    const [px, py] = this.projection(vx, vy);

                    context.lineTo(px, py);

                    x1 = Math.min(x1, px);
                    y1 = Math.min(y1, py);
                    x2 = Math.max(x2, px);
                    y2 = Math.max(y2, py);
                }

                // 最後の１点
                vx       = -Math.cos(0);
                vy       = line2(vx);
                [px, py] = this.projection(vx, vy);
                context.lineTo(px, py);

                x1 = Math.min(x1, px);
                y1 = Math.min(y1, py);
                x2 = Math.max(x2, px);
                y2 = Math.max(y2, py);

                const gradient = gradientMaker(x1, y1, x2, y2);
                context.fillStyle = gradient;
                context.strokeStyle = gradient;

                context.closePath();
                context.fill();

                context.stroke();
            },
            drawLine(line, width, style, resolution) {
                const context = this.context;
                context.beginPath();
                context.strokeStyle = style;
                context.lineWidth   = 10;
                for (var rad = 0; rad <= Math.PI; rad += Math.PI / resolution) {
                    const vx       = -Math.cos(rad);
                    const vy       = line(vx);
                    const [px, py] = this.projection(vx, vy);

                    if (rad === 0) {
                        context.moveTo(px, py);
                    } else {
                        context.lineTo(px, py);
                    }
                }

                // 最後の１点
                const vx       = -Math.cos(Math.PI);
                const vy       = line(vx);
                const [px, py] = this.projection(vx, vy);
                context.lineTo(px, py);

                context.stroke();
            },
            projection(x, y) {
                return [(x + 1) / 2 * this.width, (y + 1) / 2 * this.height];
            },
            /**
             * 右から時計回り
             * @var angle 0〜360の角度 厳密にその角度になるわけではない。
             */
            angle(angle) {
                // 0    -> 水平 (0)
                // 45   -> ＼  (1)
                // 90   -> | (100)
                // -45 -> ／ (-1)
                // -90 -> | (-100)

                const sign = angle > 0 ? 1 : -1;
                return sign * (1 / 2025) * (angle ** 2);
            },
            /**
             * 1 -> 1
             * 0.5 -> 2
             * 0.25 -> 4
             * 0.1 ->
             * 0 -> ∞
             * @param height 0~1の実数
             */
            waveHeight(height) {
                if (height === 0)
                    return Number.MAX_SAFE_INTEGER;
                else
                    return 1 / height;
            },
            waveWidth(width) {
                if (width === 0)
                    return Number.MAX_SAFE_INTEGER;
                else
                    return 1 / width;
            },
            /**
             * tickに応じた0〜1の実数を返す
             * @param period 周期
             * @returns {number}
             */
            tickWave(period) {
                return (Math.sin(Math.PI * 2 * (this.tick % (period + 1)) / period) + 1) / 2;
            },
            animParam(min, max, period) {
                const diff = max - min;
                return min + diff * this.tickWave(period);
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';

    .canvas {
        background-color: #132689;
    }
</style>
