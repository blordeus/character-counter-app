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
        backgroundColor: "rgb(211,160,250)",
        borderRadius: 4, // Add a slight border radius to the bars     
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Letter Density", font: { size: 24, weight: "bold" } },
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="w-full pb-8 bg-neutral-0 rounded-lg shadow-md p-6">
      {text ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-center text-[var(--color-placeholder)]">No text entered yet</p>
      )}
    </div>
  );
}

export default LetterDensityGraph;

