import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { initialItems } from "../constants";

function App() {
  const [items, setItems] = useState(initialItems);
  const listData = {
    itemsNr: items.length,
    checkedItemsNr: items.filter((item) => item.packed).length,
  };

  const handleAddItem = (itemName) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemName,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      item.id === id ? (item.packed = !item.packed) : item.packed;
      return item;
    });
    setItems(newItems);
  };

  const handleToggleAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleToggleAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleResetList = () => {
    setItems(initialItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const listFunctions = {
    handleRemoveItem,
    handleToggleItem,
  };

  const buttonFunctions = {
    handleToggleAllComplete,
    handleToggleAllIncomplete,
    handleResetList,
    handleRemoveAllItems,
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header listData={listData} />
        <ItemList items={items} listFunctions={listFunctions} />
        <Sidebar
          handleAddItem={handleAddItem}
          buttonFunctions={buttonFunctions}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
