import Image from "next/image";
import { Cafirm } from "@/components/component/ca_firm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Cafirm/>
    </main>
  );
}
