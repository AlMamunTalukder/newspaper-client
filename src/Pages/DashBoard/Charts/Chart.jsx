import { Chart as ChartGoogle } from "react-google-charts";

export const pieChart = [
  ["", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const pieChartOptions = {
  title: "My Daily Activities",
};

// ---------------
export const BarChart = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

export const BarChartOptions = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

//--------------------
export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const Chart = () => {
  return (
    <div className="-mt-96 ml-96 max-w-full ">
      <div className="ml-36 mb-5 text-center ">
        <h2 className="w-96">Pie Chart</h2>
        <ChartGoogle
          chartType="PieChart"
          data={pieChart}
          options={pieChartOptions}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className=" flex gap-5 text-center">
        <div>
          <h2 className="w-96">Bar Chart</h2>
          <ChartGoogle
            chartType="BarChart"
            width="100%"
            height="400px"
            data={BarChart}
            options={BarChartOptions}
          />
        </div>
        <div>
          <h2 className="w-96">Line Chart</h2>
          <ChartGoogle
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
