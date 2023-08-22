import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";





function App() 
{

  const defaultInput={title:"Welcome to TODO'S",
  content:"Press Add to add new todo\nPress delete to remove item"};

  const [list, addToList] = useState([defaultInput]);

  function addItem(inputTitle, inputContent) 
  {
    const newItem = { title: inputTitle, content: inputContent };
    console.log(newItem);

    if(inputTitle!=="")
    {
      addToList((prev) => {
        return [...prev, newItem];
      })  
    }
  }

  function deleteItem(id)
  {
    addToList(prev=>{
      return prev.filter((element,index)=>
      {
        return index!==id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea AddingItem={addItem} />

      {list.map((element, index) => (
          <Note 
          key={index} 
          id={index} 
          title={element.title} 
          content={element.content} 
          DeletingItem={deleteItem}
          />
      ))}

      <Footer />
    </div>
  );
}

export default App;
