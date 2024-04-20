import { NextResponse, NextRequest } from 'next/server';
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: api_key}); 

export async function POST(req) {
    const { bookDetails } = await req.json();
    console.log(bookDetails);

    try {
        const book = await generateBook(bookDetails);
        console.log(book);
        // Ensure a JSON response is properly returned
        return new NextResponse(JSON.stringify({ book }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
        });
    } catch (e) {
        console.log(e);
        // Return an error response if an exception occurs
        return new NextResponse(JSON.stringify({
            error: 'Failed to generate the book',
            details: e.toString()
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

const generateBook = async (bookDetails) => {
    // Converting bookDetails object to a coherent narrative string for AI processing
    const bookPrompt = createBookPrompt(bookDetails);
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                "role": "system", 
                "content": "You are an experienced book writer. Your task is to create a full book based on the provided details. Ensure the book has a cohesive plot with well-developed characters, subplots, and detailed world-building. Each chapter should be well-defined with clear narrative progression, themes, and symbols woven throughout. Remember to maintain consistency in characters and plot across the entire book. Use engaging dialogues and ensure that each chapter concludes in a way that encourages the reader to continue." 
            }
            ,
            { "role": "user", "content":`Generate a book on given details: ${bookPrompt}` },
        ],
        //response_format: { type: "json_object" },
        model: "gpt-3.5-turbo-16k",
    });

    
    const res = completion.choices[0].message.content;
    //console.log({res});
    return res;
};

function createBookPrompt(details) {
    return `Title: ${details.Title} ,
    Genre: ${details.Genre} ,
    Language: ${details.Language} ,
    Setting: ${details.Setting} ,
    Plot: ${details.Plot} ,
    Theme: ${details.Theme} ,
    Characters: ${details.Characters} ,
    Tone: ${details.Tone} ,
    Style: ${details.Style} ,
    Audience: ${details.Audience} ,
    Purpose: ${details.Purpose} ,
    Number_of_Chapters: ${details.Number_of_Chapters} ,
    Chapter_Details: ${details.Chapter_Details}
    `;
}
