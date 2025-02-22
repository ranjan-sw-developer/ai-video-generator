import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>We are building a AI Video Generator</h1>
      <Button>TEST</Button>

      <UserButton />
    </div>
  );
}
