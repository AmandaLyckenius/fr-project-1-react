import type { Route } from "./+types/home";
import {NameGenerator} from "../nameGenerator/nameGenerator"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Name generator" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function NameGeneratorPage() {
  return <NameGenerator/>;
}
