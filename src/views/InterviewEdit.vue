<template>
  <div>
    <h1>{{type}}采访</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="170px"
      class="demo-ruleForm"
      @submit.native.prevent="save"
    >
      <el-form-item label="拍摄时间" prop="photo_date">
        <el-date-picker v-model="ruleForm.photo_date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="录入日期" prop="in_date">
        <el-date-picker v-model="ruleForm.in_date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="内容(时间/地点)" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="编导" prop="leader">
        <el-select v-model="ruleForm.leader" multiple placeholder="请选择">
          <el-option
            v-for="item in leaders"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="摄像" prop="photo">
        <el-select v-model="ruleForm.photo" multiple placeholder="请选择">
          <el-option
            v-for="item in photos"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="录入位置" prop="space">
        <el-input v-model.trim="ruleForm.space" class="back"></el-input>
      </el-form-item>

      <el-form-item label="备份位置" prop="backup">
        <el-input v-model.trim="ruleForm.backup" class="back"></el-input>
      </el-form-item>

      <el-form-item label="文件大小,单位为GB" prop="size">
        <el-input-number
          v-model="ruleForm.size"
          @change="handleChange"
          :step="0.5"
          :min="1"
          :max="100000"
          label="单位为g"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="拷贝人" prop="copy">
        <el-select v-model="ruleForm.copy" multiple placeholder="请选择">
          <el-option
            v-for="item in copys"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即{{type}}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.inputLen {
  width: 50%;
}
.back {
  width: 217px;
}
</style>

<script>
export default {
  props: {
    tid: ""
  },
  data() {
    return {
      type: "", //判断是更新还是新增
      leaders: [
       
      ], //发送数据的时候，下拉菜单选项
      photos: [
        
      ], //发送数据的时候，下拉菜单选项
      copys: [
       
      ],
      ruleForm: {
        tid: "",
        photo_date: "",
        in_date: "",
        content:"",
        leader: [],
        photo: [],
        copy: [],
        space: "",
        backup: "",
        size: ""
      },
      rules: {
        photoDate: [
          {
            type: 'date',
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        inDate: [
          {
            type: 'date',
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
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
          {
            required: true,
            message: "必须有一个编导",
            trigger: "change",
            type: "array"
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
          {
            required: true,
            message: "摄像不能为空",
            trigger: "change",
            type: "array"
          }
        ],
        copy: [
          {
            required: true,
            message: "拷贝人不能为空",
            trigger: "change",
            type: "array"
          }
        ]
      }
    };
  },
  methods: {
    //数字加减按钮
    handleChange(value) {
      //console.log(value);
    },
    async save() {
      let res;
      if (this.tid) {
        //  res = await this.$http.put("", this.ruleForm); //有tid，修改
      } else {
          res = await this.$http.post("", this.ruleForm); //没tid，新增
           console.log(res);
      }
    },
    //参数验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //通过验证后传输
          // alert("submit!");
          console.log("通过验证");
          this.save();
        } else {
          //  console.log("error submit!!");
          alert("必填项不能为空");
          return false;
        }
      });
    },
    //重置所有参数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //转换时间戳
    // toTimeStamp(times) {
    //   return new Date(times).getTime();
    // }
    async fetch(){
       let res = await this.$http.get(`interview/${this.tid}/edit`)
       this.ruleForm = res.data
    }
  },
  created() {
    // console.log(this.$route.path)
    //console.log(this.indexs())
    //新增，修改，二个个页面合成一个页面

    this.tid && this.fetch();
    if (this.tid) {
      this.type = "修改";
    } else {
      this.type = "新增";
      this.ruleForm.size = 10;
    }
    // this.photoDate = this.toTimeStamp('2019-9-20')
    // this.inDate = this.toTimeStamp('2019-9-22')
    //console.log(this.photoDate)
    // console.log(this.sizes)
    //this.indexs()? this.sizes :false
    // console.log(this.indexs())
    // console.log(this.toTimeStamp(this.ruleForm.inDate))
    // console.log(new Date(times).getTime())
    //console.log(this.id)
  }
};
</script>