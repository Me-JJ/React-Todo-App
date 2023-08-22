import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function titleChange(event) {
    // console.log(event.target.value);
    return setTitle(event.target.value);
  }

  function contentChange(event) {
    // console.log(event.target.value);
    return setContent(event.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={titleChange} name="title" placeholder="Title" value={title} />
        <textarea onChange={contentChange} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={(event) => {
          props.AddingItem(title, content);
          event.preventDefault();
          setTitle("");
          setContent("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
