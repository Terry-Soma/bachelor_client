import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked"
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
};

function Grap_1(props) {
  const labels = [
    "ҮИТС",
    "ИЗХЗС",
    "АУС",
    "ШУС",
    "СЭЗС",
    "ИЗМСҮТ",
    "БСУС",
    "СООСЭ",
    "ЛИЦЕЙ",
    "ДУДТС",
    "ЖЕСАН",
    "РОЯАЛЬ"
    // "ҮНДЭСНИЙ ИНЖЕНЕР ТЕХНОЛОГИЙН СУРГУУЛЬ",
    // "ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ",
    // "АНАГААХ УХААНЫ СУРГУУЛЬ",
    // "Шинжлэх ухааны сургууль",
    // "САНХҮҮ ЭДИЙН ЗАСГИЙН СУРГУУЛЬ",
    // "ИХ ЗАСАГ МЭРГЭЖИЛ СУРГАЛТЫН ҮЙЛДВЭРЛЭЛИЙН ТӨВ",
    // "БОЛОВСРОЛ СОЁЛ УРЛАГИЙН СУРГУУЛЬ",
    // "ЧИНГИС СООСЭ ОЛОН УЛСЫН ХАРИЛЦАА",
    // "ИХ ЗАСАГ ЛИЦЕЙ СУРГУУЛЬ",
    // "ДҮРСЛЭХ УРЛАГ ДИЗАЙН ТЕХНОЛОГИЙН СУРГУУЛЬ",
    // "ЖЭСАН ЧИНГИС ХААН ГАДААД ХЭЛ СОЁЛЫН СУРГУУЛЬ",
    // "РОЯАЛЬ ОЛОН УЛСЫН ИХ СУРГУУЛЬ"
  ];
  var counts = [
    { id: 1, count: 12 },
    { id: 2, count: 4 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
    { id: 5, count: 0 },
    { id: 6, count: 0 },
    { id: 7, count: 0 },
    { id: 8, count: 0 },
    { id: 9, count: 0 },
    { id: 10, count: 0 },
    { id: 11, count: 0 },
    { id: 12, count: 0 }
  ];
  var lol = [20, 10, 15, 7, 14, 8, 4, 0, 12, 17, 11, 7, 3];
  // props.data.map((p) => {
  //   props.data2.map((a) => {
  //     props.data3.map((i) => {
  //       counts.map((n) => {
  //         if (n.id !== p.Id) {
  //           return null;
  //         }
  //         console.log("something");
  //         if (p.Id !== a.schoolId) {
  //           return null;
  //         }
  //         if (a.Id !== i.hutulburId) {
  //           return null;
  //         }
  //         lol[n.id - 1]++;
  //       });
  //     });
  //   });
  // });
  const data = {
    labels,
    datasets: [
      {
        label: "Мэргэжилүүд",
        data: lol,
        backgroundColor: [
          "#007e34",
          "#063b99",
          "#1b539d",
          "#203da2",
          "#cea421",
          "#219e32",
          "#cc5537",
          "#df455f",
          "#d45c30",
          "#713283",
          "#0596d3",
          "#5b1317"
        ]
      }
    ]
  };

  return <Bar options={options} data={data} />;
}
export default Grap_1;
