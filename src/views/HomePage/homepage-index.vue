<template>
    <div>
        <el-container style="padding: 0px;">
            <el-aside>
                <div class="bms-select">BMS系统选择</div>
                <el-tree
                    :data="bmsOptions"
                    show-checkbox
                    node-key="id"
                    :default-checked-keys="[0]"
                    :default-expanded-keys="[2]">
                </el-tree>
            </el-aside>
            <el-main>
                <el-row style="margin-bottom: 20px;">
                    <el-col :span="8">
                        <div class="block-desc">
                            <i class="iconfont icon-tongji"></i>
                            <span>项目统计</span>
                        </div>
                        <div>
                            <el-descriptions :column="1" border >
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="总装车能量">2.1MWh</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="总运行时长">321,827h</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="总充电能量">460,254kWh</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="总行驶里程">918,958km</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="最大运行时长">37,774h</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="最大充电电量">281,630kWh</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="最大行驶里程">102,345km</el-descriptions-item>
                                <el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle" label="最大循环次数">2,758次</el-descriptions-item>
                            </el-descriptions>
                        </div>
                    </el-col>
                    <el-col :span="15" :offset="1">
                        <div class="block-desc">
                            <i class="iconfont icon-houtaizonglan"></i>
                            <span>项目总览</span>
                        </div>
                        <div class="project-overview">
                            <el-row :gutter="50" class="overview-row">
                                <el-col :span="8" class="overview-row-col">
                                    <projectOverviewLabel icon-class="iconfont icon-file-text-fill" label="项目总数" count="8" color="#cd1b31"></projectOverviewLabel>
                                </el-col>
                                <el-col :span="8" class="overview-row-col">
                                    <projectOverviewLabel icon-class="iconfont icon-shebei" label="设备总数" count="23" color="#288cfc"></projectOverviewLabel>
                                </el-col>
                                <el-col :span="8" class="overview-row-col">
                                    <projectOverviewLabel icon-class="iconfont icon-charging-pile-fill" label="充电总数" count="8" color="#fcc024"></projectOverviewLabel>
                                </el-col>
                            </el-row>
                            <el-row :gutter="50"  class="overview-row">
                                <el-col :span="8" class="overview-row-col">
                                    <projectOverviewLabel icon-class="iconfont icon-quanxianyuechi" label="激活设备" count="8" color="#288cfc"></projectOverviewLabel>
                                </el-col>
                                <el-col :span="8" class="overview-row-col">
                                    <projectOverviewLabel icon-class="iconfont icon-leida" label="在线设备" count="8" color="#fcc024"></projectOverviewLabel>
                                </el-col>
                                <el-col :span="8" class="overview-row-col">
                                    <projectOverviewLabel icon-class="iconfont icon-baojingshu" label="报警数量" count="8" color="#f15e0e"></projectOverviewLabel>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <MapPreview style="margin-bottom: 20px;"></MapPreview>
                <ListPreview style="margin-bottom: 20px;"></ListPreview>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import projectOverviewLabel from '@/components/ProjectOverviewLabel/project-overview-label-index.vue';
import MapPreview from '@/components/MapPreview/map-preview-index.vue';
import ListPreview from '@/components/ListPreview/list-preview-index.vue';

export default {
    name: 'HomePage',
    components: {
        projectOverviewLabel,
        MapPreview,
        ListPreview
    },
    data(){
        return {
            labelStyle: "background:#f4f4f4;font-weight:bold;color:#555555;border: 1px solid #dddddd;text-align:center",
            contentStyle: "border: 1px solid #dddddd;text-align:center",
            bmsOptions: [{
                id: 0,
                label: '全选',
                children:[{
                    id: 1,
                    label: "F700-2040-23"
                },{
                    id: 2,
                    label: "F702-20100-23"
                },{
                    id: 3,
                    label: "F702-2060-23"
                },{
                    id: 4,
                    label: "F702-2060-43"
                },{
                    id: 5,
                    label: "F706-2040-21"
                },{
                    id: 6,
                    label: "F720-2040-43"
                },{
                    id: 7,
                    label: "F720-2040-43A"
                },{
                    id: 8,
                    label: "F722-2060-43H"
                },{
                    id: 9,
                    label: "F728-1530-41"
                },]
            }]
        }
    },
}
</script>

<style scoped>
.bms-select{
    text-align: center;
    color:#606266;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #cccccc;
    padding: 20px 0px;
}
.el-aside {
    height: calc(100vh - 62px);
    border-right: 1px solid #cccccc;
}
.el-main {
    padding: 10px 0px 0px 60px;
    height: calc(100vh - 62px);
}
.el-tree{
    background-color: #f4f4f4;
    margin-left: 10%;
}
.block-desc{
    color : #555555;
    margin-bottom: 20px;
    font-size: 20px;
}
.block-desc i{
    color :#02a7f0;
    font-size: 20px;
}
.project-overview{
    border: 1px solid #cccccc;
    padding: 20px;
    margin-right: 20px;
    height: 326px;
}
.overview-row{
    height: 50%;
}
.overview-row-col{
    height: 100%;
    display: flex;
    align-items: center;
}
</style>