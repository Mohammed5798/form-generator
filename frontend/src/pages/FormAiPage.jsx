import React, { useState } from "react";
import Header from "../components/Header";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const FormAiPage = () => {
const [selectedImage, setSelectedImage] = useState(null);
const [questions, setQuestions] = useState([]);
const [showQuestionTypeModal, setShowQuestionTypeModal] = useState(false);

const handleUploadClick = () => {
    document.getElementById("upload-input").click();
};
const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
};
const handleRemoveImage = () => {
    setSelectedImage(null);
    const input = document.getElementById("upload-input");
    if (input) input.value = ""; 
};

const handleAddQuestion = (type) => {
    const typeMap = {
        "Multiple Choice": "multiple",
        "Short Answer": "short",
        "File Upload": "file",
        Date: "date",
        Dropdown: "dropdown",
    };
    const newQuestion = {
        type: typeMap[type],
        question: "",
        isBold: false,
        isItalic: false,
        isUnderline: false,
        answer:
            typeMap[type] === "multiple" || typeMap[type] === "dropdown"
            ? []
            : typeMap[type] === "file"
                ? null
                : "",
        isEditing: true,
    };
    setQuestions([...questions, newQuestion]);
    setShowQuestionTypeModal(false);
};
const handleQuestionChange = (index, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][key] = value;
    setQuestions(updatedQuestions);
};
const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    if (
    updatedQuestions[index].type === "multiple" ||
    updatedQuestions[index].type === "dropdown"
    ) {
    updatedQuestions[index].answer.push(""); 
    setQuestions(updatedQuestions);
    }
};
    const handleOptionChange = (qIndex, oIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].answer[oIndex] = value;
        setQuestions(updatedQuestions);
    };
    const handleDeleteOption = (qIndex, oIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].answer.splice(oIndex, 1);
        setQuestions(updatedQuestions);
    };
    const handleDeleteQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };
    const handleToggleEditQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].isEditing = !updatedQuestions[index].isEditing;
        setQuestions(updatedQuestions);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const updatedQuestions = Array.from(questions);
        const [movedItem] = updatedQuestions.splice(result.source.index, 1);
        updatedQuestions.splice(result.destination.index, 0, movedItem);
        setQuestions(updatedQuestions);
    };

const [formTitle, setFormTitle] = useState({ text: '', isBold: false, isItalic: false, isUnderline: false, size: '1rem', color: '#000000' });
const [formDescription, setFormDescription] = useState({ text: '', isBold: false, isItalic: false, isUnderline: false, size: '1rem', color: '#000000' });
const [showTitleTools, setShowTitleTools] = useState(false);
const [showDescriptionTools, setShowDescriptionTools] = useState(false);





