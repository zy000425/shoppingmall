<template>
  <div id="detail">
    <detail-nav-bar @itemClick="itemClick" ref="navBar"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scrollMove="scrollMove">
      <detail-swiper :rota="rota"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-image :images="images"/>
      <detail-params-info :params="params" ref="params"/>
      <detail-comment-info :comment="comment" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsImage from './childComps/DetailGoodsImage'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'

  import Scroll from '@/components/common/scroll/Scroll'
  import GoodsList from '@/components/content/goodsList/GoodsList'

  import { debounce } from '@/common/utils'
  import { 
    get_Detail_Data,
    get_Recommend,
    Goods, 
    Shop } from '@/network/detail'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsImage,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    data() {
      return {
        iid: null,
        position: [],
        rota: [],
        goods: {},
        shop: {},
        images: {},
        params: {},
        comment: {},
        recommend: []
      }
    },
    created() {
      this.iid = this.$route.params.iid
      //
      get_Detail_Data(this.iid).then(res => {
        const data = res.result
        // 获取轮播图
        this.rota.push(...data.itemInfo.topImages)
        // 获取基本信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // 获取详情图片
        this.images = data.detailInfo
        // 获取参数信息
        this.params = data.itemParams
        // 获取评论信息
        if(data.rate.cRata !== 0) {
          this.comment = data.rate.list[0]
        }
      })
      get_Recommend().then(res => {
        this.recommend = res.data.list
      })
    },
    mounted() {
      const getPosition = debounce(this.getPosition, 100)
      this.$bus.$on('detailImageLoad', () => {
        getPosition()
      })
    },
    methods: {
      itemClick(index) {
        switch(index) {
          case 0: 
            this.$refs.scroll.scroll.scrollTo(0, -this.position[0], 500)
            break
          case 1:
            this.$refs.scroll.scroll.scrollTo(0, -this.position[1], 500)
            break
          case 2:
            this.$refs.scroll.scroll.scrollTo(0, -this.position[2], 500)
            break
          case 3:
            this.$refs.scroll.scroll.scrollTo(0, -this.position[3], 500)
            break
        }
      },
      getPosition() {
          this.position = []
          this.position.push(0)
          this.position.push(this.$refs.params.$el.offsetTop - 44)
          this.position.push(this.$refs.comment.$el.offsetTop - 44)
          this.position.push(this.$refs.recommend.$el.offsetTop - 44)
      },
      scrollMove(scrollY) {
        if(-scrollY >= 0 && -scrollY < this.position[1]) {
          this.$refs.navBar.currentIndex = 0
        } else if(-scrollY >= this.position[1] && -scrollY < this.position[2]) {
          this.$refs.navBar.currentIndex = 1
        } else if(-scrollY >= this.position[2] && -scrollY < this.position[3]) {
          this.$refs.navBar.currentIndex = 2
        } else if(-scrollY >= this.position[3]) {
          this.$refs.navBar.currentIndex = 3
        }
      },
      addCart() {
        const product = {}
        product.image = this.rota[0]
        product.title = this.goods.title
        product.desc = this.images.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        this.$store.dispatch('addCart', product).then(res => {
          this.$toast.show('添加购物车成功！')
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #fff;
    z-index: 1;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
</style>