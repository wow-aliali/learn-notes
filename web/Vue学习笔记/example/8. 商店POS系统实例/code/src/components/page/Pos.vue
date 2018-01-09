<template>
  <div class="pos">
    <el-row>

      <!-- 左部订单栏 -->
      <el-col :span="7" class="pos-order" id="pos-order">
        <el-tabs type="border-card">
          <el-tab-pane label="结账">
            <!-- 将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中 -->
            <el-table :data="tableData" border :summary-method="getSummary" show-summary style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column prop="price" label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="130" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单"></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
        </el-tabs>

        <div class="button-group"> 
          <el-button type="success" @click="checkout">结账</el-button>
          <el-button type="warning">挂单</el-button>
          <el-button type="danger" @click="delAllGoods">删除</el-button>
        </div>
      </el-col>

      <!-- 右部商品栏 -->
      <el-col :span="17" class="pos-goods" id="pos-goods">
        <div class="hot-goods">
          <div class="hot-goods-title">热 销 商 品</div>
          <div class="hot-goods-list">
            <ul>
              <li v-for="goods in hotGoods" @click="addOrderList(goods)">
                <span>{{ goods.goodsName }}</span>
                <span>￥{{ goods.price }}元</span>
              </li>
            </ul>
          </div>
        </div> <!-- hot-goods end -->

        <div class="goods-type">
          <div class="hot-goods-title">商 品 分 类</div>
          <el-tabs value="main">
            <el-tab-pane></el-tab-pane> 
            <el-tab-pane label="主食" name="main">
              <div class="main-list">
                <ul>
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" alt="臭辣鸡腿堡" width="100%"></span>
                    <span class="foodName">{{ goods.goodsName }}</span>
                    <span class="foodPrice">{{ goods.price }}元</span>
                  </li>
                </ul>
              </div>  
            </el-tab-pane> 
            <el-tab-pane label="小食">
              <div class="main-list">
                <ul>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" alt="臭辣鸡腿堡" width="100%"></span>
                    <span class="foodName">{{ goods.goodsName }}</span>
                    <span class="foodPrice">{{ goods.price }}元</span>
                  </li>
                </ul>
              </div> </el-tab-pane> 
            <el-tab-pane label="饮料">
              <div class="main-list">
                <ul>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" alt="臭辣鸡腿堡" width="100%"></span>
                    <span class="foodName">{{ goods.goodsName }}</span>
                    <span class="foodPrice">{{ goods.price }}元</span>
                  </li>
                </ul>
              </div> </el-tab-pane> 
            <el-tab-pane label="套餐">
              <div class="main-list">
                <ul>
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" alt="臭辣鸡腿堡" width="100%"></span>
                    <span class="foodName">{{ goods.goodsName }}</span>
                    <span class="foodPrice">{{ goods.price }}元</span>
                  </li>
                </ul>
              </div> </el-tab-pane> 
          </el-tabs>
        </div> <!-- goods-type end -->
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "pos",
  data() {
    return {
      tableData: [
        {
          goodsId: 100,
          goodsName: "不可口可乐",
          count: 1,
          price: 15
        },
        {
          goodsId: 101,
          goodsName: "臭辣鸡腿堡",
          count: 1,
          price: 30
        },
        {
          goodsId: 102,
          goodsName: "伤心薯条",
          count: 1,
          price: 16
        },
        {
          goodsId: 103,
          goodsName: "辣么大圆筒",
          count: 1,
          price: 100
        }
      ],
      hotGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  created: function() {
		// 在实例创建完成后立即调用

    // axios 远程加载数据
    axios
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(response => {
        console.log(response);
        this.hotGoods = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://jspang.com/DemoApi/typeGoods.php")
      .then(response => {
        console.log(response);
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch();
  },
  mounted: function() {
    // 在虚拟DOM加载完成后调用

    const body_h = document.body.clientHeight;
    document.getElementById("pos-order").style.height = `${body_h}px`;
    document.getElementById("pos-goods").style.height = `${body_h}px`;
  },
  methods: {
    addOrderList(goods) {
      // 点击右边商品添加到表格的逻辑代码

      // 判断这个商品是否已经存在于订单列表
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; // 存在
        }
      }
      // 根据isHave的值选择操作订单
      if (isHave) {
        // 存在就进行数量添加
        let tableArr = this.tableData.filter(o => o.goodsId == goods.goodsId);
				tableArr[0].count++;
				// Array.prototype.filter() 为数组中的每个元素调用一次callback函数，并利用所有使得callback返回true的元素创建一个新数组
				// 上面的 tableArr 是一个数组(只有一个元素), 所以需要使用下标 [0]
      } else {
        // 不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);  // Array.prototype.push() 将一个或多个元素添加到数组的末尾，并返回新数组的长度
      }
    },
    getSummary() {
      // element表格统计的逻辑代码

      this.totalCount = 0; // 汇总数量清0
      this.totalMoney = 0;
      // 进行数量和价格的汇总计算
      this.tableData.forEach(element => {
        // Array.prototype.forEach() 对数组的每个元素执行一次提供的函数。
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
      let newGoods = ["合计", this.totalCount, this.totalMoney];
      return newGoods;
    },
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
    },
    delAllGoods() {
      this.tableData = [];
    },
    checkout() {
      // 结账
      if (this.tableCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: "结账成功, 感谢您为小店出了一份力!",
          type: "success"
        });
      } else {
        this.$message.error("不能空结, 老板不能太心急哦!");
      }
    }
  }
};
</script>

<style scoped>
/**** 左部订单栏 ****/

/**** 右部商品栏 ****/
.pos-goods {
  background: #eff3f8;
}

.button-group {
  margin-top: 20px;
}
/** 热销商品 **/
.hot-goods-title {
  height: 40px;
  font-weight: bold;
  line-height: 40px;
  color: #fff;
  background: #1d8ce0;
}
.hot-goods-list ul li {
  float: left;
  padding: 10px;
  margin: 10px;
  background: #fff;
  list-style: none;
  cursor: pointer;
}
.hot-goods-list ul {
  margin: 15px 50px;
}
.hot-goods-list ul li span:last-of-type {
  color: #96c8f9;
}
.hot-goods-list:after {
  content: ".";
  display: block;
  clear: both;
}
/** 商品分类 **/
.goods-type {
  margin-top: 30px;
}
.main-list {
  padding: 20px;
}
.main-list li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.main-list li span {
  display: block;
  float: left;
}
.main-list li span:nth-child(2) {
  margin-top: 10px;
}
.main-list li span:last-of-type {
  width: 30%;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
