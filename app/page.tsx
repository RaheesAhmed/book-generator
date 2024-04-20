"use client";

import {useState} from 'react';



export default function Home() {
//make api request to /api/book/create with book_details as body and display the response in the UI

  const [response,setResponse]=useState(null);

  const book_details = {
    Title: "The Book of the Jungle", 
    Genre: "Fiction", 
    Language: "English", 
    Setting: "Modern jungle", 
    Plot: "Adventure", 
    Theme: "Friendship", 
    Characters: ["Mowgli", "Baloo", "Bagheera"], 
    Tone: "Formal",
     Style: "Creative", 
     Audience: "General", 
     Purpose: "Entertainment", 
     Number_of_Chapters: 5, 
     Chapter_Details: [{"Title": "Chapter 1", "Main Events": "Introduction of characters and setting", "Word Count": 1000}, {"Title": "Chapter 2", "Main Events": "First major adventure", "Word Count": 1000}, {"Title": "Chapter 3", "Main Events": "Deepening of friendships and challenges", "Word Count": 1000}, {"Title": "Chapter 4", "Main Events": "Climax and the confrontation", "Word Count": 1000}, {"Title": "Chapter 5", "Main Events": "Resolution and conclusion", "Word Count": 1000}]
  }

  const handleClick=async()=>{
    const response=await fetch("/api/book/create",{
      method:"POST",
      body:JSON.stringify({bookDetails:book_details}),
      headers:{
        "Content-Type":"application/json"
      }
    });

    const data=await response.json();

    setResponse(data);
  }




  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Book Generator</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Generate Book</button>
      {response && <p className="mt-4">{response.book}</p>}
    </>
  );
}
