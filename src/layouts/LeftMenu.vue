<!--
 * @Author: FXJ
 * @LastEditTime: 2022-10-13 20:20:18
 * @FilePath: \vue-wyy-music\src\components\layout\LeftMenu.vue
 * @Description: 
-->
<template>
  <div id="LeftMenu" class="LeftMenu">
    <el-menu router>
      <el-menu-item
        v-for="(item, index) in menuList"
        :index="item.path"
        :default-active="defaultActive"
        :class="{ 'is-active': isActive(item) }"
        :key="item.path"
      >
        {{ item.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

interface menuItem {
  title:string,
  path:string
}
const defaultActive = "/" + route.path.split("/")[1];
const menuList = reactive([
  {
    title: "发现音乐",
    path: "/discoverMusic",
  },
  {
    title: "发现MV",
    path: "/discoverVideo",
  },
  {
    title: "我的下载",
    path: "/downloadList",
  },
]);
const isActive = (menuItem:menuItem) => route.path.includes(menuItem.path)
</script>
<style scoped lang="scss">
.LeftMenu {
  position: fixed;
  left: 0;
  top: 60px;
  left: 0;
  z-index: 99;
  width: 200px;
  height: calc(100vh - 60px - 80px);
  padding: 10px 0px 10px 10px;
  border-right: 1px solid #e0e0e0;
  .el-menu {
    border: none;
    overflow: hidden;
    .el-menu-item {
      height: 36px;
      font-size: 16px;
      padding: 0 6px;
      margin: 2px 2px;
      line-height: 36px;
      border-radius: 8px 0 0 8px;
      transition: all 0.3s;
      transform-origin: left top;
      &.is-active {
        color: #313131;
        font-weight: 600;
        background-color: #f6f6f7;
      }
      &:hover {
        color: #313131;
        background-color: #f6f6f7;
      }
    }
  }
}
</style>
