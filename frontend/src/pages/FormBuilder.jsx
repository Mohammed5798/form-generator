import '../style/App.css';
import React, { useState } from "react";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { MdShortText, MdSubject, MdDateRange } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { BsUiRadios } from "react-icons/bs";
import { HiOutlineChevronDoubleDown, HiOutlineDownload } from "react-icons/hi";

const FormBuilderPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, type: "short", title: "Short Answer", description: "", required: true },
    { id: 3, type: "file", title: "File Upload", description: "", required: false },
  ]);
  const [activeTab, setActiveTab] = useState("questions");
  const [formImage, setFormImage] = useState(null);
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

    const addField = (type) => {
    const labels = {
      short: "Short Answer",
      paragraph: "Paragraph",
      multiple: "Multiple Choice",
      checkbox: "Checkboxes",
      dropdown: "Dropdown",
      file: "File Upload",
      date: "Date"
    };
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


    const fieldTypes = [
  { type: "short", label: "Short Answer", icon: <MdShortText className="mr-2" /> },
  { type: "paragraph", label: "Paragraph", icon: <MdSubject className="mr-2" /> },
  { type: "multiple", label: "Multiple Choice", icon: <BsUiRadios className="mr-2" /> },
  { type: "checkbox", label: "Checkboxes", icon: <FaCheckSquare className="mr-2" /> },
  { type: "dropdown", label: "Dropdown", icon: <HiOutlineChevronDoubleDown className="mr-2" /> },
  { type: "file", label: "File Upload", icon: <HiOutlineDownload className="mr-2" /> },
  { type: "date", label: "Date", icon: <MdDateRange className="mr-2" /> },
];



  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="builder-container flex flex-1">
        <div className={`left-panel p-10 space-y-6 ${activeTab === "questions" ? "w-1/2 border-r border-gray-300 ml-14" : "w-1/2 ml-14"}`}>
          <h2 className="text-2xl font-bold">Edit Your Form</h2>
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("questions")}
              className={`pb-2 ${activeTab === "questions" ? "cursor-pointer text-[#7050EF] font-bold border-b-2 border-[#7050EF]" : "cursor-pointer text-gray-500"}`}
            >
              Questions
            </button>
            <button
              onClick={() => setActiveTab("responses")}
              className={`pb-2 ${activeTab === "responses" ? "cursor-pointer text-[#7050EF] font-bold border-b-2 border-[#7050EF]" : "cursor-pointer text-gray-500"}`}
            >
              Responses
            </button>
          </div>

          {activeTab === "questions" && (
            <>
              <div className="card flex flex-col w-96 text-center">
                <label htmlFor="form-image-upload" className="cursor-pointer flex flex-row items-center justify-center font-semibold bg-[#ddd4ff] rounded-lg p-2 text-[#7050EF] text-lg hover:bg-[#a38cff]">
                  <img src='/image.png' className='w-7 mr-1' /> Add Image
                </label>
                <input
                  type="file"
                  id="form-image-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormImage(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>

              <div className="card w-96 mt-4 mb-5 flex flex-col items-start space-y-2 border border-gray-300 rounded-lg p-4">
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Form Title"
                  className="p-2 w-full focus:outline-none focus:border-[#6040DF] font-semibold text-lg"
                />
                <input
                  type="text"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Form description"
                  className="border border-gray-300 rounded-xl p-2 w-full focus:outline-none focus:border-[#6040DF]"
                />
              </div>

                <DragDropContext onDragEnd={(result) => {
                  if (!result.destination) return;
                  const items = Array.from(questions);
                  const [reorderedItem] = items.splice(result.source.index, 1);
                  items.splice(result.destination.index, 0, reorderedItem);
                  setQuestions(items);
                  }}>
                  <Droppable droppableId="questions">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {questions.map((q, index) => (
                          <Draggable key={q.id} draggableId={q.id.toString()} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="card p-4 rounded-lg border border-gray-300 flex flex-col w-96 mb-4 bg-white"
                               >

                                <div className="flex justify-between items-center">
                                  <input
                                    type="text"
                                    value={q.title}
                                    onChange={(e) => updateField(q.id, "title", e.target.value)}
                                    placeholder="Question Title"
                                    className="p-2 text-lg w-full font-semibold"
                                  />
                                  <div className="flex items-center space-x-2 ml-2">
                                    <span className="text-sm text-gray-600">Required</span>
                                    <div
                                      className="cursor-pointer"
                                      onClick={() => updateField(q.id, "required", !q.required)}
                                    >
                                      {q.required ? (
                                        <FiToggleRight size={24} className="text-[#7050EF]" />
                                      ) : (
                                        <FiToggleLeft size={24} className="text-gray-400 hover:text-[#7050EF]" />
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <input
                                  type="text"
                                  value={q.description}
                                  onChange={(e) => updateField(q.id, "description", e.target.value)}
                                  placeholder="Description (optional)"
                                  className=" p-2 text-sm w-full"
                                />

                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    {q.type === "short" && (
                                      <input
                                        type="text"
                                        placeholder="Short answer"
                                        className="border border-gray-300 rounded-xl p-2 text-sm w-full"
                                        disabled
                                      />
                                    )}

                                    {q.type === "paragraph" && (
                                      <textarea
                                        placeholder="Paragraph answer"
                                        className="border border-gray-300 rounded-xl p-2 text-sm w-full"
                                        rows={3}
                                        disabled
                                      />
                                    )}

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
                                        <span className="file-choosed text-gray-600">
                                          {q.file || "No file chosen"}
                                        </span>
                                      </div>
                                    )}

                                    {q.type === "checkbox" && (
                                      <div className="flex flex-col space-y-1 text-sm text-gray-600">
                                        <label><input type="checkbox" disabled /> Option A</label>
                                        <label><input type="checkbox" disabled /> Option B</label>
                                      </div>
                                    )}

                                    {q.type === "dropdown" && (
                                      <select
                                        className="border border-gray-300 rounded-xl p-2 text-sm w-full"
                                        disabled
                                      >
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                      </select>
                                    )}
                                  </div>

                                  <button onClick={() => removeField(q.id)} className="text-gray-400 hover:text-red-500 ml-4 mt-1" title="Delete">
                                    <RiDeleteBinLine size={20} />
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}

                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              

              <button onClick={() => setShowModal(true)}
                className="card cursor-pointer text-md text-black border border-gray-300 rounded-xl p-2 w-96 hover:bg-[#5800DF] hover:text-[white] focus:outline-none focus:border-[#7050EF]"
              >
                + Add New Field
              </button>
              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                  <div className="bg-white w-80 rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Add Field</h3>
                      <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-red-500">&times;</button>
                    </div>

                    <div className="flex flex-col space-y-3">
                      {fieldTypes.map(({ type, label, icon }) => (
                        <button
                          key={type}
                          onClick={() => { addField(type); setShowModal(false); }}
                          className="flex items-center text-left hover:bg-gray-100 p-2 border-t border-gray-300 text-gray-700"
                        >
                          {icon}
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}


          {/* Responses Part */}
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

        {/* Right Panel */}
        {activeTab === "questions" && (
          <div className="right-panel w-2/3 p-8 space-y-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Live Preview</h2>
            <div className="right-panel-child right bg-white p-7 py-5 w-96 rounded-lg border border-gray-300 space-y-4">
              {formImage && <img src={formImage} alt="form" className="h-20 rounded-lg" />}
              <div className='flex flex-col items-start justify-start'>
                <h3 className="text-xl font-semibold">{formTitle}</h3>
                <p className="text-ms">{formDescription}</p>
              </div>

              {questions.map((q) => (
                <div key={q.id} className="flex flex-col space-y-2">
                  <label className="font-medium">
                    {q.title}
                    {q.required && <span className="text-red-600"> *</span>}
                  </label>
                  {q.description && <p className="text-sm text-gray-500">{q.description}</p>}

                  {q.type === "short" && (
                    <input
                      type="text"
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-[#6040DF]"
                    />
                  )}

                  {q.type === "paragraph" && (
                    <textarea
                      rows={4}
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-[#6040DF]"
                    />
                  )}

                  {q.type === "checkbox" && (
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Option A</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Option B</span>
                      </label>
                    </div>
                  )}

                  {q.type === "dropdown" && (
                    <select className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#6040DF]">
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  )}

                  {q.type === "file" && (
                    <div className="flex items-center space-x-3">
                      <input id={`file-input-${q.id}`} type="file" className="hidden" />
                      <label htmlFor={`file-input-${q.id}`} className="cursor-pointer border border-gray-300 px-2 py-1 rounded-lg">
                        Choose File
                      </label>
                      <span className="text-gray-600 text-sm">{q.file || "No file chosen"}</span>
                    </div>
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