return (
    <div className="min-h-screen flex flex-col">
        <Header />

        <div className="continer flex flex-1 justify-center items-start p-8 space-x-6">
            {/* Left Side */}
            <div className="left bg-white rounded-lg px-[15px] py-20 shadow flex flex-col items-center space-y-10 border border-gray-300 w-1/3">
                <h2 className="text-lg font-bold text-center">Describe your form To Generate By AI</h2>
                <textarea
                    placeholder="Registration Form for a Programming Workshop"
                    className="max-w-full w-92 p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                    required>
                </textarea>
                <button className="generate-button max-w-full bg-[#7050EF] text-white rounded-xl w-80 p-3 mb-28 hover:bg-[#7000EF]">
                    Generate Form
                </button>
            </div>

            {/* Right Side */}
            <div className="right-side-container mt-[-15px] p-4 w-full max-w-sm space-y-3">
                <button
                    className="text-black rounded-2xl text-xl w-full py-8 hover:bg-gray-200 border border-gray-800 flex justify-center"
                    onClick={handleUploadClick}
                >
                    Upload Image +
                </button>
                <input id="upload-input" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                {selectedImage && (
                    <div className="w-full relative rounded-lg overflow-hidden border border-gray-300">
                        <img src={selectedImage} alt="Uploaded" className="w-full h-48 object-cover"/>
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-red-600"
                            title="Remove Image" onClick={handleRemoveImage}
                        >
                        ×
                        </button>
                    </div>
                )}

                <div className="right bg-white rounded-lg p-6 shadow flex flex-col items-center space-y-4 border border-gray-300 w-full">
                    <div className="w-80 space-y-3">
                        <div className="relative mb-5"> 
                            <label className="text-gray-800 text-md">Form Title</label>
                            <input
                                placeholder="Enter form title..."
                                value={formTitle.text}
                                onChange={(e) =>
                                setFormTitle({ ...formTitle, text: e.target.value })
                                }
                                onFocus={() => setShowTitleTools(true)}
                                onBlur={() => setTimeout(() => setShowTitleTools(false), 200)}
                                style={{
                                color: formTitle.color,
                                fontSize: formTitle.size,
                                }}
                                className={`w-full mt-1 p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#6040DF]
                                    ${formTitle.isBold ? "font-bold" : ""} 
                                    ${formTitle.isItalic ? "italic" : ""}
                                    ${formTitle.isUnderline ? "underline" : ""}`
                                }
                                required
                            />
                            {showTitleTools && (
                                <div className="absolute top-[100%] left-0 mt-0.5 flex space-x-1 bg-white p-1 rounded-xl border border-gray-300 shadow-lg z-10">
                                <button
                                    title="Bold"
                                    className={`px-2 rounded-full hover:bg-gray-200 ${formTitle.isBold ? "bg-gray-400" : ""}`}
                                    onMouseDown={(e) => {
                                    e.preventDefault();
                                    setFormTitle({ ...formTitle, isBold: !formTitle.isBold });
                                    }}
                                >
                                    <b className="text-lg">B</b>
                                </button>
                                <button
                                    title="Italic"
                                    className={`px-2 rounded-full hover:bg-gray-200 ${formTitle.isItalic ? "bg-gray-400" : ""}`}
                                    onMouseDown={(e) => {
                                    e.preventDefault();
                                    setFormTitle({ ...formTitle, isItalic: !formTitle.isItalic });
                                    }}
                                >
                                    <i className="text-lg">I</i>
                                </button>
                                <button
                                    title="Underline"
                                    className={`px-2 rounded-full hover:bg-gray-200 ${formTitle.isUnderline ? "bg-gray-400" : ""}`}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        setFormTitle({ ...formTitle, isUnderline: !formTitle.isUnderline });
                                    }}
                                    >
                                    <span className="text-lg underline">U</span>
                                </button>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <label className="text-gray-800 text-md">Form Description</label>
                            <textarea
                                placeholder="Describe Your Form..."
                                value={formDescription.text}
                                onChange={(e) =>
                                setFormDescription({ ...formDescription, text: e.target.value })
                                }
                                rows={3}
                                onFocus={() => setShowDescriptionTools(true)}
                                onBlur={() => setTimeout(() => setShowDescriptionTools(false), 200)}
                                style={{
                                color: formDescription.color,
                                fontSize: formDescription.size,
                                }}
                                className={`w-full mt-1 p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#6040DF] 
                                    ${formDescription.isBold ? "font-bold" : ""}
                                    ${formDescription.isItalic ? "italic" : ""}
                                    ${formDescription.isUnderline ? "underline" : ""}`
                                }
                            />
                            {showDescriptionTools && (
                                <div className="absolute top-[97%] left-0 flex space-x-1 bg-white p-1 rounded-xl border border-gray-300 shadow-lg z-10">
                                    <button
                                        title="Bold"
                                        className={`px-2 rounded-full hover:bg-gray-200 ${formDescription.isBold ? "bg-gray-400" : ""}`}
                                        onMouseDown={(e) => {
                                        e.preventDefault();
                                        setFormDescription({ ...formDescription, isBold: !formDescription.isBold });
                                        }}
                                    >
                                        <b className="text-lg">B</b>
                                    </button>
                                    <button
                                        title="Italic"
                                        className={`px-2 rounded-full hover:bg-gray-200 ${formDescription.isItalic ? "bg-gray-400" : ""}`}
                                        onMouseDown={(e) => {
                                        e.preventDefault();
                                        setFormDescription({ ...formDescription, isItalic: !formDescription.isItalic });
                                        }}
                                    >
                                        <i className="text-lg">I</i>
                                    </button>
                                    <button
                                        title="Underline"
                                        className={`px-2 rounded-full hover:bg-gray-200 ${formDescription.isUnderline ? "bg-gray-400" : ""}`}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            setFormDescription({ ...formDescription, isUnderline: !formDescription.isUnderline });
                                        }}
                                        >
                                        <span className="text-lg underline">U</span>
                                    </button>
                                </div>
                            )}
                        </div>


                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="questionsList">
                                {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {questions.map((q, index) => (
                                    <Draggable key={index} draggableId={String(index)} index={index}>
                                        {(provided) => (
                                            <div className="space-y-3 border-t pt-3 relative" ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <div className="flex justify-between items-center">
                                                <label className="text-gray-800 font-semibold text-md">
                                                    Question {index + 1} ({q.type})
                                                </label>
                                                <div className="space-x-2">
                                                    <button
                                                    className="text-black rounded p-1 hover:bg-[#6040DF]"
                                                    title={q.isEditing ? "Save" : "Edit"}
                                                    onClick={() => handleToggleEditQuestion(index)}
                                                    >
                                                    {q.isEditing ? "💾" : "✏️"}
                                                    </button>
                                                    <button
                                                    className="text-black rounded p-1 hover:bg-[#6040DF]"
                                                    title="Delete Question"
                                                    onClick={() => handleDeleteQuestion(index)}
                                                    >
                                                    🗑️
                                                    </button>
                                                </div>
                                                </div>

                                                {q.isEditing ? (
                                                <>
                                                    <div className="flex space-x-1 mt-2">
                                                    <button
                                                        title="Bold"
                                                        onMouseDown={(e) => {
                                                        e.preventDefault();
                                                        handleQuestionChange(index, "isBold", !q.isBold);
                                                        }}
                                                        className={`px-2 rounded-full hover:bg-gray-200 ${q.isBold ? "bg-gray-300" : ""}`}
                                                    >
                                                        <b className="text-lg">B</b>
                                                    </button>
                                                    <button
                                                        title="Italic"
                                                        onMouseDown={(e) => {
                                                        e.preventDefault();
                                                        handleQuestionChange(index, "isItalic", !q.isItalic);
                                                        }}
                                                        className={`px-2 rounded-full hover:bg-gray-200 ${q.isItalic ? "bg-gray-300" : ""}`}
                                                    >
                                                        <i className="text-lg">I</i>
                                                    </button>
                                                    <button
                                                        title="Underline"
                                                        onMouseDown={(e) => {
                                                        e.preventDefault();
                                                        handleQuestionChange(index, "isUnderline", !q.isUnderline);
                                                        }}
                                                        className={`px-2 rounded-full hover:bg-gray-200 ${q.isUnderline ? "bg-gray-300" : ""}`}
                                                    >
                                                        <span className="text-lg underline">U</span>
                                                    </button>
                                                    </div>

                                                    <input
                                                    placeholder="Enter question..." value={q.question}
                                                    onChange={(e) => handleQuestionChange(index, "question", e.target.value) }
                                                    className={`w-full mt-1 p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#6040DF] 
                                                        ${q.isBold ? "font-bold" : ""} 
                                                        ${q.isItalic ? "italic" : ""} 
                                                        ${q.isUnderline ? "underline" : ""}`}
                                                    />
                                                    {q.type === "multiple" && (
                                                        <div className="space-y-2">
                                                            {q.answer.map((opt, oIndex) => (
                                                                <div key={oIndex} className="flex items-center space-x-2">
                                                                    <input placeholder={`Option ${oIndex + 1}`} value={opt}
                                                                        onChange={(e) => handleOptionChange(index, oIndex, e.target.value) }
                                                                        className="w-full p-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                                                                    />
                                                                    <button className="text-red-600" onClick={() => handleDeleteOption(index, oIndex)}>❌</button>
                                                                </div>
                                                            ))}
                                                            <button
                                                                className="bg-gray-100 text-gray-600 rounded-2xl w-full p-2 hover:bg-gray-200 border border-gray-300"
                                                                onClick={() => handleAddOption(index)}
                                                            >
                                                                + Add Option
                                                            </button>
                                                        </div>
                                                    )}
                                                    {q.type === "short" && (
                                                        <input
                                                            placeholder="Short Answer..."
                                                            disabled
                                                            className="w-full mt-1 p-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-600"
                                                        />
                                                    )}
                                                    {q.type === "file" && (
                                                        <div className="space-y-2 relative">
                                                            <input 
                                                                type="file"
                                                                onChange={(e) => {const file = e.target.files[0]; handleQuestionChange(index, "answer", file); }}
                                                                className="w-full mt-1 p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                                                            />
                                                            {q.answer && (
                                                                <div className="mt-2 relative">
                                                                    {q.answer.type.startsWith("image/") ? (
                                                                        <img src={URL.createObjectURL(q.answer)} alt={q.answer.name} className="w-40 h-40 object-cover rounded border border-gray-300"/>
                                                                        ) : q.answer.type === "application/pdf" ? (
                                                                        <embed src={URL.createObjectURL(q.answer)} type="application/pdf" className="w-full h-64 rounded border border-gray-300"/>
                                                                        ) : (
                                                                        <div className="text-gray-600 text-sm flex flex-col space-y-1">
                                                                            <span> Uploaded File:{" "} <span className="font-bold">{q.answer.name}</span></span>
                                                                            <a href={URL.createObjectURL(q.answer)} download={q.answer.name} className="text-blue-600 hover:underline">
                                                                                Download File
                                                                            </a>
                                                                        </div>
                                                                    )}
                                                                    <button
                                                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-red-600"
                                                                        title="Remove File"
                                                                        onClick={() => handleQuestionChange(index, "answer", null) }
                                                                        >
                                                                        ×
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                    {q.type === "dropdown" && (
                                                        <div className="space-y-2">
                                                            {q.answer.map((opt, oIndex) => (
                                                                <div key={oIndex} className="flex items-center space-x-2">
                                                                    <input
                                                                        placeholder={`Option ${oIndex + 1}`} value={opt} 
                                                                        onChange={(e) => handleOptionChange(index, oIndex, e.target.value)}
                                                                        className="w-full p-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                                                                    />
                                                                    <button className="text-red-600" onClick={() => handleDeleteOption(index, oIndex)}> ❌</button>
                                                                </div>
                                                            ))}
                                                            <button className="bg-gray-100 text-gray-600 rounded-2xl w-full p-2 hover:bg-gray-200 border border-gray-300"
                                                                onClick={() => handleAddOption(index)}
                                                            >
                                                                + Add Option
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                                ) : (
                                                <div className={`text-gray-700 mt-1 
                                                    ${q.isBold ? "font-bold" : ""} 
                                                    ${q.isItalic ? "italic" : ""} 
                                                    ${q.isUnderline ? "underline" : ""}`}
                                                >
                                                    {q.question}
                                                    {q.type === "multiple" && (
                                                        <div className="mt-2">
                                                            {q.answer.map((opt, oIndex) => (
                                                                <div key={oIndex}>{`Option ${oIndex + 1}: ${opt}`}</div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {q.type === "file" && q.answer && (
                                                        <div className="mt-2">
                                                            {q.answer.type.startsWith("image/") ? (
                                                                <img src={URL.createObjectURL(q.answer)} alt={q.answer.name}
                                                                    className="w-40 h-40 object-cover rounded border border-gray-300"
                                                                />
                                                                ) : q.answer.type === "application/pdf" ? (
                                                                <embed src={URL.createObjectURL(q.answer)} type="application/pdf" className="w-full h-64 rounded border border-gray-300"/>
                                                                ) : (
                                                                <div className="text-gray-600 text-sm flex flex-col space-y-1">
                                                                    <span> Uploaded File:{" "} <span className="font-bold">{q.answer.name}</span></span>
                                                                    <a href={URL.createObjectURL(q.answer)} download={q.answer.name} className="text-blue-600 hover:underline" > 
                                                                        Download File
                                                                    </a>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                    {q.type === "dropdown" && (
                                                        <div className="mt-2">
                                                            <select className="w-full p-2 rounded-2xl border border-gray-300">
                                                                {(q.answer || []).map((opt, oIndex) => (
                                                                    <option key={oIndex}>{opt}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    )}
                                                    {q.type === "short" && (
                                                        <input
                                                            placeholder="Short Answer..." disabled
                                                            className="w-full mt-1 p-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-600"
                                                        />
                                                    )}

                                                </div>
                                                )}
                                            </div>
                                        )}
                                    </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                                )}
                            </Droppable>
                        </DragDropContext>


                        <div className="flex flex-col space-y-2">
                            <button className="bg-gray-100 text-gray-600 rounded-2xl flex-1 p-3 hover:bg-gray-200 border border-gray-300"
                                onClick={() => setShowQuestionTypeModal(true)}
                            >
                                Add A Question +
                            </button>
                            <button className="max-w-full bg-[#AF9DFA] text-white rounded-xl w-80 p-3">
                                Generate Form
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>

        {showQuestionTypeModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)]">
                <div className="bg-white rounded-xl p-6 space-y-4 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-semibold text-center">Select Question Type</h2>
                    <div className="flex flex-col space-y-3">
                        {["Multiple Choice", "Short Answer", "File Upload", "Date", "Dropdown"].map((type) => (
                            <button
                            key={type}
                            className="w-48 rounded border border-gray-300 p-2 hover:bg-gray-100"
                            onClick={() => handleAddQuestion(type)}
                            >
                            {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
);
};

export default FormAiPage;
