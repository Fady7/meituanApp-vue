<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './TopBar'
import searchBar from './SearchBar'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style>
</style>