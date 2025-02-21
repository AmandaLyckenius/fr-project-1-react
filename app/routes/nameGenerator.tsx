import type { Route } from "./+types/home";
import {NameGenerator} from "../Components/nameGenerator/nameGenerator"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Name generator" },
    { name: "description", content: "Generate a pet name" },
  ];
}

export default function NameGeneratorPage() {
  return <NameGenerator/>;
}
