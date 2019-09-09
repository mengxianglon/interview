<template>
  <div>
     <el-page-header @back="$router.push('/interviews/list')" content="搜索采访">
</el-page-header>
 <el-divider></el-divider>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="170px"
      class="demo-ruleForm"
      @submit.native.prevent="save"
    >
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
        <el-button type="primary" @click="save()">立即搜索</el-button>
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
    id: ""
  },
  data() {
    return {
      leaders: [
        {
          value: "徐伟浩",
          label: "徐伟浩"
        },
        {
          value: "崔富宽",
          label: "崔富宽"
        }
      ],
      photos: [
        {
          value: "杨璐",
          label: "杨璐"
        },
        {
          value: "张衡",
          label: "张衡"
        }
      ],
      copys: [
        {
          value: "杨璐",
          label: "杨璐"
        },
        {
          value: "张衡",
          label: "张衡"
        }
      ],
      ruleForm: {
        id: 122,
        photoDate: "2019-09-30",
        inDate: "2019-09-22",
        content:
          "南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,",
        leader: [],
        photo: [],
        copy: [],
        space: "备份17",
        backup: "备份17",
        size: "20"
      }
    };
  },
  methods: {
    //数字加减按钮
    handleChange(value) {
      //console.log(value);
    },
    async save() {
      // alert("creates")
      //  res = await this.$http.post('',this.ruleForm)
      // res = await this.$http.post("rest/heroes", this.model);
      console.log();
    },
    //参数验证
    // submitForm(formName) {

    //      this.save()

    // },
    //重置所有参数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //转换时间戳
    toTimeStamp(times) {
      return new Date(times).getTime();
    }
    //判断是否搜索页
  },
  mounted() {

  }
};
</script>