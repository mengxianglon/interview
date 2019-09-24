<template>
  <div>
    <el-page-header @back="$router.push('/interviews/list')" :content="type+'采访'">
</el-page-header>
 <el-divider></el-divider>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="170px"
      class="demo-ruleForm"
      @submit.native.prevent="save"
    >
      <el-form-item label="拍摄时间" prop="photo_date ">
        <el-date-picker v-model="ruleForm.photo_date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="录入日期" prop="in_date ">
        <el-date-picker v-model="ruleForm.in_date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="内容(时间/地点)" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" class="inputLen"></el-input>
      </el-form-item>

      <el-form-item label="编导" prop="leader">
        <el-select v-model="ruleForm.leader" value-key="id" multiple placeholder="请选择">
          <el-option
            v-for="item in leaders"
            :key="item.id"
            :label="item.realname"
            :value="item.realname"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="摄像" prop="photo">
        <el-select v-model="ruleForm.photo" multiple value-key="id" placeholder="请选择">
          <el-option
            v-for="item in photos"
            :key="item.id"
            :label="item.realname"
            :value="item.realname"
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
        <el-select v-model="ruleForm.copy" multiple value-key="id" placeholder="请选择">
          <el-option
            v-for="item in copys"
            :key="item.id"
            :label="item.realname"
            :value="item.realname"
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
.el-page-header__content {
    font-size: 18px;
    color: #2145d0;
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
      leaders: [], //发送数据的时候，下拉菜单选项
      photos: [], //发送数据的时候，下拉菜单选项
      copys: [],
      ruleForm: {
        tid: "",
        photo_date: new Date(),
        in_date: new Date(),
        content: "",
        leader: [],
        photo: [],
        copy: [],
        space: "备份",
        backup: "备份",
        size: ""
      },
      rules: {
        photo_date: [
          {
            type: "data",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        in_date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        content: [
          { required: true, message: "内容不能为空", trigger: "blur" },
          {
            min: 2,
            max: 5000,
            message: "长度在 2 到 5000 个字符",
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
        res = await this.$http.put(`interview/${this.tid}`, this.ruleForm); //有tid，修改
      } else {
        res = await this.$http.post("interview", this.ruleForm); //没tid，新增
       // console.log(res);
      }
      this.$router.push("/interviews/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
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
    async fetch() {
      let res = await this.$http.get(`interview/${this.tid}/edit`);
      this.ruleForm = res.data;
      //console.log(user.data[0].leader);
      // console.log();
    },
    async user() {
      let user = await this.$http.get(`users`);
      this.leaders = user.data[0];
      this.photos = user.data[1];
      this.copys = user.data[2];
    }
  },
  //转换时间戳
  filters: {
    toDate(time) {
      let times = time;
      //  return  time ? time :''
      if (times !== 0) {
        return times;
      }
      return "";
    }
  },
  created() {
    this.tid && this.fetch();
    this.user();
    if (this.tid) {
      this.type = "修改";
    } else {
      this.type = "新增";
      this.ruleForm.size = 10;
    }
  }
};
</script>