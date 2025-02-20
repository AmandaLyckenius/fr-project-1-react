import type { Route } from "./+types/home";
import { NameList } from "../nameList/nameList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Previous generated names" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function NameListPage() {
  return <NameList/>;
}
