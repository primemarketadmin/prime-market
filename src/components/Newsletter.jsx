import React, { useState } from "react";
import { db } from "../firebase"; // adjust path if needed
//import { collection, addDoc } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "waitinglist"), {
        email: email,
        //createdAt: new Date(),
        createdAt: serverTimestamp(),
      });
      setStatus("Thanks for subscribing! :)");
      setEmail(""); // clear input after success
    } catch (error) {
      console.error("Error adding email:", error.message);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div id="newsletter" className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Be the first to know when we launch
          </h1>
          <p>Sign up and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#f98638] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Notify Me
            </button>
          </div>
          {status && (
  <p className="text-sm mt-2 text-center sm:text-left">
    {status}
  </p>
)}

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
