import * as echarts from 'echarts/core'
import { RadarChart, LineChart, BarChart, PictorialBarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TooltipComponent, GridComponent, ToolboxComponent, TitleComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'

echarts.use([RadarChart, CanvasRenderer, LegendComponent, TooltipComponent, PieChart, GridComponent, ToolboxComponent, LineChart, BarChart, TitleComponent, PictorialBarChart])

// 导出 echarts
export default echarts