import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // basic validation
    if (!itemName) {
      alert("Item name is required");
      inputRef.current.focus();
      return;
    }
    onAddItem(itemName);
    setItemName("");
    inputRef.current.focus();
  };
  const updateInput = (event) => {
    setItemName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input autoFocus ref={inputRef} value={itemName} onChange={updateInput} />
      <Button>Add to list</Button>
    </form>
  );
}
