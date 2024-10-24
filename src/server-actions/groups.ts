import Group from "@/interfaces/group.interface";

export async function getGroups() {
  // TODO: Load groups from the DB
  const groups: Group[] = [
    {
      name: "mador-946",
      displayName: "מדור 946",
      imageSource: "/example-logo-1.png",
    },
  ];

  return groups;
}
