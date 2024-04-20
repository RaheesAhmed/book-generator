"use client";

import { useState } from 'react';

export default function Home() {
    const [response, setResponse] = useState(null);
    // const [bookDetails, setBookDetails] = useState({
    //     Title: "", 
    //     Genre: "", 
    //     Language: "", 
    //     Setting: "", 
    //     Plot: "", 
    //     Theme: "", 
    //     Characters: "", 
    //     Tone: "",
    //     Style: "", 
    //     Audience: "", 
    //     Purpose: "", 
    //     Number_of_Chapters: "", 
    //     Chapter_Details: ""
    // });
    const [isLoading, setIsLoading] = useState(false);
    const [bookDetails, setBookDetails] = useState({
        Title: "The Lost City of Z", 
        Genre: "Adventure", 
        Language: "English", 
        Setting: "Amazon Rainforest", 
        Plot: "Exploration of the Amazon Rainforest", 
        Theme: "Exploration and Discovery", 
        Characters: "Percy Fawcett, Jack Fawcett, Raleigh Rimmel", 
        Tone: "Formal",
        Style: "Narrative", 
        Audience: "Adults", 
        Purpose: "Entertainment", 
        Number_of_Chapters: "10", 
        Chapter_Details: "Chapter 1: Introduction to the Amazon Rainforest, Chapter 2: The Journey Begins, Chapter 3: Encountering the Natives, Chapter 4: The Lost City of Z, Chapter 5: The Discovery, Chapter 6: The Return Journey, Chapter 7: The Final Encounter, Chapter 8: The Aftermath, Chapter 9: The Legacy, Chapter 10: Conclusion"
    });
    const tones = ["Formal", "Informal", "Optimistic", "Pessimistic", "Humorous"];
    const styles = ["Creative", "Narrative", "Expository", "Persuasive", "Descriptive"];

    const handleChange = (e) => {
        setBookDetails({...bookDetails, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch("/api/book/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({bookDetails})
        });
        const data = await response.json();
        setResponse(data);
        setIsLoading(false);
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
            <div className="flex flex-wrap gap-4 w-full max-w-4xl">
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-xl font-semibold text-center text-gray-700 mb-6">Generate Your Book</h1>
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
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Generate Book
                        </button>
                    </form>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Book Preview</h2>
                    {isLoading ? (
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        response && <div className="whitespace-pre-wrap text-sm">{response.book}</div>
                    )}
                </div>
            </div>
        </div>
    );
}








