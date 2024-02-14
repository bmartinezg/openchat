"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Link from "next/link";

export const PhoneForm = () => {
  const [input, setInput] = useState("");

  const getLik = (): string => {
    if (!input) return "";
    const formattedInput = input.replaceAll("+", "");
    const endpoint = `https://api.whatsapp.com/send/?phone=${formattedInput}&text&type=phone_number&app_absent=0`;
    return endpoint;
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
      <Link href={getLik()} target="_blank" className="bg-primary font-bold text-white rounded-lg py-2 text-center">
        Abrir Chat
      </Link>
    </form>
  );
};
