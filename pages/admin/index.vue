<template>
  <div class="new-article">
    
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
            ["blockquote", "code-block"]
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
</style>