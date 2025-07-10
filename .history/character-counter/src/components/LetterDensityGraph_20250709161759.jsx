import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function LetterDensityGraph({ text }) {
  const letterCounts = {};
  text.toLowerCase().replace(/[^a-z]/g, "").split("").forEach((char) => {
    letterCounts[char] = (letterCounts[char] || 0) + 1;
  });

  const data = {
    labels: Object.keys(letterCounts).sort(),
    datasets: [
      {
        label: "Letter Frequency",
        data: Object.values(letterCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Letter Density" } },
  };

  return (
    <div className="w-full max-w-md">
      <Bar data={data} options={options} />
    </div>
  );
}

export default LetterDensityGraph;