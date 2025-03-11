<template>
    <div class="list-preview-root">
        <el-header height="40px">
            <div class="list-preview-header-row">
                <div class="list-preview-header-col"><i class="el-icon-notebook-2"></i></div>
                <div class="list-preview-header-col" style="margin-left: 15px;">列表预览</div>
            </div>
        </el-header>
        <el-main>
            <el-table
                :data="tableData"
                stripe
                border
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}"
                max-height="600"
                style="width: 100%">
                <el-table-column
                    type="index"
                    :index="indexMethod"
                    label="序号"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="device_id"
                    label="设备编号"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="bms_type"
                    label="BMS型号"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="active_time"
                    label="激活日期"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="last_data_time"
                    label="末次数据时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="charge_duration"
                    label="充电时间(h)"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="charge_capacity"
                    label="充电电量(kWh)"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="last_charge_time"
                    label="末次充电"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="discharge_duration"
                    label="放电时间(h)"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="last_discharge_time"
                    label="末次放电"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="cycles"
                    label="循环次数"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="city_name"
                    label="城市"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="rated_capacity"
                    label="额定容量(kWh)"
                    width="140">
                </el-table-column>
            </el-table>
        </el-main>
    </div>
</template>

<script>
export default {
    name: "ListPreview",
    methods: {
        indexMethod(index){
            return index + 1
        }
    },
    data(){
        return {
            tableData: [{
                "device_id": "设备1",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-18",
                "last_data_time": "2024-06-11 17:45:17",
                "charge_duration": 1605.88,
                "charge_capacity": 747.61,
                "last_charge_time": "2024-06-04 22:12:02",
                "discharge_duration": 684.71,
                "last_discharge_time": "2023-06-12 08:47:33",
                "cycles": 468,
                "city_name": "合肥市",
                "rated_capacity": 200
            },
            {
                "device_id": "设备2",
                "bms_type": "F700-2040-23",
                "active_time": "2020-06-17",
                "last_data_time": "2024-06-14 09:13:39",
                "charge_duration": 3108.35,
                "charge_capacity": 952.45,
                "last_charge_time": "2024-06-14 05:32:34",
                "discharge_duration": 1734.25,
                "last_discharge_time": "2024-06-14 08:17:29",
                "cycles": 402,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备3",
                "bms_type": "F700-2040-23",
                "active_time": "2020-08-14",
                "last_data_time": "2024-05-30 16:58:18",
                "charge_duration": 742.72,
                "charge_capacity": 306.36,
                "last_charge_time": "2024-05-25 18:24:18",
                "discharge_duration": 466.73,
                "last_discharge_time": "2024-05-30 07:12:32",
                "cycles": 117,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备4",
                "bms_type": "F700-2040-23",
                "active_time": "2020-09-01",
                "last_data_time": "2024-06-14 09:16:52",
                "charge_duration": 747.82,
                "charge_capacity": 283.25,
                "last_charge_time": "2024-06-12 09:39:36",
                "discharge_duration": 461.06,
                "last_discharge_time": "2024-06-14 02:20:20",
                "cycles": 105,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备5",
                "bms_type": "F700-2040-23",
                "active_time": "2020-10-21",
                "last_data_time": "2024-06-14 09:06:58",
                "charge_duration": 547.16,
                "charge_capacity": 316.18,
                "last_charge_time": "2024-06-08 12:47:22",
                "discharge_duration": 591.24,
                "last_discharge_time": "2024-06-09 12:26:55",
                "cycles": 114,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备6",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-18",
                "last_data_time": "2023-12-10 11:16:57",
                "charge_duration": 223.17,
                "charge_capacity": 64.84,
                "last_charge_time": "2023-12-10 11:06:57",
                "discharge_duration": 253.06,
                "last_discharge_time": "2023-12-10 10:36:38",
                "cycles": 48,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备7",
                "bms_type": "F706-2040-21",
                "active_time": "2020-04-16",
                "last_data_time": "2023-12-03 18:24:18",
                "charge_duration": 1092.77,
                "charge_capacity": 340.75,
                "last_charge_time": "2023-06-19 15:48:45",
                "discharge_duration": 717.48,
                "last_discharge_time": "2023-12-03 18:14:18",
                "cycles": 211,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备8",
                "bms_type": "F702-2060-23",
                "active_time": "2020-10-10",
                "last_data_time": "2024-05-11 11:02:30",
                "charge_duration": 85.32,
                "charge_capacity": 43.7,
                "last_charge_time": "2021-04-10 17:24:35",
                "discharge_duration": 28.21,
                "last_discharge_time": "2021-04-12 13:08:20",
                "cycles": 16,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备9",
                "bms_type": "F700-2040-23",
                "active_time": "2020-12-10",
                "last_data_time": "2024-06-14 09:25:40",
                "charge_duration": 84.32,
                "charge_capacity": 42.66,
                "last_charge_time": "2024-04-21 06:18:31",
                "discharge_duration": 127.62,
                "last_discharge_time": "2024-06-14 09:24:30",
                "cycles": 14,
                "city_name": "合肥市",
                "rated_capacity": 50
            },{
                "device_id": "设备11",
                "bms_type": "F728-1530-41",
                "active_time": "2020-12-26",
                "last_data_time": "2024-06-14 09:21:15",
                "charge_duration": 903.79,
                "charge_capacity": 157.15,
                "last_charge_time": "2024-06-13 20:28:35",
                "discharge_duration": 363.43,
                "last_discharge_time": "2024-06-14 09:04:20",
                "cycles": 247,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备12",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-03",
                "last_data_time": "2023-08-22 11:12:04",
                "charge_duration": 1295.59,
                "charge_capacity": 357.48,
                "last_charge_time": "2023-08-20 15:07:01",
                "discharge_duration": 652.68,
                "last_discharge_time": "2023-08-20 10:46:23",
                "cycles": 220,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备13",
                "bms_type": "F700-2040-23",
                "active_time": "2020-06-24",
                "last_data_time": "2023-09-26 14:22:36",
                "charge_duration": 298.28,
                "charge_capacity": 111.04,
                "last_charge_time": "2022-05-14 19:08:41",
                "discharge_duration": 110.69,
                "last_discharge_time": "2022-05-15 14:24:30",
                "cycles": 69,
                "city_name": "合肥市",
                "rated_capacity": 200
            },
            {
                "device_id": "设备14",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-18",
                "last_data_time": "2023-07-16 14:48:46",
                "charge_duration": 1131.05,
                "charge_capacity": 406.63,
                "last_charge_time": "2023-06-28 19:01:29",
                "discharge_duration": 524.89,
                "last_discharge_time": "2023-06-26 09:48:43",
                "cycles": 260,
                "city_name": "合肥市",
                "rated_capacity": 200
            },
            {
                "device_id": "设备15",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-05",
                "last_data_time": "2023-06-15 18:18:06",
                "charge_duration": 1583.11,
                "charge_capacity": 512.86,
                "last_charge_time": "2023-02-06 10:24:40",
                "discharge_duration": 1204.32,
                "last_discharge_time": "2022-12-31 08:19:20",
                "cycles": 319,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备18",
                "bms_type": "F720-2040-43",
                "active_time": "2021-04-29",
                "last_data_time": "2024-05-23 10:59:52",
                "charge_duration": 2024.63,
                "charge_capacity": 1040.68,
                "last_charge_time": "2024-03-19 00:18:44",
                "discharge_duration": 1375.44,
                "last_discharge_time": "2024-03-19 00:29:20",
                "cycles": 875,
                "city_name": "合肥市",
                "rated_capacity": 25
            },
            {
                "device_id": "设备19",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-04",
                "last_data_time": "2023-04-26 13:29:12",
                "charge_duration": 2338.15,
                "charge_capacity": 861.4,
                "last_charge_time": "2023-01-08 15:43:14",
                "discharge_duration": 942.16,
                "last_discharge_time": "2023-02-02 07:34:21",
                "cycles": 534,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备20",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-03",
                "last_data_time": "2023-04-24 19:07:25",
                "charge_duration": 343.97,
                "charge_capacity": 97.25,
                "last_charge_time": "2023-04-20 12:06:03",
                "discharge_duration": 150.18,
                "last_discharge_time": "2023-04-20 12:37:18",
                "cycles": 60,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备21",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-04",
                "last_data_time": "2023-04-24 20:25:56",
                "charge_duration": 534.98,
                "charge_capacity": 177.83,
                "last_charge_time": "2023-04-24 20:15:57",
                "discharge_duration": 284.05,
                "last_discharge_time": "2023-04-24 18:35:48",
                "cycles": 111,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备22",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-14",
                "last_data_time": "2023-11-23 20:18:25",
                "charge_duration": 1749.58,
                "charge_capacity": 51.02,
                "last_charge_time": "2023-10-22 16:29:58",
                "discharge_duration": 479.75,
                "last_discharge_time": "2023-10-22 14:47:32",
                "cycles": 19,
                "city_name": "合肥市",
                "rated_capacity": 100
            },{
                "device_id": "设备23",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-14",
                "last_data_time": "2023-11-23 20:18:23",
                "charge_duration": 21.29,
                "charge_capacity": 14.78,
                "last_charge_time": "2023-07-01 22:25:35",
                "discharge_duration": 3.18,
                "last_discharge_time": "2023-07-01 22:46:33",
                "cycles": 4,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备24",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:19:32",
                "charge_duration": 30.31,
                "charge_capacity": 15.62,
                "last_charge_time": "2023-09-30 08:43:35",
                "discharge_duration": 3.28,
                "last_discharge_time": "2023-07-01 22:48:35",
                "cycles": 4,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备25",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:18:23",
                "charge_duration": 1884.54,
                "charge_capacity": 44.1,
                "last_charge_time": "2023-10-21 03:39:41",
                "discharge_duration": 574.54,
                "last_discharge_time": "2023-10-19 17:07:20",
                "cycles": 17,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备26",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:18:21",
                "charge_duration": 2108.08,
                "charge_capacity": 44.49,
                "last_charge_time": "2023-10-23 12:15:04",
                "discharge_duration": 588.59,
                "last_discharge_time": "2023-10-23 15:26:25",
                "cycles": 18,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备27",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:18:07",
                "charge_duration": 31.95,
                "charge_capacity": 15.71,
                "last_charge_time": "2023-09-30 08:28:21",
                "discharge_duration": 5.16,
                "last_discharge_time": "2023-09-30 09:08:11",
                "cycles": 4,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备28",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:16:30",
                "charge_duration": 1090.42,
                "charge_capacity": 37.35,
                "last_charge_time": "2023-09-20 15:37:50",
                "discharge_duration": 566.75,
                "last_discharge_time": "2023-11-15 17:45:13",
                "cycles": 14,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备29",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:16:10",
                "charge_duration": 29.46,
                "charge_capacity": 17.67,
                "last_charge_time": "2023-09-30 08:28:16",
                "discharge_duration": 4.05,
                "last_discharge_time": "2023-09-30 11:02:05",
                "cycles": 4,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备30",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:13:36",
                "charge_duration": 1711.59,
                "charge_capacity": 53.35,
                "last_charge_time": "2023-11-15 19:37:00",
                "discharge_duration": 555.44,
                "last_discharge_time": "2023-10-24 10:22:53",
                "cycles": 20,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备31",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:11:50",
                "charge_duration": 290.59,
                "charge_capacity": 22.13,
                "last_charge_time": "2023-08-05 13:41:50",
                "discharge_duration": 38.2,
                "last_discharge_time": "2021-06-23 15:16:52",
                "cycles": 6,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备32",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:11:16",
                "charge_duration": 392.26,
                "charge_capacity": 27.44,
                "last_charge_time": "2023-11-04 00:39:27",
                "discharge_duration": 43.18,
                "last_discharge_time": "2021-06-09 14:59:22",
                "cycles": 8,
                "city_name": "合肥市",
                "rated_capacity": 100
            },{
                "device_id": "设备33",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 20:00:00",
                "charge_duration": 34.97,
                "charge_capacity": 15.14,
                "last_charge_time": "2023-09-30 08:28:58",
                "discharge_duration": 3.06,
                "last_discharge_time": "2023-07-02 02:22:06",
                "cycles": 4,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备34",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 19:55:38",
                "charge_duration": 29.42,
                "charge_capacity": 18.26,
                "last_charge_time": "2023-09-30 08:44:50",
                "discharge_duration": 45.04,
                "last_discharge_time": "2023-07-02 13:15:41",
                "cycles": 5,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备35",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-11-23 19:48:26",
                "charge_duration": 70.38,
                "charge_capacity": 19.67,
                "last_charge_time": "2023-11-02 00:37:17",
                "discharge_duration": 3.01,
                "last_discharge_time": "2023-07-01 22:45:57",
                "cycles": 5,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备37",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-22",
                "last_data_time": "2023-04-24 19:33:07",
                "charge_duration": 818.67,
                "charge_capacity": 356.84,
                "last_charge_time": "2022-10-02 02:54:45",
                "discharge_duration": 344.17,
                "last_discharge_time": "2022-10-02 03:35:11",
                "cycles": 223,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备38",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-18",
                "last_data_time": "2023-04-13 18:49:49",
                "charge_duration": 569.17,
                "charge_capacity": 200.97,
                "last_charge_time": "2023-01-03 15:55:35",
                "discharge_duration": 370.83,
                "last_discharge_time": "2022-12-04 09:55:45",
                "cycles": 131,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备39",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-21",
                "last_data_time": "2023-04-15 09:05:20",
                "charge_duration": 2299.72,
                "charge_capacity": 686.14,
                "last_charge_time": "2023-01-10 16:45:34",
                "discharge_duration": 1029.79,
                "last_discharge_time": "2023-01-11 11:03:26",
                "cycles": 426,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备40",
                "bms_type": "F720-2040-43",
                "active_time": "2021-05-23",
                "last_data_time": "2024-05-13 03:50:40",
                "charge_duration": 1558.93,
                "charge_capacity": 767.79,
                "last_charge_time": "2024-04-26 14:43:59",
                "discharge_duration": 1039.99,
                "last_discharge_time": "2023-10-15 11:36:51",
                "cycles": 77,
                "city_name": "合肥市",
                "rated_capacity": 24
            },
            {
                "device_id": "设备41",
                "bms_type": "F702-2060-43",
                "active_time": "2021-06-25",
                "last_data_time": "2024-06-14 09:25:35",
                "charge_duration": 1515.16,
                "charge_capacity": 651.46,
                "last_charge_time": "2024-06-13 21:12:47",
                "discharge_duration": 563.78,
                "last_discharge_time": "2024-06-14 09:25:35",
                "cycles": 109,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备42",
                "bms_type": "F702-2060-43",
                "active_time": "2021-06-25",
                "last_data_time": "2024-06-14 09:22:16",
                "charge_duration": 3350.3,
                "charge_capacity": 1424.48,
                "last_charge_time": "2024-06-14 08:06:59",
                "discharge_duration": 1010.56,
                "last_discharge_time": "2024-06-14 08:28:26",
                "cycles": 70,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备43",
                "bms_type": "F700-2040-23",
                "active_time": "2021-06-25",
                "last_data_time": "2024-06-14 09:16:54",
                "charge_duration": 893.4,
                "charge_capacity": 163.43,
                "last_charge_time": "2024-05-20 06:51:26",
                "discharge_duration": 238.73,
                "last_discharge_time": "2024-06-10 22:57:07",
                "cycles": 68,
                "city_name": "合肥市",
                "rated_capacity": 50
            },{
                "device_id": "设备44",
                "bms_type": "F700-2040-23",
                "active_time": "2021-06-25",
                "last_data_time": "2024-06-14 09:14:54",
                "charge_duration": 466.49,
                "charge_capacity": 197.77,
                "last_charge_time": "2024-06-10 18:18:51",
                "discharge_duration": 253.9,
                "last_discharge_time": "2024-06-12 09:37:42",
                "cycles": 83,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备45",
                "bms_type": "F700-2040-23",
                "active_time": "2021-06-25",
                "last_data_time": "2024-06-12 10:12:55",
                "charge_duration": 489.0,
                "charge_capacity": 214.94,
                "last_charge_time": "2024-06-10 05:11:25",
                "discharge_duration": 376.54,
                "last_discharge_time": "2024-06-12 06:30:35",
                "cycles": 89,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备47",
                "bms_type": "F720-2040-43A",
                "active_time": "2021-05-20",
                "last_data_time": "2024-05-02 04:32:26",
                "charge_duration": 1097.55,
                "charge_capacity": 251.01,
                "last_charge_time": "2024-01-08 22:15:00",
                "discharge_duration": 387.7,
                "last_discharge_time": "2024-01-08 22:29:22",
                "cycles": 125,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备48",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-14",
                "last_data_time": "2023-10-25 16:11:23",
                "charge_duration": 169.98,
                "charge_capacity": 21.68,
                "last_charge_time": "2023-09-30 08:42:42",
                "discharge_duration": 43.58,
                "last_discharge_time": "2023-07-02 02:23:05",
                "cycles": 8,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备49",
                "bms_type": "F720-2040-43",
                "active_time": "2021-01-26",
                "last_data_time": "2024-01-06 16:09:31",
                "charge_duration": 2702.29,
                "charge_capacity": 1380.51,
                "last_charge_time": "2023-12-22 15:36:22",
                "discharge_duration": 1769.02,
                "last_discharge_time": "2023-10-23 14:26:19",
                "cycles": 1065,
                "city_name": "合肥市",
                "rated_capacity": 24
            },
            {
                "device_id": "设备50",
                "bms_type": "F702-20100-23",
                "active_time": "2020-11-17",
                "last_data_time": "2023-10-23 22:10:35",
                "charge_duration": 1373.4,
                "charge_capacity": 39.3,
                "last_charge_time": "2023-10-23 14:59:00",
                "discharge_duration": 513.6,
                "last_discharge_time": "2023-10-23 15:57:12",
                "cycles": 15,
                "city_name": "合肥市",
                "rated_capacity": 100
            },
            {
                "device_id": "设备51",
                "bms_type": "F720-2040-43",
                "active_time": "2020-12-24",
                "last_data_time": "2023-11-02 16:51:58",
                "charge_duration": 1543.85,
                "charge_capacity": 817.84,
                "last_charge_time": "2023-10-20 17:55:26",
                "discharge_duration": 1046.74,
                "last_discharge_time": "2023-10-27 16:22:13",
                "cycles": 265,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备52",
                "bms_type": "F720-2040-43",
                "active_time": "2021-05-10",
                "last_data_time": "2024-03-09 18:20:02",
                "charge_duration": 943.51,
                "charge_capacity": 269.61,
                "last_charge_time": "2023-12-06 19:42:56",
                "discharge_duration": 484.35,
                "last_discharge_time": "2023-12-16 10:41:56",
                "cycles": 312,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备53",
                "bms_type": "F700-2040-23",
                "active_time": "2020-06-28",
                "last_data_time": "2023-04-22 11:42:00",
                "charge_duration": 64.01,
                "charge_capacity": 17.24,
                "last_charge_time": "2023-04-20 17:42:01",
                "discharge_duration": 14.19,
                "last_discharge_time": "2023-04-22 11:32:01",
                "cycles": 13,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备54",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-03",
                "last_data_time": "2023-01-26 08:36:48",
                "charge_duration": 1855.28,
                "charge_capacity": 564.98,
                "last_charge_time": "2023-01-07 20:14:02",
                "discharge_duration": 840.75,
                "last_discharge_time": "2023-01-11 11:08:37",
                "cycles": 353,
                "city_name": "合肥市",
                "rated_capacity": 200
            },{
                "device_id": "设备55",
                "bms_type": "F702-2060-43",
                "active_time": "2021-06-25",
                "last_data_time": "2024-04-13 16:31:49",
                "charge_duration": 566.86,
                "charge_capacity": 256.13,
                "last_charge_time": "2024-01-30 13:13:49",
                "discharge_duration": 211.58,
                "last_discharge_time": "2024-01-31 16:50:32",
                "cycles": 51,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备56",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-03",
                "last_data_time": "2023-01-20 08:01:34",
                "charge_duration": 771.35,
                "charge_capacity": 222.04,
                "last_charge_time": "2023-01-13 22:17:06",
                "discharge_duration": 306.42,
                "last_discharge_time": "2023-01-19 14:24:08",
                "cycles": 138,
                "city_name": "合肥市",
                "rated_capacity": 30
            },
            {
                "device_id": "设备57",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-05",
                "last_data_time": "2024-06-14 09:26:35",
                "charge_duration": 2359.68,
                "charge_capacity": 1223.22,
                "last_charge_time": "2024-06-14 08:28:26",
                "discharge_duration": 816.88,
                "last_discharge_time": "2024-06-14 09:26:35",
                "cycles": 574,
                "city_name": "合肥市",
                "rated_capacity": 40
            },
            {
                "device_id": "设备58",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-05",
                "last_data_time": "2024-06-14 09:23:20",
                "charge_duration": 1868.4,
                "charge_capacity": 690.45,
                "last_charge_time": "2024-06-14 07:24:02",
                "discharge_duration": 586.64,
                "last_discharge_time": "2024-06-14 09:23:20",
                "cycles": 328,
                "city_name": "合肥市",
                "rated_capacity": 40
            },
            {
                "device_id": "设备59",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:26:42",
                "charge_duration": 791.49,
                "charge_capacity": 431.08,
                "last_charge_time": "2024-06-14 07:30:45",
                "discharge_duration": 374.74,
                "last_discharge_time": "2024-06-14 07:46:16",
                "cycles": 163,
                "city_name": "合肥市",
                "rated_capacity": 40
            },
            {
                "device_id": "设备60",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:25:44",
                "charge_duration": 2393.53,
                "charge_capacity": 1176.37,
                "last_charge_time": "2024-06-14 07:32:41",
                "discharge_duration": 782.05,
                "last_discharge_time": "2024-06-14 09:25:44",
                "cycles": 442,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备61",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:25:43",
                "charge_duration": 2002.93,
                "charge_capacity": 1125.99,
                "last_charge_time": "2024-06-14 06:54:27",
                "discharge_duration": 639.89,
                "last_discharge_time": "2024-06-14 09:25:43",
                "cycles": 421,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备62",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:25:26",
                "charge_duration": 819.35,
                "charge_capacity": 517.63,
                "last_charge_time": "2024-06-14 08:23:45",
                "discharge_duration": 288.52,
                "last_discharge_time": "2024-06-14 08:39:17",
                "cycles": 197,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备63",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:24:40",
                "charge_duration": 1397.9,
                "charge_capacity": 712.69,
                "last_charge_time": "2024-06-14 09:22:42",
                "discharge_duration": 373.95,
                "last_discharge_time": "2024-06-14 09:24:40",
                "cycles": 269,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备64",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:23:20",
                "charge_duration": 1951.9,
                "charge_capacity": 909.61,
                "last_charge_time": "2024-06-14 07:28:10",
                "discharge_duration": 541.23,
                "last_discharge_time": "2024-06-14 07:43:42",
                "cycles": 342,
                "city_name": "合肥市",
                "rated_capacity": 50
            },{
                "device_id": "设备65",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:23:19",
                "charge_duration": 1457.12,
                "charge_capacity": 787.47,
                "last_charge_time": "2024-06-13 18:24:57",
                "discharge_duration": 530.15,
                "last_discharge_time": "2024-06-14 09:23:19",
                "cycles": 295,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备66",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:23:18",
                "charge_duration": 1482.03,
                "charge_capacity": 824.5,
                "last_charge_time": "2024-06-14 06:57:13",
                "discharge_duration": 767.03,
                "last_discharge_time": "2024-06-14 07:12:43",
                "cycles": 309,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备67",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:22:12",
                "charge_duration": 2619.11,
                "charge_capacity": 973.11,
                "last_charge_time": "2024-06-14 06:28:04",
                "discharge_duration": 519.49,
                "last_discharge_time": "2024-06-14 09:22:12",
                "cycles": 368,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备68",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:22:10",
                "charge_duration": 860.27,
                "charge_capacity": 508.52,
                "last_charge_time": "2024-06-14 08:09:33",
                "discharge_duration": 312.13,
                "last_discharge_time": "2024-06-14 09:22:10",
                "cycles": 197,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备69",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:20:44",
                "charge_duration": 1147.05,
                "charge_capacity": 607.83,
                "last_charge_time": "2024-06-13 21:18:58",
                "discharge_duration": 390.53,
                "last_discharge_time": "2024-06-14 09:19:53",
                "cycles": 284,
                "city_name": "合肥市",
                "rated_capacity": 40
            },
            {
                "device_id": "设备70",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:20:00",
                "charge_duration": 856.0,
                "charge_capacity": 469.63,
                "last_charge_time": "2024-06-14 08:29:33",
                "discharge_duration": 403.35,
                "last_discharge_time": "2024-06-14 08:56:33",
                "cycles": 177,
                "city_name": "合肥市",
                "rated_capacity": 40
            },
            {
                "device_id": "设备71",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:18:53",
                "charge_duration": 1319.81,
                "charge_capacity": 700.23,
                "last_charge_time": "2024-06-14 08:05:27",
                "discharge_duration": 508.45,
                "last_discharge_time": "2024-06-14 09:18:53",
                "cycles": 267,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备72",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-06",
                "last_data_time": "2024-06-14 09:17:22",
                "charge_duration": 3237.75,
                "charge_capacity": 1625.64,
                "last_charge_time": "2024-06-14 06:54:40",
                "discharge_duration": 764.11,
                "last_discharge_time": "2024-06-14 09:16:28",
                "cycles": 613,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备73",
                "bms_type": "F700-2040-23",
                "active_time": "2020-04-02",
                "last_data_time": "2022-12-09 20:55:05",
                "charge_duration": 1380.4,
                "charge_capacity": 535.86,
                "last_charge_time": "2022-12-09 13:03:23",
                "discharge_duration": 680.02,
                "last_discharge_time": "2022-12-09 12:59:21",
                "cycles": 333,
                "city_name": "合肥市",
                "rated_capacity": 30
            },{
                "device_id": "设备74",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:26:32",
                "charge_duration": 2290.46,
                "charge_capacity": 1197.03,
                "last_charge_time": "2024-06-14 08:42:54",
                "discharge_duration": 962.98,
                "last_discharge_time": "2024-06-14 09:15:24",
                "cycles": 448,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备75",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:25:41",
                "charge_duration": 2377.26,
                "charge_capacity": 1269.03,
                "last_charge_time": "2024-06-14 06:29:39",
                "discharge_duration": 909.01,
                "last_discharge_time": "2024-06-13 19:53:51",
                "cycles": 475,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备76",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:25:39",
                "charge_duration": 2001.6,
                "charge_capacity": 979.65,
                "last_charge_time": "2024-06-13 18:06:14",
                "discharge_duration": 729.8,
                "last_discharge_time": "2024-06-13 18:54:27",
                "cycles": 366,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备77",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:25:39",
                "charge_duration": 1363.08,
                "charge_capacity": 688.66,
                "last_charge_time": "2024-06-14 09:25:39",
                "discharge_duration": 450.33,
                "last_discharge_time": "2024-06-13 18:35:22",
                "cycles": 260,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备78",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:25:28",
                "charge_duration": 2175.7,
                "charge_capacity": 1126.45,
                "last_charge_time": "2024-06-14 09:03:33",
                "discharge_duration": 645.8,
                "last_discharge_time": "2024-06-14 09:25:28",
                "cycles": 423,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备79",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:24:33",
                "charge_duration": 1992.6,
                "charge_capacity": 998.55,
                "last_charge_time": "2024-04-04 06:40:35",
                "discharge_duration": 775.93,
                "last_discharge_time": "2024-04-04 12:33:18",
                "cycles": 375,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备80",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:24:30",
                "charge_duration": 1729.68,
                "charge_capacity": 838.97,
                "last_charge_time": "2024-06-14 08:50:31",
                "discharge_duration": 543.5,
                "last_discharge_time": "2024-06-14 09:24:30",
                "cycles": 312,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备81",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:24:29",
                "charge_duration": 1918.88,
                "charge_capacity": 948.31,
                "last_charge_time": "2024-06-14 08:03:48",
                "discharge_duration": 596.86,
                "last_discharge_time": "2024-06-14 09:24:29",
                "cycles": 356,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备82",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:24:26",
                "charge_duration": 2501.73,
                "charge_capacity": 1139.99,
                "last_charge_time": "2024-06-14 09:24:26",
                "discharge_duration": 756.9,
                "last_discharge_time": "2024-06-13 19:05:28",
                "cycles": 434,
                "city_name": "合肥市",
                "rated_capacity": 50
            },{
                "device_id": "设备83",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:24:21",
                "charge_duration": 1467.12,
                "charge_capacity": 666.26,
                "last_charge_time": "2024-04-25 11:48:05",
                "discharge_duration": 476.73,
                "last_discharge_time": "2024-06-04 12:43:25",
                "cycles": 255,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备84",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:23:24",
                "charge_duration": 2727.87,
                "charge_capacity": 1367.89,
                "last_charge_time": "2024-06-14 08:03:17",
                "discharge_duration": 862.71,
                "last_discharge_time": "2024-06-14 09:23:24",
                "cycles": 518,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备85",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:23:19",
                "charge_duration": 2496.91,
                "charge_capacity": 1393.53,
                "last_charge_time": "2024-06-14 06:28:45",
                "discharge_duration": 965.42,
                "last_discharge_time": "2024-06-14 06:52:48",
                "cycles": 523,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备86",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:23:19",
                "charge_duration": 1266.56,
                "charge_capacity": 605.63,
                "last_charge_time": "2024-06-14 06:55:24",
                "discharge_duration": 511.68,
                "last_discharge_time": "2024-06-14 09:23:19",
                "cycles": 228,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备87",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:23:19",
                "charge_duration": 660.89,
                "charge_capacity": 336.48,
                "last_charge_time": "2024-06-11 22:03:19",
                "discharge_duration": 288.32,
                "last_discharge_time": "2024-06-14 09:23:19",
                "cycles": 129,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备88",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:23:18",
                "charge_duration": 2555.41,
                "charge_capacity": 1290.22,
                "last_charge_time": "2024-06-14 06:52:52",
                "discharge_duration": 842.01,
                "last_discharge_time": "2024-06-14 09:22:20",
                "cycles": 486,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备89",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:22:16",
                "charge_duration": 2824.12,
                "charge_capacity": 1315.34,
                "last_charge_time": "2024-06-14 06:18:27",
                "discharge_duration": 991.28,
                "last_discharge_time": "2024-06-14 09:22:16",
                "cycles": 496,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备90",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:22:16",
                "charge_duration": 3448.84,
                "charge_capacity": 1761.95,
                "last_charge_time": "2024-06-14 07:36:43",
                "discharge_duration": 1082.21,
                "last_discharge_time": "2024-06-14 08:16:09",
                "cycles": 659,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备91",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:22:12",
                "charge_duration": 3144.05,
                "charge_capacity": 1594.47,
                "last_charge_time": "2024-06-13 06:05:10",
                "discharge_duration": 1342.45,
                "last_discharge_time": "2024-06-13 19:36:42",
                "cycles": 598,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备92",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:21:15",
                "charge_duration": 2781.36,
                "charge_capacity": 1343.66,
                "last_charge_time": "2024-06-14 08:25:18",
                "discharge_duration": 647.68,
                "last_discharge_time": "2024-06-14 08:40:50",
                "cycles": 502,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备93",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:20:03",
                "charge_duration": 987.81,
                "charge_capacity": 493.81,
                "last_charge_time": "2024-06-11 11:00:24",
                "discharge_duration": 343.73,
                "last_discharge_time": "2024-06-11 11:14:26",
                "cycles": 186,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备94",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-07",
                "last_data_time": "2024-06-14 09:19:15",
                "charge_duration": 2060.46,
                "charge_capacity": 1060.19,
                "last_charge_time": "2024-04-09 13:31:53",
                "discharge_duration": 681.32,
                "last_discharge_time": "2024-04-09 12:04:05",
                "cycles": 401,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备95",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-08",
                "last_data_time": "2024-06-14 09:25:51",
                "charge_duration": 1698.93,
                "charge_capacity": 882.38,
                "last_charge_time": "2024-06-13 08:13:18",
                "discharge_duration": 618.68,
                "last_discharge_time": "2024-06-14 09:25:51",
                "cycles": 334,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备96",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-08",
                "last_data_time": "2024-06-14 09:25:44",
                "charge_duration": 1405.17,
                "charge_capacity": 752.78,
                "last_charge_time": "2024-06-14 01:41:36",
                "discharge_duration": 596.79,
                "last_discharge_time": "2024-06-14 09:25:44",
                "cycles": 285,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备97",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-08",
                "last_data_time": "2024-06-14 09:25:40",
                "charge_duration": 1481.06,
                "charge_capacity": 753.27,
                "last_charge_time": "2024-06-04 19:08:56",
                "discharge_duration": 397.05,
                "last_discharge_time": "2024-06-10 19:51:11",
                "cycles": 288,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备98",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-08",
                "last_data_time": "2024-06-14 09:24:22",
                "charge_duration": 2976.62,
                "charge_capacity": 1527.65,
                "last_charge_time": "2024-06-14 06:53:16",
                "discharge_duration": 1013.89,
                "last_discharge_time": "2024-06-14 09:24:22",
                "cycles": 578,
                "city_name": "合肥市",
                "rated_capacity": 50
            },
            {
                "device_id": "设备99",
                "bms_type": "F722-2060-43H",
                "active_time": "2021-10-08",
                "last_data_time": "2024-06-14 09:23:32",
                "charge_duration": 1358.73,
                "charge_capacity": 722.11,
                "last_charge_time": "2024-06-04 03:47:43",
                "discharge_duration": 472.2,
                "last_discharge_time": "2024-06-03 17:31:11",
                "cycles": 337,
                "city_name": "合肥市",
                "rated_capacity": 40
            }]
        }
    },
}
</script>

<style scoped>
.list-preview-root {
    border: 1px solid #9db36a;
    border-radius: 5px;
    margin-right: 20px;
}
.el-header{
    background-color: #a8bc7b;
}
.el-main{
    padding: 0px;
    overflow: hidden;
}
.list-preview-header-row{
    height: 100%;
}
.list-preview-header-col{
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-size: 20px;
    color: white;
}
</style>