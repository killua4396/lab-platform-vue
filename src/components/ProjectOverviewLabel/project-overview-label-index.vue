<template>
    <div class="card">
      <i :class="iconClass" :style="iconStyle"></i>
      <div class="info">
        <span class="label">{{ label }}</span>
        <span class="count">{{ count }}</span>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "ProjectOverviewLabel",
    props: {
      iconClass: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      count: {
        type: [Number, String],
        required: true
      },
      color: {
        type: String,
        required: true
      }
    },
    computed: {
      iconStyle(){
        return {
            color : this.color
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 60%;
  }
  
  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .label {
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }
  
  .count {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-right: 30px;
    margin-top: 15px;
  }
  i{
    font-size: 50px;
  }
  </style>