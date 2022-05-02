<template>
  <header>
    <div class="header-head">
      <div class="header-nav">
        <div class="header-logo"><img src="@/assets/logo.png" alt=""></div>
        <div class="header-list">
          <Header-Nav :nav="nav"></Header-Nav>
        </div>
      </div>
      <div class="header-btn">
        <div class="left">
          <Header-Search></Header-Search>
        </div>
        <div class="right">
          <Header-Button></Header-Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Down } from "@icon-park/vue";
import HeaderSearch from "@/components/Header/Header-Search/Header-Search.vue";
import HeaderButton from "@/components/Header/Header-Button/Header-Button.vue";
import HeaderNav from "@/components/Header/Header-Nav/Header-Nav.vue";

export default {
  name: "Header",
  data() {
    return {
      nav: [
        { title: "首页" },
        {
          title: "个人中心",
          list: [{ title: "简介" }, { title: "好友" }]
        },
        {
          title: "博客",
          list: [{ title: "博客大厅" }, { title: "好友博客" }, { title: "私人博客" }]
        },
        {
          title: "联系客服",
          list: [{ title: "联系客服" }]
        }
      ]
    };
  },
  methods: {},
  created() {

  },
  components: {
    Down,
    HeaderSearch,
    HeaderButton,
    HeaderNav
  }
};
</script>

<style scoped lang="scss">
$General-theme: #615dfa;
$hover-color: #5edfff;
$fff: #fff;
header {
  background-color: $General-theme;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .header-head {
    padding: 0 35px;
    //margin:0 auto;
    display: flex;
    justify-content: space-between;

    .header-nav {
      display: flex;
      justify-content: space-between;

      .header-logo {
        padding: 20px 10px;

        img {
          max-width: 100%;
          height: auto;
        }
      }

      .header-list {
        margin-left: 40px;
      }
    }

    .header-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        padding-right: 15px;
      }

      .right {
        padding: 15px;
      }
    }
  }
}


</style>