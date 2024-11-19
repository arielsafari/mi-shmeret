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
import { useGroupContext } from "../group.context";
import { handlePersonMutation } from "../actions";

interface Props {
  onCallPerson?: OnCallPerson;
  children: React.ReactNode;
}

export default function OnCallDialog({ onCallPerson, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentShift } = useGroupContext();
  const handleSubmit = async (updatedPerson: OnCallPerson) => {
    if (!currentShift) return;

    await handlePersonMutation(currentShift, updatedPerson);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-40px)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>משמרתן</DialogTitle>
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
