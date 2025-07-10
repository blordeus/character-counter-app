import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WordDensityGraph({ text }) {
  const wordCounts = {};
  text.trim().split(/\s+/).filter(Boolean).forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]).slice(0, 10); // Top 10 words
  const data = {
    labels: sortedWords,
    datasets: [
      {
        label: "Word Frequency",
        data: sortedWords.map((word) => wordCounts[word]),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Top 10 Word Frequencies" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-full max-w-md mt-6">
      <Bar data={data} options={options} />
    </div>
  );
}

export default WordDensityGraph;