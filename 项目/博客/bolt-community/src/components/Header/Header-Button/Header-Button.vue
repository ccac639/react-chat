<template>
  <div class="button">
    <button>登录</button>
  </div>
</template>

<script>
export default {
  name: "Header-Button"
};
</script>

<style scoped lang="scss">
$button-color: #000000;
button {
  padding: 15px 25px;
  color: $button-color;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

</style>