"use client";

import { useState, useEffect } from "react";
import Newletter from "./Newsletter";

const Popup = () => {
  const [visibility, setVisibility] = useState(false);
  const [time, setTime] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const key = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  useEffect(() => {
    if (time > 10 && showPopup && !visibility) {
      setVisibility(true);
    }
  }, [time, showPopup]);

  const handleClose = () => {
    setVisibility(false);
    setShowPopup(false);
  };

  return (
    <>
      {visibility && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <Newletter />
            <button
              onClick={handleClose}
              className="bg-white text-neutral-800 w-20 self-center rounded-xl p-1 font-medium text-md transition duration-300 ease-in-out hover:bg-white hover:text-zinc-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
