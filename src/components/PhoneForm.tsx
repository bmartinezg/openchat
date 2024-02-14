"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const PhoneForm = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const formatPhoneNumber = (value: string): string => {
    return value.replaceAll("+", "");
  };

  const handleOnSubmit = () => {
    if (!input) return;

    const endpoint = `https://api.whatsapp.com/send/?phone=${formatPhoneNumber(
      input
    )}&text&type=phone_number&app_absent=0`;

    router.push(endpoint);
  };
  return (
    <form className="flex flex-col min-w-[300px] gap-2">
      <PhoneInput
        defaultCountry="ES"
        style={{
          padding: "8px 24px",
        }}
        international
        withCountryCallingCode
        placeholder="Enter phone number"
        value={input}
        onChange={setInput as any}
        className="placeholder-style font-bold text-center border-2 rounded-lg border-primary py-2"
      />
      <button onClick={handleOnSubmit} className="bg-primary font-bold text-white rounded-lg py-2">
        Abrir Chat
      </button>
    </form>
  );
};
