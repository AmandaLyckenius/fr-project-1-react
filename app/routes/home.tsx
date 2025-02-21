import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pet Names" },
    { name: "description", content: "Pet Names" },
  ];
}

export default function Home() {
  return <Welcome />;
}
