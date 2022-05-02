<template>
  <ul class="header-ul">
    <!--       后面换成路由       -->
    <li v-for="(item,index) in nav" :key="index">
      <a href="" class="header-ul-li-a">{{ item.title }}
        <Down theme="outline" size="16" fill="#fff" v-if="item.list" />
      </a>
      <ul class="header-ul-ul" v-if="item.list">
        <li><a href="" class="header-list-data" v-for="(listItem,index) in item.list"
               :key="index">{{ listItem.title }}</a></li>
      </ul>
    </li>

  </ul>
</template>

<script>
import { Down } from "@icon-park/vue";

export default {
  name: "Header-Nav",
  props: ["nav"],
  components: {
    Down
  }
};
</script>

<style scoped lang="scss">
$General-theme: #615dfa;
$hover-color: #5edfff;
$fff: #fff;
.header-ul {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  li {
    position: relative;

    &:hover .header-ul-ul {
      display: block;
      opacity: 1;
      transform: translate(0, 40px);
      z-index: 9000;
    }

    .header-ul-li-a {
      position: relative;
      transition: all 100ms ease-in-out;

      &:hover {
        color: $hover-color;
      }

      padding: 30px 30px;
    }

    .header-ul-ul {
      opacity: 0;
      width: 230px;
      position: absolute;
      left: -50px;
      transform: translate(0, 0);
      background-color: $fff;
      transition: transform .2s ease-in-out, opacity .3s ease-in-out, visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 30%);
      border: 1px solid $fff;
      z-index: -1;

      li {
        .header-list-data {
          display: block;
          position: relative;
          font-size: 15px;
          font-weight: 500;
          text-transform: capitalize;
          color: #444444;
          padding: 15px 15px;
          border-radius: 5px;

          &:hover {
            color: $hover-color;
          }
        }
      }
    }
  }
}
</style>