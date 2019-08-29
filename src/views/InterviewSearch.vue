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
        <el-date-picker v-model="ruleForm.inDate"  type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="内容(时间/地点)" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="编导" prop="leader">
        <el-input v-model.trim="ruleForm.leader" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="录入位置" prop="space">
        <el-input v-model.trim="ruleForm.space" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="备份位置" prop="backup">
        <el-input v-model.trim="ruleForm.backup" class="inputLen"></el-input>
      </el-form-item>

     <el-form-item label="摄像" prop="photo">
        <el-input v-model.trim="ruleForm.photo" class="inputLen"></el-input>
      </el-form-item>
    <div v-if="sizes">
      <el-form-item label="文件大小,单位为GB" prop="size">
        <el-input-number v-model="ruleForm.size" @change="handleChange" :min="1" :max="100000" label="单位为g"></el-input-number>
      </el-form-item>
    </div>

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
  data() {
    return {
      sizes:false,
      ruleForm: {
         id:122,  
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩,杨璐',
          size:'20',
          copy:'徐伟浩',
      },
      rules: {
        content: [
          { required: true, message: "内容不能为空", trigger: "blur" },
          {
            min: 5,
            max: 5000,
            message: "长度在 5 到 5000 个字符",
            trigger: "blur"
          }
        ],
         leader: [
          { required: true, message: "必须有一个编导", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在 2 到 100 个字符",
            trigger: "blur"
          }
        ],
        backup: [
          { required: true, message: "备份位置不能为空", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在 2 到 100 个字符",
            trigger: "blur"
          }
        ],
        space: [
          { required: true, message: "录入位置不能为空", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在 2 到 100 个字符",
            trigger: "blur"
          }
        ],
        photo: [
          { required: true, message: "摄像不能为空", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在 2 到 100 个字符",
            trigger: "blur"
          }
        ],
         copy: [
          { required: true, message: "拷贝人不能为空", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在 2 到 100 个字符",
            trigger: "blur"
          }
        ],
      }
    };
  },
  methods: {
    //数字加减按钮
    handleChange(value){
      console.log(value)
    },
    //参数验证
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
    //重置所有参数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //转换时间戳
    toTimeStamp(times){
     return new Date(times).getTime()
    }
  },
  created(){
   // console.log(this.$route.path)
    // let path =this.$route.path
    // let bool = path.indexOf('InterviewSearch')
    // console.log(bool)
  // console.log(this.toTimeStamp(this.ruleForm.inDate))
  // console.log(new Date(times).getTime())

  }
};
</script>