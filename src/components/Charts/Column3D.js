// STEP 1 - Include Dependencies
// Include react
import React from 'react'

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts'

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart)

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'column3d', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Popular',
        yAxisName: 'Stars',
        yAxisNameFontSize: 16,
        xAxisName: 'Repos',
        xAxisNameFontSize: 16,
        showCanvasBorder: 0,
        showAlternateHGridColor: 0,
        usePlotGradientColor: 0,
        valueFontSize: 16,
        placeValuesInside: 0,
        divLineColor: '#102a42',
        divLineAlpha: 15,
        captionFontColor: '#000000',
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: 'Roboto',
        baseFont: 'Open Sans',
        showBorder: '0',
        borderColor: '#666666',
        borderThickness: '4',
        borderAlpha: '80',
        baseFontSize: 16,
        baseFontColor: '#000000',
        smartLineColor: '#617d98',
        showShadow: 1,
        showPlotBorder: 0,
        paletteColors:
          '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: 'ffffff,207398',
      },
      // Chart Data
      data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
