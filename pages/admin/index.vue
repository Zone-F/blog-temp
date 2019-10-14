<template>
  <div class="new-article">
    <el-form label-position="top" label-width="80px" :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.title" style="max-width:500px;"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="form.tags" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文">
        <div class="editor" ref="editor"></div>
      </el-form-item>
      <el-button type="primary">发表</el-button>
    </el-form>
  </div>
</template>
 
<script>
export default {
  layout: "admin",
  components: {},
  data() {
    return {
      form: {
        title: "",
        body: "",
        tags: []
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  mounted () {
    if (process.client) {
      const E = require("wangeditor");
      const editor = new E(this.$refs.editor);
      editor.create();
    }
  }
};
</script>
 
<style lang="scss">
.new-article {
  max-width: 800px;
}
</style>