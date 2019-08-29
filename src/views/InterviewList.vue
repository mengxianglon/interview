<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">

    <el-table-column
      prop="id"
      label="编号"
      >
    </el-table-column>

    <el-table-column
      prop="photoDate"
      label="拍摄日期"
      >
    </el-table-column>

    <el-table-column
      prop="inDate"
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
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!--分页-->
<div class="pages">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
</div>
  </div>

</template>

<style>
  .pages{
      margin-top: 2.2rem;
      text-align: center;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 === 1) {
          return 'success-row';
        } 
      },
       handleEdit(index, row) {
        console.log(index,row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    data() {
      return {
        tableData: [{
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
        }, {
          id:122,  
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩',
          size:'20',
          copy:'徐伟浩',
        }, {
            id:122,
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩',
          size:'20',
          copy:'徐伟浩',
        }, {
            id:122,
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩',
          size:'20',
          copy:'徐伟浩',
        }, {
            id:122,
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩',
          size:'20',
          copy:'徐伟浩',
        }, {
            id:122,
          photoDate:'2019-9-20',  
          inDate: '2019-9-21',
          content:'南阳院士工作室揭牌，南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,南阳院士工作室揭牌,',
          leader:'徐伟浩',
          space: '备份17',
          backup: '备份17',
          photo:'徐伟浩',
          size:'20',
          copy:'徐伟浩',
        },]
      }
    }
  }
</script>