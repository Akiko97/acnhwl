<template>
  <div class="kk">
    <h1>K.K.专辑</h1>
    <el-table
      ref="multipleTable"
      :height="height"
      :data="music"
      :row-class-name="ifChecked"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="90">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {kkMusic} from "../data/kk.js"
export default {
  name: 'K.K.',
  data () {
    return {
      music: kkMusic,
      height: 600
    }
  },
  methods: {
    ifChecked(data) {
      if (data.row.checked) {
        return 'checked-row';
      } else {
        return 'notchecked-row';
      }
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          if (row.checked) {
            this.$refs.multipleTable.toggleRowSelection(row);
          }
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
  },
  mounted() {
    this.height = document.documentElement.clientHeight || document.body.clientHeight;
    this.height -= 100;
    this.toggleSelection(this.music);
  },
}
</script>

<style>
  .el-table .notchecked-row {
    background: oldlace;
  }

  .el-table .checked-row {
    background: #f0f9eb;
  }
</style>
