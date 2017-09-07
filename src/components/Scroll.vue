<template lang="html">
  <div class="yo-scroll" :style="{'bottom': bottom + 'px','top' : top + 'px'}"
       :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
       @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined"
       >
    <section class="inner" :style="{ transform: 'translate3d(0, ' + transateTop + 'px, 0)' }">
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <div class="down-tip">下拉更新</div>
          <div class="up-tip">松开更新</div>
          <div class="refresh-tip"><i class="load-icon"></i>更新中</div>
        </slot>
      </header>
      <slot></slot>
      <footer class="load-more" v-if="onInfinite" ref="bottomTip">
        <slot name="load-more">
          <span class="loading-tip" v-if="infiniteLoading && !isNoMore"><i class="load-icon"></i>加载中……</span>
          <span class="noLoad-tip" v-if="!infiniteLoading && isNoMore">只有那么多了，别看了……</span>
        </slot>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      offset: {
        type: Number,
        default: 40
      },
      bottom: {
        type: Number,
        default: 0
      },
      top:{
        type: Number,
        default: 0
      },
      enableInfinite: {
        type: Boolean,
        default: true
      },
      enableRefresh: {
        type: Boolean,
        default: true
      },
      onRefresh: {
        type: Function,
        default: undefined,
        required: false
      },
      onInfinite: {
        type: Function,
        default: undefined,
        require: false
      }
    },
    data() {
      return {
        transateTop: 0,
        state: 0,
        startY: 0,
        touching: false,
        infiniteLoading: false,
        isNoMore:false
      }
    },
    methods: {
      touchStart(e) {
        this.startY = e.targetTouches[0].pageY
        this.startScroll = this.$el.scrollTop || 0
        this.touching = true
      },
      touchMove(e) {
        if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
          return
        }
        let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
        if (diff > 0) e.preventDefault()
        this.transateTop = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

        if (this.state === 2) { // in refreshing
          return
        }
        if (this.transateTop >= this.offset) {
          this.state = 1
        } else {
          this.state = 0
        }
      },
      touchEnd(e) {
        if (!this.enableRefresh) return
        this.touching = false
        if (this.state === 2) { // in refreshing
          this.state = 2
          this.transateTop = this.offset
          return
        }
        if (this.transateTop >= this.offset) { // do refresh
          this.refresh()
        } else { // cancel refresh
          this.state = 0
          this.transateTop = 0
        }
      },
      refresh() {
        this.state = 2
        this.transateTop = this.offset
        this.onRefresh(this.refreshDone)
      },
      refreshDone() {
        this.state = 0
        this.transateTop = 0
      },
      infinite() {
        this.infiniteLoading = true
        this.onInfinite(this.infiniteDone)
      },
      infiniteDone(type) {
        this.infiniteLoading = false
        if(type =='nomore'){
          this.isNoMore = true;
        }
      },
      onScroll(e) {
        if (!this.enableInfinite || this.infiniteLoading || this.isNoMore) {
            return
        }
        const bottomTip = this.$refs.bottomTip
        const windowHeight = window.screen.height
        const top = bottomTip.getBoundingClientRect().top
        if (top && top < windowHeight) {
            this.infinite();
        }
      }
    },
    mounted: function () {

    }
  }
</script>
<style scoped>
  .yo-scroll {
    position: absolute;
    right: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .yo-scroll .inner {
    position: absolute;
    top: -2rem;
    width: 100%;
    transition-duration: 300ms;
  }
  .yo-scroll .pull-refresh {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yo-scroll.touch .inner {
    transition-duration: 0ms;
  }
  .yo-scroll.down .down-tip {
    display: block;
  }
  .yo-scroll.up .up-tip {
    display: block;
  }
  .yo-scroll.refresh .refresh-tip {
    display: block;
  }
  .yo-scroll .down-tip,
  .yo-scroll .refresh-tip,
  .yo-scroll .up-tip {
    display: none;
  }
  .refresh-tip{ color: #999; font-size: 16px;}
  .yo-scroll .load-more {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .load-icon{
    display: inline-block;
    vertical-align: middle;
    -moz-animation:rotate 1s infinite linear;
    -webkit-animation:rotate 1s infinite linear;
    animation:rotate 1s infinite linear;
    width: 20px;
    height: 20px;
    margin-right: 5px;
/*     background: url("../../assets/img/loading.png") no-repeat center center; */
    background-size: 100% 100%;
  }
  @-moz-keyframes rotate{
    0%{
      -moz-transform:rotate(0deg);
    }
    100%{
      -moz-transform:rotate(360deg);
    }
  }
  @-webkit-keyframes rotate{
    0%{
      -webkit-transform:rotate(0deg);
    }
    100%{
      -webkit-transform:rotate(360deg);
    }
  }
  @keyframes rotate{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }
</style>
