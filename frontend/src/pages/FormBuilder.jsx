import '../style/App.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import {Link} from 'react-router-dom';

const FormBuilderPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, type: "short", title: "Short Answer", description: "", required: true },
    // { id: 2, type: "paragraph", title: "Paragraph", description: "", required: false },
    { id: 3, type: "file", title: "File Upload", description: "", required: false },
  ]);

  const [activeTab, setActiveTab] = useState("questions"); // "questions" أو "responses"

  const addField = (type) => {
    const labels = { short: "Short Answer", paragraph: "Paragraph", file: "File Upload" };
    setQuestions((qs) => [
      ...qs,
      { id: Date.now(), type, title: labels[type], description: "", required: false },
    ]);
  };
  const updateField = (id, key, value) => {
    setQuestions((qs) =>
      qs.map((q) => (q.id === id ? { ...q, [key]: value } : q))
    );
  };
  const removeField = (id) => {
    setQuestions((qs) => qs.filter((q) => q.id !== id));
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="builder-container flex flex-1">
        {/* Left panel */}
        <div className={`left-panel p-10 space-y-6 ${activeTab === "questions" ? "w-1/2 border-r border-gray-300 ml-14" : "w-1/2 ml-14"}`}>

          <h2 className="text-2xl font-bold">Edit Your Form</h2>

          {/* Tabs */}
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("questions")}
              className={`pb-2 ${activeTab === "questions"
                ? "cursor-pointer text-[#7050EF] font-bold border-b-2 border-[#7050EF]"
                : "cursor-pointer text-gray-500"
              }`}
            >
              Questions
            </button>
            <button
              onClick={() => setActiveTab("responses")}
              className={`pb-2 ${activeTab === "responses"
                ? "cursor-pointer text-[#7050EF] font-bold border-b-2 border-[#7050EF]"
                : "cursor-pointer text-gray-500"
              }`}
            >
              Responses
            </button>
          </div>

          {activeTab === "questions" && (
            <>
              {questions.map((q) => (
                <div
                  key={q.id}
                  className="card p-4 rounded-lg border border-gray-300 flex flex-col space-y-3 w-96"
                >
                  <div className="flex justify-between items-center">
                    <strong className="font-semibold text-lg">{q.title}</strong>
                    <div
                      className="cursor-pointer flex items-center space-x-1"
                      title={q.required ? "Required" : "Optional"}
                      onClick={() => updateField(q.id, "required", !q.required)}
                    >
                      <span className="text-sm">Required</span>
                      {q.required ? (
                        <FiToggleRight size={24} className="text-[#7050EF] mx-1" />
                      ) : (
                        <FiToggleLeft
                          size={24}
                          className="text-gray-400 hover:text-[#7050EF] mx-1"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-600 text-sm">Description (optional)</span>
                    <div className="flex items-center justify-between space-x-2">
                      {q.type === "file" ? (
                        <div className="flex items-center space-x-2 flex-1">
                          <label
                            htmlFor={`upload-field-${q.id}`}
                            className="cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-xl p-2 text-gray-600 text-sm hover:bg-gray-100 focus:outline-none focus:border-[#7050EF]"
                          >
                            📁 Upload File
                          </label>
                          <input
                            id={`upload-field-${q.id}`}
                            type="file"
                            className="hidden"
                            onChange={(e) =>
                              updateField(
                                q.id,
                                "fileName",
                                e.target.files?.[0]?.name || ""
                              )
                            }
                          />
                          {q.fileName && (
                            <span className="text-gray-600 text-sm">{q.fileName}</span>
                          )}
                        </div>
                      ) : (
                        <select
                          value={q.shortAnswerOption || ""}
                          onChange={(e) =>
                            updateField(q.id, "shortAnswerOption", e.target.value)
                          }
                          className="border border-gray-300 rounded-xl p-2 text-gray-600 text-sm flex-1 focus:outline-none focus:border-[#7050EF]"
                        >
                          {q.type === "short" && (
                            <option value="">Short Answer Text</option>
                          )}
                          {q.type === "paragraph" && (
                            <option value="">Detailed Answer</option>
                          )}
                          <option value="oneWord">One Word</option>
                          <option value="oneSentence">One Sentence</option>
                          <option value="custom">Custom</option>
                        </select>
                      )}
                      <button
                        onClick={() => removeField(q.id)}
                        className="text-gray-400 hover:text-red-500 border border-gray-300 p-1 rounded-md flex-shrink-0"
                        title="Delete"
                      >
                        <RiDeleteBinLine size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => addField("short")}
                className="card cursor-pointer text-md text-black border border-gray-300 rounded-xl p-2 w-96 hover:bg-[#5800DF] hover:text-[white] focus:outline-none focus:border-[#7050EF]"
              >
                + Add Short Answer
              </button>
            </>
          )}

          {activeTab === "responses" && (
            <div className="responses flex flex-col space-y-3 items-center justify-center w-6xl p-4">
              <img src="/logo1.png" alt="user" className="" />
              <h3 className="text-lg font-bold mt-4">No form published yet</h3>
              <p className="text-gray-600 text-md text-center mt-2">
                You haven’t published your form yet. Once it’s published and responses start coming in, they will appear here.
              </p>
              <Link to="/createForm">
                <button className="mt-4 bg-[#6040DF] text-white rounded-lg py-2 px-7 hover:bg-[#5020CF]">
                  Continue Editing
                </button>
              </Link>
            </div>
          )}

        </div>


        {/* Right panel */}
        {activeTab === "questions" && (
          <div className="right-panel w-2/3 p-8 space-y-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Live Preview</h2>

            <div className="right-panel-child right bg-white p-7 py-5 w-96 rounded-lg border border-gray-300 space-y-4">
              
              <img src="/Frame.png" alt="calendar" className="h-20 rounded-lg"/>
              <div className='flex flex-col items-start justify-start'>
                <h3 className="text-xl font-semibold">Preview a Form</h3>
                <p className="text-ms">Please fill out the form below:</p>
              </div>

              {/* تكرار الأسئلة */}
              {questions.map((q) => (
                <div key={q.id} className="flex flex-col space-y-1">
                  <label className="font-medium">
                    {q.title}
                    {q.required && <span className="text-red-600"> *</span>}
                  </label>

                  {q.type === "short" && (
                    <input
                      type="text"
                      placeholder=""
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-[#6040DF]"
                    />
                  )}

                  {/* {q.type === "paragraph" && (
                    <textarea
                      placeholder=""
                      rows="4"
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-[#6040DF]"
                    />
                  )} */}

                  {q.type === "file" && (
                    <div className="flex items-center space-x-3">
                      <input
                        id={`file-input-${q.id}`}
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          updateField(q.id, "file", e.target.files?.[0]?.name || "")
                        }
                      />
                      <label
                        htmlFor={`file-input-${q.id}`}
                        className="min-w-[125px] cursor-pointer border border-gray-300 rounded-lg p-1 text-center hover:bg-gray-200 focus:outline-none focus:border-[#6040DF]"
                      >
                        Choose File
                      </label>
                      <span className="file-choosed text-gray-600">{q.file || "No file chosen"}</span>
                    </div>
                  )}

                  {q.description && (
                    <span className="text-gray-500 text-sm">{q.description}</span>
                  )}
                </div>
              ))}

              <button type="submit" className="w-full mt-4 bg-[#6040DF] text-white py-2 rounded-lg hover:bg-[#4b30c4] transition mb-8">
                Submit
              </button>
            </div>
          </div>
        )}


      </div>



      {/* Footer buttons */}
      <div className="footer-buttons flex justify-between items-center p-4 px-14 border-t border-gray-300">
        <Link to="/createForm">
            <button className="cursor-pointer px-4 py-2 border border-gray-300 rounded flex flex-row justify-center items-center focus:outline-none focus:border-[#7050EF]">
            <IoIosArrowBack /> Back
            </button>
        </Link>
        <div className="space-x-2">
          <Link to="/preview">
          <button className="cursor-pointer px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7050EF]">
            Preview
          </button>
          </Link>
          <Link to="/qrPage">
          <button className="cursor-pointer px-6 py-2 bg-[#7050EF] text-white rounded">Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormBuilderPage;