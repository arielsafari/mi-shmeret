import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Target from "@/interfaces/target.interface";
import { IconX } from "@tabler/icons-react";

interface Props {
  targets: Target[];
}

export default function TargetsTable({ targets }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>מזהה</TableHead>
          <TableHead>תיאור היעד</TableHead>
          <TableHead>יכולת</TableHead>
          <TableHead>מזהה מבצע</TableHead>
          <TableHead className="text-end">פעולות</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {targets.map((target) => (
          <TableRow key={target.identity}>
            <TableCell>{target.identity}</TableCell>
            <TableCell>{target.description}</TableCell>
            <TableCell>{target.ability}</TableCell>
            <TableCell>{target.operationId}</TableCell>
            <TableCell className="text-end">
              {/* TODO: Implement deleting target */}
              <Button
                variant="ghost"
                className="rounded-full text-red-600 hover:text-red-500"
                size="icon"
              >
                <IconX />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
