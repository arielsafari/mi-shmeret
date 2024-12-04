import { Button } from "@/components/ui/button";

export default function NonActiveShift() {
  return (
    <div className="flex flex-col gap-8">
      <Button
        className="
            rounded-xl
            w-full p-5
            text-white hover:text-white 
            cursor-default 
            bg-red-800/90 hover:bg-red-800/80
            font-bold text-lg
          "
      >
        המשמרת לא פעילה
      </Button>
    </div>
  );
}
