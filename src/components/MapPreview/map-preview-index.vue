<template>
    <div class="map-preview-root">
        <el-container>
            <el-header height="40px">
                <div class="map-preview-header-row">
                    <div class="map-preview-header-col"><i class="el-icon-map-location"></i></div>
                    <div class="map-preview-header-col" style="margin-left: 15px;">地图预览</div>
                </div>
            </el-header>
            <el-main>
                <div ref="mapContainer" class="map-container"></div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken ='pk.eyJ1IjoieTlzb2hpZTVhbiIsImEiOiJjbTN2bWNpa2IweDhzMmtvbW12cnpncm1vIn0.gogfD6Go_cVao1v3ehzbIg';

export default {
    name: "MapPreview",
    mounted() {
        const map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [117.22, 31.82],
            zoom: 10,
        });
        this.map = map;
    }
}
</script>

<style scoped>
.map-preview-root{
    border: 1px solid #5ea5bd;
    border-radius: 5px;
    margin-right: 20px;
}
.el-header{
    background-color: #70afc4;
}
.el-main{
    padding: 0px;
    overflow: hidden;
}
.map-preview-header-row{
    height: 100%;
}
.map-preview-header-col{
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-size: 20px;
    color: white;
}
.map-container{
    height: 600px;
}
</style>