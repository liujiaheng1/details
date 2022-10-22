<template>
  <div class="tally">
    <div class="modelAll">
      <div class="addTally">
        <ul>
          <li><p>时间</p></li>
          <li><p>食品</p></li>
          <li><p>价格</p></li>
          <li><p>确定</p></li>
        </ul>
        <ul>
          <li>
            <el-date-picker
              size="mini"
              v-model="time"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </li>
          <li>
            <el-cascader
              size="mini"
              v-model="food"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
            ></el-cascader>
          </li>
          <li><input type="text" v-model="money" disabled /></li>
          <li><button @click="submit">确定</button></li>
        </ul>
      </div>
      <div></div>
    </div>

    <div class="tableInfo">
      <el-table
        :data="tableData"
        :height="tableHeight"
        border
        stripe
        ref="tabH"
      >
        <!-- style="width: 100%" -->
        <el-table-column prop="music_name" label="序号" width="50">
          <template slot-scope="scope">
            <span> {{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="日期" width="180">
          <template slot-scope="scope">
            <span> {{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="类别">
          <template slot-scope="scope">
            <span>
              {{ foodList[scope.row.food[0]][scope.row.food[1]].label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="address" label="价格">
          <template slot-scope="scope">
            <span> {{ scope.row.money }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="del(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import foodList from "../select/food";
import Api from "@/api/serve/index.js";
import getTime from "@/api/getID.js";
export default {
  props: {},
  data() {
    return {
      time: "",
      food: "",
      tableData: [],
      foodList,
      money: "",
      tableHeight: "500px",
      options: [
        {
          value: "packagee",
          label: "套餐",
          children: foodList.packagee,
        },
        {
          value: "Ordinary",
          label: "普通",
          children: foodList.Ordinary,
        },
        {
          value: "addfood",
          label: "加菜",
          children: foodList.addfood,
        },
        {
          value: "other",
          label: "其他",
          children: foodList.other,
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(foodList[value[0]][value[1]]);
      this.money = foodList[value[0]][value[1]].money;
    },
    async submit() {
      const id = await getTime();
      if (this.time == "" || this.food == "" || this.money == "") {
        return;
      }
      this.food[1] = Number(this.food[1]);
      await Api.addFood(this.time, this.food, this.money, id);
      const list = await Api.getAllList();
      this.tableData = list;
      this.time = "";
      this.food = "";
      this.money = "";
    },
    getHeight() {
      let boxH = document.getElementsByClassName("addTally")[0];
      console.log(boxH.getBoundingClientRect());
      let h = boxH.getBoundingClientRect().height;
      console.log(window.innerHeight, h);
      this.tableHeight = window.innerHeight - h - 80 + "px";
      console.log(this.tableHeight);
    },
    async del(row) {
      await Api.deleteData(row.id);
      const list = await Api.getAllList();
      this.tableData = list;
    },
  },
  async mounted() {
    const list = await Api.getAllList();
    this.tableData = list;
    this.getHeight();
    window.onresize = () => {
      this.getHeight();
    };
  },
  components: {},
};
</script>

<style scoped lang="scss">
.tally {
  padding: 20px;
}
.modelAll {
  display: flex;
  align-items: flex-end;
}
.addTally {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  width: 618px;
  border-right: none;
  & > ul {
    flex: 1;
    display: flex;
    & > li {
      display: flex;
      align-items: center;
      margin-left: 5px;
      height: 30px;
      width: 200px;
      border-right: 1px solid #ccc;
    }
  }
  & > ul:nth-child(1),
  & > ul:nth-child(2) {
    & > li:nth-child(4) {
      width: 120px;
      display: flex;
      padding: 0;
      margin: 0;
      justify-content: center;
    }
  }
  & > ul:nth-child(2) {
    border-top: 1px solid #ccc;
    & > li:nth-child(3) {
      & > input {
        width: 93%;
      }
    }
    & > li:nth-child(4) {
      & > button {
        border: none;
        width: 80px;
        height: 20px;
        font-size: 12px;
        border-radius: 6px;
        color: white;
        background: #5ebcee;
        cursor: pointer;
      }
    }
  }
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 98%;
}
.el-select {
  width: 98%;
}
.aaa {
  width: 100px;
}
</style>
