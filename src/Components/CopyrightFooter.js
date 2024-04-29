import React from "react";

function CopyrightFooter() {
  return (
    <footer className="bg-gray-900 text-white py-2.5">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default CopyrightFooter;
