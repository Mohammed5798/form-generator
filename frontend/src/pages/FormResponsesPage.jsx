import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import Header from "../components/Header"; 
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FormResponsesPage = () => {
  const [activeTab, setActiveTab] = useState("responses");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // مثال على البيانات
  const chartData = {
    labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
    datasets: [
      {
        data: [12, 8, 7, 5],
        backgroundColor: ["#6040DF", "#7D58F0", "#9E80F3", "#C3AEF9"],
        hoverOffset: 4,
      },
    ],
  };
  
  const handleDownload = () => {
    alert("تم تنزيل الملف بنجاح (هذا مثال توضيحي)!");
  };
  
  const handleDeleteAll = () => {
    alert("تم حذف جميع الردود بنجاح (هذا مثال توضيحي)!");
  };
  
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />

      <h2 className="text-2xl font-semibold mt-5 p-6 mx-8">Form Responses</h2>

      {/* Tabs */}
      <div className="flex space-x-8 px-6 mx-8">
        <button
          onClick={() => setActiveTab("questions")}
          className={`pb-2 ${activeTab === "questions"
            ? "text-[#6040DF] font-bold border-b-2 border-[#6040DF]"
            : "text-gray-500"
            }`}
        >
          Questions
        </button>
        <button
          onClick={() => setActiveTab("responses")}
          className={`pb-2 ${activeTab === "responses"
            ? "text-[#6040DF] font-bold border-b-2 border-[#6040DF]"
            : "text-gray-500"
            }`}
        >
          Responses
        </button>
      </div>

        {/* Main Stats Section */}
        <div className="grid grid-cols-2 gap-6 mt-6 mx-14">
            {/* Left - Interactive Doughnut chart */}
            <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex flex-row space-x-8 items-center justify-center">
                    <div className="w-64 h-64">
                        <Pie
                            data={chartData}
                            options={{
                            plugins: {
                            legend: { display: false, },
                            tooltip: { enabled: true, },
                            },
                            elements: {
                            arc: { borderWidth: 1, },
                            },
                            onHover: (_, elements) => {
                            if (elements.length > 0) {
                                setHoveredIndex(elements[0].index);
                            } else {
                                setHoveredIndex(null);
                            }
                            },
                            responsive: true,
                            maintainAspectRatio: false,
                        }}

                        />
                    </div>

                    {/* Right - Chart Options */}
                    <div className="flex flex-col space-y-4">
                        {chartData.labels.map((label, index) => (
                            <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`flex items-center space-x-2 cursor-pointer rounded p-1 
                            ${hoveredIndex === index ? "" : ""}`}
                        >
                            <div
                            className={`w-4 h-4 rounded-full`}
                            style={{
                                backgroundColor: chartData.datasets[0].backgroundColor[index],
                                transform: hoveredIndex === index ? "scale(1.3)" : "scale(1)",
                                transition: "transform 0.2s",
                            }}
                            />
                            <span className={hoveredIndex === index ? "font-bold" : ""}>
                            {label}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right - Stats */}
            <div className="flex flex-col space-y-4 justify-center">
            <div className="border border-gray-300 rounded-lg p-6 flex flex-row space-x-3 justify-center items-center h-1/2">
                <span className="text-3xl font-semibold text-[#6040DF]">32</span>
                <h3 className="text-black text-3xl">Responses</h3>
            </div>
            <div className="border border-gray-300 rounded p-6 flex flex-col justify-center items-center h-1/2">
                <div className="text-black text-xl">Most common words</div>
                <div className="text-black text-3xl mt-2">Registration</div>
            </div>
            </div>
        </div>

      {/* Individual Responses */}
      <div className="mt-8 px-14 relative flex items-center">
        <h3 className="font-semibold text-xl">Individual</h3>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 border border-gray-300 rounded-lg p-1 px-4">
            <FiChevronLeft className="cursor-pointer text-gray-600" />
            <span className="font-medium">Alor1234</span>
            <FiChevronRight className="cursor-pointer text-gray-600" />
        </div>
      </div>

        <div className="">
            <div className="flex flex-row items-center justify-center space-x-10 mt-8">
                <div className="border border-gray-300 rounded-lg p-7 space-y-3 w-1/3">
                    <h4 className="text-lg font-semibold">Short Answer</h4>
                    <p className="border-b border-gray-300">John Doe</p>
                    <div className="text-gray-700 text-sm">1 of 32</div>
                </div>
                
                <div className="border border-gray-300 rounded-lg p-7 space-y-3 w-1/2">
                    <h4 className="text-lg font-semibold">Paragraph</h4>
                    <p className="text-lg">
                    With five years of experience in software development, including expertise in python and JavaScript
                    </p>
                </div>
            </div>
        </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-between space-x-4 px-14 mb-8">
        <button
          onClick={handleDownload}
          className="border border-gray-300 rounded-lg p-2 px-4 text-black flex flex-row space-x-3 items-center hover:bg-gray-100"
        >
          <MdOutlineFileDownload size={25}/> Download CSV
        </button>
        <button
          onClick={handleDeleteAll}
          className="bg-[#7050EF] text-white rounded-lg px-5 p-2 hover:bg-[#6040DF]"
        >
          Delete All Responses
        </button>
      </div>
    </div>
  );
};

export default FormResponsesPage;