import Button from "./Button";
import { secondaryButtons } from "../constants";

export default function ButtonGroup({ buttonFunctions }) {
  const {
    handleToggleAllComplete,
    handleToggleAllIncomplete,
    handleResetList,
    handleRemoveAllItems,
  } = buttonFunctions;
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button
            action={() => {
              switch (text) {
                case "Mark all as complete":
                  return handleToggleAllComplete();
                case "Mark all as incomplete":
                  return handleToggleAllIncomplete();
                case "Reset to initial":
                  return handleResetList();
                case "Remove all items":
                  return handleRemoveAllItems();
              }
            }}
            key={text}
            buttonType={"secondary"}
          >
            {text}
          </Button>
        );
      })}
    </section>
  );
}
