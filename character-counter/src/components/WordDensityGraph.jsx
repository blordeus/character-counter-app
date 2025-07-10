import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WordDensityGraph({ text }) {
  const wordCounts = {};
  text.trim().split(/\s+/).filter(Boolean).forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]).slice(0, 10);
  const data = {
    labels: sortedWords,
    datasets: [
      {
        label: "Word Frequency",
        data: sortedWords.map((word) => wordCounts[word]),
        backgroundColor: "rgb(255, 159, 0)",
        borderRadius: 4, // Add a slight border radius to the bars     
         },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Top 10 Word Frequencies", font: { size: 24, weight: "bold" } },
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="w-full bg-neutral-0 dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
      {text ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-center text-[var(--color-placeholder)]">No text entered yet</p>
      )}
    </div>
  );
}

export default WordDensityGraph;