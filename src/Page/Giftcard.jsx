import { useState } from "react";
import { FaGift } from "react-icons/fa6";


export default function GiftCard() {
  const [amount, setAmount] = useState(0);
  const [custom, setCustom] = useState("");
  const [email, setEmail] = useState("");
  const preset = [25, 50, 100, 250];

  const handleSelect = (val) => {
    setAmount(val);
    setCustom("");
  };

  const handleCustom = (e) => {
    setCustom(e.target.value);
    setAmount(Number(e.target.value) || 0);
  };

  return (
    <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto ">
        <h1 className="text-3xl font-bold uppercase  pt-4 text-black">Gift Cards</h1>
        <p className=" text-gray-600 mt-2 mb-8">
          Give the gift of choice with our versatile gift cards!
        </p>
        </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
       
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl text-black font-semibold mb-1">Select Amount</h2>
          <p className="text-sm text-black mb-4">
            Choose a preset amount or enter a custom value
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {preset.map((val) => (
              <button
                key={val}
                onClick={() => handleSelect(val)}
                className={`border rounded-lg py-3 font-medium text-black ${
                  amount === val
                    ? "border-blue-500 bg-blue-50 text-black"
                    : "border-gray-200"
                }`}
              >
                ${val}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="text-sm text-black">Custom Amount</label>
            <input
              type="number"
              placeholder="$ Enter amount"
              value={custom}
              onChange={handleCustom}
              className="w-full text-black mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1">Minimum: $10</p>
          </div>

          <div>
            <label className="text-sm text-black">Receiver Email</label>
            <input
              type="email"
              placeholder="Enter e-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#3164AE] text-white rounded-2xl shadow p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold mb-4">Gift Card Preview</h2>
             <FaGift/>
            </div>


            <div className="bg-blue-500 rounded-xl p-4 mb-4">
              <p className="text-sm">Gift Card</p>
              <p className="text-2xl font-bold">${amount.toFixed(2)}</p>
            </div>

            <ul className="text-sm space-y-2 mb-6">
              <li>✔ Valid for any product</li>
              <li>✔ No expiration date</li>
              <li>✔ Can be used multiple times</li>
            </ul>

            <div className="border border-white/30 rounded-xl p-4">
              <p className="text-sm mb-2">Payment Method</p>

              <div className="space-y-2">
                <div className="border border-white/40 rounded-lg p-2 text-sm">
                  Visa ending in 4242
                </div>
                <div className="border border-white/40 rounded-lg p-2 text-sm">
                  Mastercard ending in 8888
                </div>
                <button className="w-full border border-white/40 rounded-lg py-2 text-sm hover:bg-white/10">
                  + Add New Payment Method
                </button>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100">
            Purchase Gift Card
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}