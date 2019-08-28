<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="170px"
      class="demo-ruleForm"
    >
      <el-form-item label="拍摄时间">
        <el-date-picker v-model="ruleForm.photoDate" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="录入日期">
        <el-date-picker v-model="ruleForm.inDate" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="内容(时间/地点)" prop="conente">
        <el-input type="textarea" v-model="ruleForm.content" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="编导" prop="leader">
        <el-input v-model="ruleForm.leader" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="录入位置" prop="space">
        <el-input v-model="ruleForm.space" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="备份位置" prop="backup">
        <el-input v-model="ruleForm.backup" class="inputLen"></el-input>
      </el-form-item>

     <el-form-item label="摄像" prop="photo">
        <el-input v-model="ruleForm.photo" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="文件大小,单位为GB" prop="size">
        <el-input-number v-model="ruleForm.size" @change="handleChange" :min="1" :max="100000" label="单位为g"></el-input-number>
      </el-form-item>

      <el-form-item label="拷贝人" prop="copy">
        <el-input v-model="ruleForm.copy" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
  data() {
    return {
      ruleForm: {
         id:122,  
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩,杨璐',
          size:'20',
          copy:'徐伟浩',
      },
      rules: {
        content: [
          { required: true, message: "请输入内容", trigger: "blur" },
          {
            min: 1,
            max: 5000,
            message: "长度在 1 到 5000 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleChange(value){
      console.log(value+'G')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>