<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <tab-control class="tab-control" :titles="['综合', '新品', '销量']" @itemClick="tabClick"></tab-control>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  import TabMenu from './childComps/TabMenu'
  import TabControl from '@/components/content/tabControl/TabControl'
  import Scroll from '@/components/common/scroll/Scroll'
  import TabContentCategory from './childComps/TabContentCategory'
  import TabContentDetail from './childComps/TabContentDetail'

  import { get_Category, get_Subcategory, get_Category_Detail } from "@/network/category";

  export default {
		name: "Category",
    components: {
		  NavBar,
      TabMenu,
      TabControl,
      Scroll,
      TabContentCategory,
      TabContentDetail
    },
    data() {
		  return {
		    categories: [],
        categoryData: {},
        currentIndex: -1,
        currentType: 'pop'
      }
    },
    created() {
		  // 请求分类数据
      this.getCategory()
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
		  getCategory() {
		    get_Category().then(res => {
		      // 获取分类数据
		      this.categories = res.data.category.list
          // 初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 请求第一个分类的数据
          this.getSubcategories(0)
        })
      },
      getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        get_Subcategory(mailKey).then(res => {
          console.log(res)
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          console.log(this.categoryData);
          this.getCategoryDetail('pop')
          this.getCategoryDetail('sell')
          this.getCategoryDetail('new')
        })
      },
      getCategoryDetail(type) {
		    // 获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        // 发送请求,传入miniWallkey和type
		    get_Category_Detail(miniWallkey, type).then(res => {
		      // 将获取的数据保存下来
		      this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
      selectItem(index) {
        this.getSubcategories(index)
      }
    }
	}
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>
