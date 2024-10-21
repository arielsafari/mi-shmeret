import Group from "@/interfaces/group.interface";

export async function getGroups() {
  await new Promise(f => setTimeout(f, 3000));

  const groups: Group[] = [
    {
      name: "mador-946",
      displayName: "מדור 946",
      imageSource: "/example-logo-1.png",
    },
  ];

  return groups;
}
