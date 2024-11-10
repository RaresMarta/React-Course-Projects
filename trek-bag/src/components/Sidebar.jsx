import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleAddItem, buttonFunctions }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup buttonFunctions={buttonFunctions} />
    </div>
  );
}
