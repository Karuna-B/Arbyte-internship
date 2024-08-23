import React from "react";

export default function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b58c77e5-b2f6-4eaf-8352-fe8236c9d3f0/3e4e726c-ed2a-472c-94fa-b6c8880b7da2/US-en-20240820-TRIFECTA_GLOBAL_FALLBACK-perspective_WEB_2e8a07bd-505c-4bc0-9503-81884f6b5bcb_large.jpg"
        alt="netflix banner"
      />
      <div className="absolute h-full w-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-white font-bold text-5xl">
                Unlimited Movies, TV-Shows, and more...
            </h1>
            <p className="text-white text-3xl mt-3">
                Watch anywhere, Cancel anytime
            </p>
            <div className="mt-8">
                <a href="/login" className="bg-red-700 mt-8 text-white p-4 px-16 text-lg rounded font-semibold">Sign up</a>
            </div>
        </div>
      </div>
    </div>
  );
}
