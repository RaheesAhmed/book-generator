# Book Creator Tool

Book Creator Tool is a web-based application designed to automate the creation of books using AI. Users can input specifications such as the title, genre, language, and more, and the application generates a complete book with chapters and a narrative based on these inputs.

## Features

- **Custom Book Specifications**: Users can specify various aspects of the book such as title, genre, tone, and style.
- **Chapter Management**: Automatically generate a specified number of chapters based on user input.
- **AI-Powered**: Utilizes OpenAI's GPT models to generate coherent and engaging text.
- **Responsive Design**: Accessible from various devices, ensuring a wide range of usability.

## Technology Stack

- **Frontend**: React.js with Tailwind CSS for styling.
- **Backend**: Next.js API routes for handling asynchronous requests.
- **AI**: OpenAI's GPT-3.5 Turbo(gpt-3.5-turbo-16k) for text generation.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/RaheesAhmed/book-generator.git
   ```
   go to directory:
   ```
   cd book-generator
   ```
2. Install dependencies:

```
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

```
OPENAI_API_KEY=Your_OpenAI_API_Key

```

4. Run the development server:

```
npm run dev
```

### Usage

Fill out the form on the home page with your desired book details such as title, genre, number of chapters, etc., and click the "Generate Book" button. The book content will be displayed on the right side of the page once it's generated.

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

To contribute to this project, follow these steps:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### Contact

Rahees Ahmed - raheesahmed256@gmail.com
