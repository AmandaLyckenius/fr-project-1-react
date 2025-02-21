import type { Route } from "./+types/home";
import { NameList } from "../Components/nameList/nameList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "List of pet names" },
    { name: "description", content: "List of pet names" },
  ];
}

export default function NameListPage() {
  return <NameList/>;
}
