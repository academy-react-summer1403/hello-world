import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
<div className='relative top-[-85px] left-[280px]'>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 70, label: 'دوره ها' },
            { id: 1, value: 40, label: 'اخبار مقالات ' },
            
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </div>
  );
}