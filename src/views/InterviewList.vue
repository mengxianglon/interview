<template>
<div>
  <el-table
    :data="tableData"
     border
    style="width: 100%"
    :row-class-name="tableRowClassName">

    <el-table-column
      prop="tid"
      label="编号"
      width="100"
      >
    </el-table-column>

    <el-table-column
      prop="photo_date"
      label="拍摄日期"
      >
    </el-table-column>

    <el-table-column
      prop="in_date"
      label="录入日期"
     >
    </el-table-column>

   <el-table-column
      prop="content"
      label="内容(时间/地点)"
      width="180"
     >
    </el-table-column>

    <el-table-column
      prop="leader"
      label="编导"
      >
      <template slot-scope="scope">
        <el-tag
          type="primary"
          disable-transitions>{{scope.row.leader}}</el-tag>
      </template>
    </el-table-column>
  
    <el-table-column
      prop="photo"
      label="摄像"
      width="170"
     >
      <template slot-scope="scope">
        <el-tag
          type="warning"
          disable-transitions>{{scope.row.photo}}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="space"
      label="录入位置"
     >
    </el-table-column>

    
    <el-table-column
      prop="backup"
      label="备份位置"
      >
    </el-table-column>

    <el-table-column
      prop="size"
      label="文件大小/G"
     >
    </el-table-column>
 
    <el-table-column
      prop="copy"
      label="拷贝人"
      >
    </el-table-column>

     <el-table-column 
     width="150"
     label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!--分页-->
<div class="pages">
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="perpage"
        :total="total">
    </el-pagination>
</div>
  </div>

</template>



<style>
  .pages{
      margin-top: 2rem;
      text-align: center;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
.el-table td, .el-table th {
    text-align: center !important;
}
</style>



<script>
  export default {
      data() {
      return {
        perpage:1,
        total:1,
        tableData: []
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 === 1) {
          return 'success-row';
        } 
      },
      async fetch(){
        let res = await this.$http.get(`interview`)
        this.tableData = res.data.data
        this.total=res.data.total
        this.perpage=res.data.per_page
       
      },
      //修改按钮
       handleEdit(index, row) {
         this.$router.push(`/interviews/${row.tid}/edit`)
        //console.log(row.tid);
         // console.log(index, row);
      },
      //删除
     handleDelete(row) {
      this.$confirm(`是否确定要删除编号为"${row.tid}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`interview/${row.tid}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
     async handleCurrentChange(val){
        let res = await this.$http.get(`interview?page=${val}`)
         this.tableData = res.data.data
        //  console.log(`当前页: ${val}`);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    
    },
    created(){
      this.fetch();
    }
  }
</script>