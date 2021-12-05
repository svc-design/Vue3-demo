<template>
  <div class="tags-view-container">
           <el-scrollbar class=scroll-container >
              <router-link ref="tag" class="scroll-item"  to='/home' >
                Home
                <span class="el-icon-close" ></span>
              </router-link>
              <router-link ref="tag" class="scroll-item"  to='/button' >
                Button
                <span class="el-icon-close" ></span>
              </router-link>
              <router-link ref="tag" class="scroll-item"  to='/echart' >
                Echart
                <span class="el-icon-close" ></span>
              </router-link>
          </el-scrollbar>
    </div>
</template>

<script>
export default {
  name: 'ScrollTabs'
}
</script>


<style scoped>

.tags-view-container {
    height: 30px;
    width: 100%;
}

.scroll-container{
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  height: 29px;
  width: 100%;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
}

.scroll-item {
        display: inline-block;
        position: relative;
        width: 40px;
        height: 22px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        margin-top: 3px;
        margin-left: 3px;
        margin-bottom: 0px;
        font-size: 12px;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
}

.el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
}
</style>

