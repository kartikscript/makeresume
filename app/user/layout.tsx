'use client'
import PreviewResume from "@/components/PreviewResume";
import { useGlobalContext } from "@/context/GlobalProvider";
import { Metadata } from "next";



export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {resume} = useGlobalContext()
  return (
    
        <main className="grid grid-cols-11 bg-gradient-to-bl  h-screen to-secondary-100 from-secondary-200">
          <div className="col-span-6 overflow-y-auto border-r-2 border-r-secondary-100">
         {children}
          </div>
         <div className="col-span-5 overflow-hidden pt-12 ">
          <PreviewResume resume={resume}/>
         </div>
        </main>
      
  );
}
