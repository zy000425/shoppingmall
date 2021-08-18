<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true"
      @scrollMove="scrollMove"
      @pullingUp="loadMore">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <div class="recommend-bg">
        <a href="https://act.mogujie.com/zzlx67">
          <img src="@/assets/img/home/recommend_bg.jpg" alt="">
        </a>
      </div>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl1"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @topClick="topClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goodsList/GoodsList'
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/content/backTop/BackTop'

  import { get_Home_Multidata, get_Home_Goods } from '@/network/home'
  
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isShow: false,
      }
    },
    created() {
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    updated() {
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    methods: {
      /** 
      * 网络请求
      */
      // 获取首页多种数据
      getHomeMultidata() {
        get_Home_Multidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      // 获取首页商品数据
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        get_Home_Goods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          this.$refs.scroll.scroll.finishPullUp()
        })
      },

      /** 
      * 组件事件
      */
      // 切换商品tab
      tabClick(item) {
        if(item === 0) {
          this.currentType = 'pop'
        } else if(item === 1) {
          this.currentType = 'new'
        } else if(item === 2) {
          this.currentType = 'sell'
        }
      },
      // 回到顶部
      topClick() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      // 监听滑动，显示或隐藏top键
      scrollMove(position) {
        this.isShow = position < -650
        this.isTabFixed = position > this.tabOffsetTop
      },
      // 监听触底，获取新的数据
      loadMore(aaa) {
        console.log(aaa)
        this.getHomeGoods(this.currentType)
      }
    }
  }
</script>

<style scoped>
  #home {
    /* position: relative; */
    height: 100vh;
    padding: 44px 0 50px;
  }
  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    color: #fff;
    background-color: var(--color-tint);
  }
  .recommend-bg img{
    width: 100%;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
  .content {
    height: calc(100% - 93px);
    /* overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
  }
</style>