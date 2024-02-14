import { Divisor } from "@/components/Divisor";
import { PhoneForm } from "@/components/PhoneForm";
import { WhatsAppLogo } from "@/components/WhatsAppLogo";

export default function Home() {
  return (
    <main className="min-h-dvh container mx-auto flex flex-col gap-8 items-center justify-center">
      <WhatsAppLogo />
      <PhoneForm />
      {/* DIVISOR */}
      <div className="absolute bottom-0">
        <Divisor />
      </div>
    </main>
  );
}
