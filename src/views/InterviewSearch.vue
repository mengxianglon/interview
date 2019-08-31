<template>
  <div>
    <h1>搜索采访</h1>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="170px"
      class="demo-ruleForm"
    >

      <el-form-item label="内容(时间/地点)" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="编导" prop="leader">
        <el-input v-model.trim="ruleForm.leader" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="摄像" prop="photo">
        <el-input v-model.trim="ruleForm.photo" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="录入位置" prop="space">
        <el-input v-model.trim="ruleForm.space" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="备份位置" prop="backup">
        <el-input v-model.trim="ruleForm.backup" class="inputLen"></el-input>
      </el-form-item>


      <el-form-item label="拷贝人" prop="copy">
        <el-input v-model.trim="ruleForm.copy" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即搜索</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.inputLen {
  width: 50%;
}
</style>

<script>
export default {
  props: {
    id: ""
  },
  data() {
    return {
      ruleForm: {
        id: 122,
        content:
          "南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,",
        leader: "徐伟浩",
        space: "备份17",
        backup: "备份17",
        photo: "徐伟浩,杨璐",
        copy: "徐伟浩"
      },
    };
  },
  methods: {
    //数字加减按钮
    handleChange(value) {
      //console.log(value);
    },
   async save(){
    
       // alert("creates")
     //  res = await this.$http.post('',this.ruleForm)
      // res = await this.$http.post("rest/heroes", this.model);
       console.log(res)
     
    },
    //参数验证
    submitForm(formName) {
      
         this.save()
     
    },
    //重置所有参数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //转换时间戳
    toTimeStamp(times) {
      return new Date(times).getTime();
    },
    //判断是否搜索页
  },
  mounted() {

  }
};
</script>