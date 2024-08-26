import PreviewResume from "@/components/PreviewResume";
import Image from "next/image";

import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-gradient-to-bl to-secondary-100 from-secondary-200">
      hello
      <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <Link href='/sign-up'>sign up</Link>
        </SignedOut>
    </div>
  );
}
