import { Card } from "@/components/ui/card";
import { TreeView, TreeDataItem } from "@/components/ui/tree-view";

const data: TreeDataItem[] = [
  {
    id: "1",
    name: "איבר 1",
    children: [
      {
        id: "2",
        name: "איבר 1.1",
        children: [
          {
            id: "3",
            name: "איבר 1.1.1",
          },
          {
            id: "4",
            name: "איבר 1.1.2",
          },
        ],
      },
      {
        id: "5",
        name: "איבר 1.2",
      },
    ],
  },
  {
    id: "6",
    name: "איבר 2",
  },
];

export default async function TestPage() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <Card className="col-span-1">
        <div className="flex">
          <TreeView data={data} className="flex-1" />
        </div>
      </Card>
      <Card className="col-span-3">
        <h1>תוכן</h1>
      </Card>
    </div>
  );
}
