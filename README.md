# express-light

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```vue
<!-- 2 -->
<div style="width: 70px">
          <el-select
            v-model="value"
            placeholder="车间"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
<!-- 3 -->
<div style="width: 70px">
          <el-select
            v-model="value"
            placeholder="车间"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
```

```js
/////////////////
console.log("123", storyOrder);
console.log("95899", this.tableData);
for (let index = 0; index < tableDatas.length; index++) {
  for (let index = 0; index < storyOrder.length; index++) {
    if (tableDatas[index].issue_grade_id == storyOrder[index].id) {
      // this.tableData = this.tableData.unshift({
      //   date: storyOrder[index].create_time,
      //   name: storyOrder[index].grade_name,
      //   address: workList,
      // });
    }
  }
}
```
