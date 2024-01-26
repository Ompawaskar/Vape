import React, { useState } from 'react'; 
import axios from 'axios' 
import './ChatBot.css';  
  
function ChatBot() {  
  const [question, setQuestion] = useState('');  
  const [answer, setAnswer] = useState('');  
  // 
  
  const askQuestion = async () => {
    console.log("Called");
    try { 
      // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
      const apiKey = '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';
  
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: question,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
  
      const answerFromOpenAI = response.data.choices[0].text;
  
      setAnswer(answerFromOpenAI);
    } catch (error) {
      console.error('Error while asking question:', error);
      setAnswer('Error occurred while processing the question');
    }
  };
  
  return (  
    <div className="container">  
      <h1>OpenAI Chatbot</h1>  
      <label htmlFor="questionInput">Enter your question:</label>  
      <input  
        type="text"  
        id="questionInput"  
        placeholder="Type your question..."  
        value={question}  
        onChange={(e) => setQuestion(e.target.value)}  
      />  
      <button onClick={askQuestion} id="askButton">Ask</button>  
      <label htmlFor="answerTextArea">Answer:</label>  
      <textarea  
        id="answerTextArea"  
        rows="5"  
        readOnly  
        value={answer}  
      ></textarea>  
    </div>  
  );  
}  
  
export default ChatBot;