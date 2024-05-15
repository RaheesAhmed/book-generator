"use client";

import { useState } from 'react';

export default function Home() {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [bookDetails, setBookDetails] = useState({
        Title: "",
        Genre: "",
        Language: "",
        Setting: "",
        Plot: "",
        Theme: "",
        Characters: "",
        Tone: "",
        Style: "",
        Audience: "",
        Purpose: "",
        Number_of_Chapters: "",
        Chapter_Details: ""
    });

    const tones = ["Formal", "Informal", "Optimistic", "Pessimistic", "Humorous"];
    const styles = ["Creative", "Narrative", "Expository", "Persuasive", "Descriptive"];

    const handleChange = (e) => {
        setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch("/api/book/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookDetails })
        });
        const data = await response.json();
        setResponse(data);
        setIsLoading(false);
    };

    return (
        <div className="flex justify-center items-start bg-gray-100 p-4">
            <div className="w-10/12">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 className="text-xl font-semibold text-center text-gray-700 mb-6">Generate Your Book</h1>
                    <h4 className=" text-center text-gray-600 mb-4">Create, Design & Launch Stunning Books In 2 Minutes Without Writing A Word</h4>
                    <p className="text-sm text-center text-gray-500 mb-4">Fill in the details below to generate a book based on your preferences.</p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                        {Object.entries(bookDetails).map(([key, value]) => (
                            <div key={key}>
                                <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/_/g, ' ')}</label>
                                {key === "Tone" || key === "Style" ? (
                                    <select
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder={`Select ${key}`}
                                    >
                                        <option value="">Select {key}</option>
                                        {(key === "Tone" ? tones : styles).map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder={`Enter ${key}`}
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Generate Book
                        </button>
                    </form>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Book Preview</h2>
                    {isLoading ? (
                        <div className="animate-pulse flex flex-col space-y-4">
                            <div className="h-4 bg-slate-200 rounded"></div>
                            <div className="h-4 bg-slate-200 rounded"></div>
                            <div className="h-4 bg-slate-200 rounded"></div>
                            <div className="h-4 bg-slate-200 rounded"></div>
                        </div>
                    ) : (
                        response && <div className="whitespace-pre-wrap text-sm">{response.book}</div>
                    )}
                </div>
            </div>
        </div>
    );
}
