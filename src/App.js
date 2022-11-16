import { useState } from "react";
import { Remarkable } from "remarkable";
import "./App.css";

const md = new Remarkable();

export default function App() {
  const [text, setText] = useState(
    "# Header\n" +
      "## Sub Header\n" +
      "`'Hello!'`\n" +
      "``` \n 'goodbye!' \n ``` \n" +
      "[youtube](https://www.youtube.com) \n" +
      "1. First list item\n" +
      "2. Second list item\n" +
      "3. Third list item \n " +
      " 'span' \n " +
      " 	> blockquote  \n" +
      "![alt text](https://www.cathealth.com/images/cozy_cat_home.jpg)\n " +
      " **KITTY**  "
  );

  //this is a comment to test commits?

  return (
    <>
      <main className="App">
        <h1 className="text-center font-bold">Markdown Editor</h1>

        <div>
          <label htmlFor="markdown" className="mt-5 mb-3 block" />
          <textarea
            name="editor"
            id="editor"
            cols="30"
            rows="10"
            required
            placeholder="type in some markdown"
            className="bg-white p-5 rounded shadow"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <h3>Output</h3>
          <div
            id="preview"
            className="p-5 rounded shadow"
            dangerouslySetInnerHTML={{ __html: md.render(text) }}
          ></div>
        </div>
      </main>
    </>
  );
}
