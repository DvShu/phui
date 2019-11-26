<template>
  <div class="sub-page icon">
    <app-header title="Icon"></app-header>
    <div class="doc-container">
      <ul class="icon-list">
        <li>
          <div class="icon-wrapper">
            <i class="phui-icon phui-icon-info"></i>
          </div>
          <div class="icon-class">phui-icon-info</div>
        </li>
        <li>
          <div class="icon-wrapper">
            <i class="phui-icon phui-icon-warn"></i>
          </div>
          <div class="icon-class">phui-icon-warn</div>
        </li>
        <li>
          <div class="icon-wrapper">
            <i class="phui-icon phui-icon-error"></i>
          </div>
          <div class="icon-class">phui-icon-error</div>
        </li>
        <li>
          <div class="icon-wrapper">
            <i class="phui-icon phui-icon-success"></i>
          </div>
          <div class="icon-class">phui-icon-success</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon'
}
</script>

<style lang="less">
.icon {

  .icon-list {
    border-top: 1px solid #dedede;
    border-left: 1px solid #dedede;
    font-size: 0;

    li {
      display: inline-block;
      width: 25%;
      border-right: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      color: #666;
      font-size: 13px;
      transition: color .15s linear;
      box-sizing: border-box;
      vertical-align: top;

      &:hover {
        color: #5cb6ff;
      }
    }
  }

  .phui-icon {
    font-size: 30px;
  }
  .icon-wrapper {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-class {
    line-height: 1;
    word-break: break-all;
    height: 30px;
    text-align: center;
    width: 100%;
  }
}
</style>
