<template>
  <div class="new-article">
    <el-form label-position="top" label-width="80px" :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.title" style="max-width:500px;"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-select
          v-model="form.tags"
          style="width:300px"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in tagList"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文">
        <div
          class="quill-editor"
          :content="form.body"
          @change="onEditorChange($event)"
          v-quill:myQuillEditor="editorOption"
        ></div>
      </el-form-item>
      <el-button type="primary" @click="post">发表</el-button>
    </el-form>
  </div>
</template>

<script>
import { getTagList } from "~/api/tag";
import { newArticle } from "~/api/article";

export default {
  layout: "admin",
  middleware: 'auth',
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            ["image"],
            [{ header: [1, 2, 3, 4, false] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }]
          ]
        }
      },
      tagList: [],
      form: {
        title: "",
        body: "",
        tags: []
      }
    };
  },
  mounted() {
    getTagList()
      .then(res => {
        this.tagList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      console.log("editor change!", editor, html, text);
      this.form.body = html;
    },
    insertImgClick(e) {
      console.log(e);

      // if (e.target.className.indexOf('icon-pic') != -1) {
      //     document.getElementById('insert_image').click();
      // } else if (e.target.className.indexOf('icon-video') != -1) {
      //     document.getElementById('insert_video').click();
      // }
    },
    post() {
      let data = { ...this.form };
      newArticle(data)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.new-article {
  max-width: 800px;
}
.quill-editor {
  min-height: 200px;
  overflow-y: auto;
}
/deep/ .ql-formats{
  line-height: 1;
}
</style>
