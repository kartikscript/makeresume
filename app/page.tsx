import PreviewResume from "@/components/PreviewResume";
import Image from "next/image";

import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FileSpreadsheet } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen bg-primary-50 text-secondary-200">
      {/* Hero Section */}
      <section className="bg-primary-100 text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Hero Text */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold mb-6">
              Build Your Professional Resume Effortlessly
            </h1>
            <p className="text-lg mb-6">
              Create a resume that stands out in just a few minutes. Choose from a range of modern, professionally designed templates, and customize your resume with ease.
            </p>
            <a
              href="/dashboard"
              className="bg-secondary-200 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary-100"
            >
              Get Started
            </a>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2  flex justify-center ">
           <FileSpreadsheet className='w-32 h-32'/>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-secondary-200">
            Why Choose Our Resume Maker?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary-200">Easy to Use</h3>
              <p>
                Our intuitive interface allows you to build a professional resume without any design skills.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary-200">Customizable Templates</h3>
              <p>
                Choose from a variety of modern, professionally designed templates and customize them to suit your style.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary-200">Export to PDF</h3>
              <p>
                Download your resume as a PDF in a format that recruiters love, with one-click export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary-200 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Resume?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of users who have successfully created their resumes with our app.
          </p>
          <a
            href="/sign-in"
            className="bg-primary-100 text-secondary-200 px-8 py-4 rounded-lg shadow-lg hover:bg-primary-50"
          >
            Start Building Your Resume Now
          </a>
        </div>
      </section>
    </div>
  );
}
