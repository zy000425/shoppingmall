<template>
  <div class="params" v-if="Object.keys(params).length !== 0">
    <div class="params-top">
      <div class="rule-key">{{params.rule.key}}</div>
      <table class="size-info">
        <tr v-for="(tr, index) in params.rule.tables[0]" :key="index">
          <td v-for="(td, indey) in tr" :key="indey">{{td}}</td>
        </tr>
      </table>
      <span class="rule-disclaimer">{{params.rule.disclaimer}}</span>
    </div>
    <div class="params-bottom">
      <div class="info-key">{{params.info.key}}</div>
      <table class="params-info">
        <tr v-for="(tr, index) in params.info.set" :key="index">
          <td class="tr-key">{{tr.key}}</td>
          <td class="tr-value">{{tr.value}}</td>
        </tr>
      </table>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'DetailParamsInfo',
    props: {
      params: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params {
    padding: 15px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-top {
    padding-bottom: 10px;
  }
  .params table {
    width: 100%;
    border-collapse: collapse;
  }
  .params table tr {
    height: 42px;
  }
  .params table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .tr-key {
    width: 70px;
  }
  .params-info {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .tr-value {
    color: #eb4868
  }
  .rule-key, .info-key {
    font-size: 18px;
    color: #000;
    text-align: center;
    padding-bottom: 10px;
  }
</style>