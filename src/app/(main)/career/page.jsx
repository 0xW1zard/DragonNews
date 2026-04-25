import React from 'react';

const Career = () => {
  const jobs = [
    { title: "Senior Investigative Reporter", location: "New York / Remote", type: "Full-Time" },
    { title: "Frontend Developer (Next.js)", location: "Dhaka, BD", type: "Full-Time" },
    { title: "Digital Content Editor", location: "Remote", type: "Contract" },
    { title: "Social Media Strategist", location: "London, UK", type: "Full-Time" }
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="bg-[#05001E] text-white p-12 text-center rounded-sm mb-16">
        <h1 className="text-4xl font-bold mb-4">Join the Dragon News Team</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We’re looking for curious, creative, and courageous individuals to help us 
          shape the future of media.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Current Openings</h2>
        
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="border p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-md transition bg-white">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <div className="flex gap-4 text-sm text-gray-500 mt-1">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="btn bg-[#D72050] border-none text-white rounded-none px-8 hover:bg-[#b01a42]">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: "Global Impact", desc: "Your work will reach millions across the globe daily." },
            { title: "Health & Wellness", desc: "Comprehensive insurance and mental health support." },
            { title: "Learning", desc: "Annual budget for courses, books, and conferences." }
          ].map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-pink-100 text-[#D72050] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;