# SimplifyAI! 

## Description
To view a demo, click [here](https://youtu.be/9UntsA_riec).
### What does it do?
**SimplifyAI!** is a lightweight chrome extension application that does exactly as it sounds. Users simply press a blue button, which will simplify text present in the clipboard and return it to the user. 

### Motivations
I initially made this project because I wanted a *quick and easy* way to simplify texts I read. Being an undergraduate engineering student regularly dealing with complex concepts in fields such as Data & Computer Science, I needed a way to simplify and clarify certain theories and ideas. 

However, a requisite in the building of all my projects is that I must learning at least one new technology or skill. I will list those I was introduced or further improved here:
1. JavaScript; I had never had to programmed in JS before this project. (Python, R, SQL, and C++ are more common in data science and machine learning engineering contexts.)
2. Creating Chrome Extensions
3. Working with Large Language Model APIs
4. Writing Docstrings/ utilizing JSDoc
### Technologies used?
The source code consists of five file types: HTML, CSS, JavaScript, JSON, and PNG. The most "advanced" technology employed was integration with the [OpenAI API](https://platform.openai.com/docs/overview). 
### Challenges & Features to Implement
The largest challenge I faced in this project was returning the response retrieved from the OpenAI API to the extension while conforming to the intricate and sometimes conflicting security policies of the Chrome Browser, OpenAI API, and Chrome Extension. I eventually found that implementing the fetch() tooling built into JavaScript to be the simplest solution. 

Though I appreciate the satisfying simplicity of the application as is, I'd like for there to be some future functionality allowing for select the size of the response or maybe the model used to generate text. 
## Instructions to Run
To run the project, follow these instructions:
1. Clone this repository.
2. Navigate to [chrome://extensions/](chrome://extensions/) in a chrome browser. 
3. Toggle 'Develop Mode' to on in the top-right corner.
4. Press 'Load Unpacked' in the top-left corner, under Extensions. 
5. Navigate to the directory you cloned the repository in. Then, select /src to unpack the extension from.

### Note:
In order to actually use the extension, user's will need to create their own API key on [OpenAI's API Platform](https://platform.openai.com/api-keys) and finance their usage.

Congratulations! You can now open the extension app in your browser the same as any other.
## Resources used
Some resources that may be useful for those trying to create a chrome extension similar this one:
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions)
- [Using the fetch API in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Using the OpenAI API](https://platform.openai.com/docs/api-reference/introduction)
- [Integrating Clipboard data in your application](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

MIT License
