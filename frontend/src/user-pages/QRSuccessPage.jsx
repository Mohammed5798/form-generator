import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRSuccessPage = () => {
  // رابط صورة QR (ضع الصورة في مجلد public أو استخدم رابط مباشر)
  const qrImageUrl = "/qr-code.png"; // تأكد أن qr-code.png موجود في مجلد public
    const formLink = "https://formigo/forms/12345";
     const copyLink = async () => {
    await navigator.clipboard.writeText(formLink);
    alert("Link Copied to clipboard!");
    };

  return (
    <div className="min-h-screen bg-[#f5f0fc] flex items-center justify-center p-4">
      <div className="w-full mx-4 lg:mx-0 max-w-md bg-white p-6 rounded-xl shadow-md text-center">

        <div className="flex justify-center mb-4">
          <h1 className="text-3xl sm:text-3xl text-[#7050EF]" style={{ fontFamily: "'Pacifico', cursive" }}>
            Formigo
          </h1>
        </div>

        <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">Thank you for registering!</h2>
        <p className="text-ms lg:text-md text-gray-600 mb-4">
          Please keep the QR code below for event access.
        </p>

      
        <img src="/calender1.png" alt="Calendar" className="mx-auto w-18 mb-4" />

        <QRCodeSVG value={formLink} size={160} className="mx-auto w-40 h-40 mb-4 border border-gray-300 p-2"/>

        <p className="text-md text-gray-600 mb-4">
          You're now registered! Show this code at the event entrance.
        </p>

        <button onClick={copyLink}
          href={qrImageUrl}
          download="Formigo_QR_Code.png"
          className="block w-full bg-[#7050EF] text-white py-2 rounded-lg hover:bg-[#5d40d6] transition text-center"
        >
          Download QR
        </button>
      </div>
    </div>
  );
};

export default QRSuccessPage;
