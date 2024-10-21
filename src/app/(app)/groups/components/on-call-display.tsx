"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OnCallPerson from "@/interfaces/on-call-person.interface";

export default function OnCallDisplay(props: OnCallPerson) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempPerson, setTempPerson] = useState<OnCallPerson>(props);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempPerson({ ...tempPerson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send result to server and revalidate data
    setIsOpen(false);
  };

  return (
    <div className="p-2 border rounded-xl shadow-sm flex items-center space-x-4 justify-between bg-slate-100/50">
      <div className="flex flex-row gap-4 items-center ms-2">
        <Avatar className="size-12">
          <AvatarImage src={props.avatarUrl} alt={props.name} />
          <AvatarFallback>
            {props.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <span className="flex gap-1 items-baseline">
            <span className="text-gray-500 text-md font-bold">
              {props.name}
            </span>
            {props.isShadow && (
              <span className="text-sm text-muted-foreground">(משמרתן צל)</span>
            )}
          </span>
          <p className="text-gray-500 text-sm">{props.phoneNumber}</p>
          <p className="text-gray-500 text-sm">VoIP - {props.voipNumber}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">עריכה</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit On-Call Person</DialogTitle>
            <DialogDescription>
              Make changes to the on-call person here. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={tempPerson.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  value={tempPerson.phoneNumber}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="avatarUrl" className="text-right">
                  Avatar URL
                </Label>
                <Input
                  id="avatarUrl"
                  name="avatarUrl"
                  value={tempPerson.avatarUrl}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
