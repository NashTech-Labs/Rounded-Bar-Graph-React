import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  xAxis: [
    {
      scaleType: 'band',
      dataKey: 'month',
      categoryGapRatio: 0.3,
      barGapRatio: 0.1,
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
  width: 1000,
  height: 400,
  slotProps: {
    axisLine: { display: 'none' },
    axisTick: { display: 'none' },
    bar: {
      rx: 7,
      style: { width: '10px', shapeRendering: 'geometricPrecision' },
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function BasicBars({ dataset }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <BarChart
        dataset={dataset}
        series={[
          { dataKey: 'london', label: 'London', valueFormatter },
          { dataKey: 'paris', label: 'Paris', valueFormatter },
          { dataKey: 'newYork', label: 'New York', valueFormatter },
          { dataKey: 'canada', label: 'Canada', valueFormatter },
        ]}
        {...chartSetting}
      />
    </Box>
  );
}
