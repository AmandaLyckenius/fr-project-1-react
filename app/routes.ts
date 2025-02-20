import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("nameList", "./routes/nameList.tsx"),
    route("nameGenerator", "./routes/nameGenerator.tsx")
] satisfies RouteConfig;
