<template>
  <div class="recommend" ref="recommend">
    <!-- <scroll ref="scroll" class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item,index) in recommends" :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li>
              <div class="icon">
                <img width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name"></h2>
                <p class="desc"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container">
        <loading></loading>
      </div>
    </scroll> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'

export default {
  created() {
    this._getRecommendList()
  },
  methods: {
    async _getRecommendList() {
      const res = await getRecommend()
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~common/stylus/variable";

  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
        .slider-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .recommend-list {
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        .item {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
            .name {
              margin-bottom: 10px;
              color: $color-text;
            }
            .desc {
              color: $color-text-d;
            }
          }
          }
        }
      }
      .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

</style>
