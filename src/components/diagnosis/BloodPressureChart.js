import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js';

import  { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export const BloodPressureChart = ({diagnosisHistory}) => {
    const lastSixMonths =
    diagnosisHistory.slice(0, 6).reverse();

  const labels = lastSixMonths.map(
    (item) => `${item.month}, ${item.year}`
  );

  const systolicData = lastSixMonths.map(
    (item) => item.blood_pressure.systolic.value
  );

  const diastolicData = lastSixMonths.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,

    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 4
      },

      {
        llabel: "Diastolic",
      data: diastolicData,
      borderColor: "#8C6FE6",
      tension: 0.4,
      pointRadius: 4,
      },
    ],
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false, // IMPORTANT
  plugins: {
    legend: {
      display: false, // design doesn't show top legend
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { color: "#eee" },
      ticks: { stepSize: 20 },
    },
  },
};

  return (
    <div style={{ height: "320px" }}>
  <Line data={data} options={options} />
</div>
  );
}