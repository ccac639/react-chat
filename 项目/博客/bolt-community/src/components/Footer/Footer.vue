<template>
  <footer>
    <div class="footer">
      <div class="footer-flex footer-logo">
        <a href="" class="btn btn-logo">
          <img src="@/assets/logo_dark.png" alt="">
        </a>
      </div>
      <div class="footer-flex">
        <h2>重要链接</h2>
        <ul class="footer-ul">
          <li class="footer-li"><a href="">首页</a></li>
          <li class="footer-li"><a href="">联系客服</a></li>
        </ul>
      </div>
      <div class="footer-flex">
        <h2>社区</h2>
        <ul class="footer-ul">
          <li class="footer-li">
            <a href="">好友</a>
          </li>
          <li class="footer-li">
            <a href="">博客大厅</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
$footer-background: #ffffff;
$ccc: #000;
$hover-color: #5edfff;
$General-theme: #615dfa;
footer {
  background: $footer-background;
  padding: 140px 0 25px;

  .footer {
    padding: 0 35px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .footer-flex {
      flex: 1;

      h2 {
        font-size: 22px;
        position: relative;
        padding-bottom: 15px;
        margin-bottom: 15px;

        &::after {
          content: "";
          height: 4px;
          width: 6px;
          background-color: $General-theme;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        &::before {
          content: "";
          height: 4px;
          width: 20px;
          background-color: $General-theme;
          position: absolute;
          bottom: 0;
          left: 8px;
        }
      }

      .footer-ul {
        padding-right: 15px;

        .footer-li {
          width: 50%;
          height: 28px;
          margin-bottom: 7px;

          a {
            color: $ccc;

            &:hover {
              color: $hover-color;
            }
          }

        }
      }
    }
  }
}
</style>