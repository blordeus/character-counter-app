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
        backgroundColor: "rgba(59, 130, 246, 0.6)", // Blue to match theme
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Letter Density", font: { size: 16, weight: "bold" } },
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="w-full bg-[var(--color-card)] dark:bg-gray-800 rounded-lg shadow-md p-6">
      {text ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-center text-[var(--color-placeholder)]">No text entered yet</p>
      )}
    </div>
  );
}

export default LetterDensityGraph;