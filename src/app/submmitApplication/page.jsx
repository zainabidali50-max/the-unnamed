import Link from "next/link";
import React from "react";

const ApplicationSubmitted = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center justify-start">
      {/* Modal: Application Submitted */}
      <div className="bg-[#111] rounded-xl p-6 w-full max-w-md border border-gray-700 shadow-lg text-white">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-green-400 text-4xl">✔️</div>
          <h2 className="text-lg font-semibold">Application Submitted!</h2>
          <p className="text-sm text-gray-400">
            You'll be notified once a recruiter reviews your request.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <button className="bg-[#00B2FF] hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition">
              View Application Status
            </button>
            <Link href='communityStepTwo' className="text-gray-300 hover:text-white py-2 px-4 rounded-lg transition">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Exclusivity Agreement */}
      <div className="mt-10 bg-[#1a1a1a] rounded-xl border border-gray-700 p-6 w-full max-w-2xl">
        <h3 className="text-sm text-gray-400 mb-4">Exclusivity Agreement</h3>
        <div className="space-y-3">
          {[
            "I agree to be Exclusive for all Games you Support",
            "I agree to be Exclusive for Squad",
            "I agree to be Exclusive for Star Citizen",
            "I Agree To Be Exclusive For Arma Reforger"
          ].map((text, idx) => (
            <label
              key={idx}
              className="flex items-center bg-[#111] px-4 py-3 rounded-md border border-gray-600"
            >
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 mr-3"
              />
              <span className="text-sm">{text}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Time Zone */}
      <div className="mt-6 bg-[#1a1a1a] rounded-xl border border-gray-700 p-6 w-full max-w-2xl">
        <h3 className="text-sm text-gray-400 mb-4">Time zone</h3>
        <select className="w-full bg-[#111] text-white px-4 py-3 rounded-md border border-gray-600 outline-none">
          <option>UTC+0:00 – London</option>
          <option>UTC+10 – Australia</option>
          <option>UTC-5:00 – New York</option>
          {/* Add more options if needed */}
        </select>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
