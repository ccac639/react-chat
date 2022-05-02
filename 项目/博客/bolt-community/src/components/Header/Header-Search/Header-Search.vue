<template>
  <div class="search">
    <input type="text" placeholder="在这里搜索" class="search-search">
    <div class="btn-icon">
      <button class="btn-search">
        <Search theme="outline" size="18" fill="#fff" />
      </button>
    </div>

  </div>
</template>

<script>
import { Search } from "@icon-park/vue";

export default {
  name: "Header-Search",
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
$btn-background: #5edfff;
$search-background: #534fee;
.search {
  width: 250px;
  display: flex;
  background-color: $search-background;
  align-items: center;
  border-radius: 30px;

  .search-search {
    padding: 5px 20px;
    height: 42px;
    color: #ffffff;
    font-size: 14px;
    background-color: transparent;
    border: none;
  }

  .btn-search {
    background-color: $btn-background;
    border: none;
    color: #ffffff;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    :before {
      content: "";
      width: 13px;
      height: 5px;
      background-color: #ffffff;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      right: 6px;
      transform: rotate(24deg);
      opacity: 0.8;
    }
  }
}

</style>