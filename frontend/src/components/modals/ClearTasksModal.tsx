import { Button } from "@components/ui/Button";
import { Modal } from "./Modal";
import { Input } from "@components/ui/Input";
import type { ModalStateProps } from "@/types/Modal.types";
import { useRef, useState } from "react";

interface Props extends ModalStateProps {
  onConfirm: () => void;
}

export const ClearTasksModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting clear tasks...");
    const understandConsequences = Boolean(new FormData(e.currentTarget).get("understandConsequences"));

    if (!understandConsequences) {
      console.warn("User needs to understand the consequences");
      return;
    }

    console.log("Clearing tasks...");
    onConfirm();
  };

  const onClickCheckboxHandler = () => {
    if (checkboxRef.current) {
      setButtonDisabled(!checkboxRef.current.checked);
    }
  };

  return (
    <Modal
      title="Clear Tasks"
      description="Are you sure you want to clear all completed tasks?"
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <form className="clear-tasks-form" onSubmit={onSubmit}>
        <div>
          {/* ToDo, include active tasks */}
          <label>I understand the consequences</label>
          <Input type="checkbox" name="understandConsequences" onClick={onClickCheckboxHandler} ref={checkboxRef} />
        </div>
        <Button type="submit" disabled={buttonDisabled}>
          Yes, Clear Completed
        </Button>
      </form>
    </Modal>
  );
};
