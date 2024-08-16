import PreviewResume from "@/components/PreviewResume";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background w-full h-screen overflow-hidden grid grid-cols-11">
      <section className="col-span-6 pt-8">
       <PreviewResume/> {/* remove scale origin-top rounded while converting to img in PreviewResume */}
      </section>
      <div className=" h-screen col-span-5 bg-red-400">

      </div>
    </main>
  );
}
