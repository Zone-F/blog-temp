<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="新增标签">
        <el-input v-model="newTag" placeholder="新增标签"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="postNew">新增</el-button>
      </el-form-item>
    </el-form>
    <h3>管理</h3>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="名称"></el-table-column>
      <el-table-column prop="name" label="文章数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
 
<script>
import { newTag } from "~/api/tag";

export default {
  layout: "admin",
  middleware: 'auth',
  data() {
    return {
      newTag: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    postNew() {
      newTag({name:this.newTag})
        .then(res => {
          if(res.state == 200){
            this.newTag = ''
            this.$message.success(res.message);
          }else{
            this.$message.error(res.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
 
<style lang="scss">
</style>