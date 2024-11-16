"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import OnCallPerson from "@/interfaces/on-call-person.interface";
import OnCallDialogForm from "./on-call-dialog-form";

interface Props {
  onCallPerson?: OnCallPerson;
  dialogTrigger: React.ReactNode;
  // onSubmit: (person: OnCallPerson) => void;
}

export default function OnCallDialog({
  onCallPerson,
  dialogTrigger,
}: // onSubmit,
Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (person: OnCallPerson) => {
    // TODO: Call the server action
    console.log({ person });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-40px)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>ערוך את המשמרתן</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <OnCallDialogForm
          onCallPerson={onCallPerson}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
