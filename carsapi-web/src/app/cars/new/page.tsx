import { Metadata } from "next";
import NewCarForm from "./NewCarForm";

export const metadata: Metadata = {
  title: "Post a new job",
};

export default function Page() {
  return <NewCarForm />;
}
