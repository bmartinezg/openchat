import { Divisor } from "@/components/Divisor";
import { PhoneForm } from "@/components/PhoneForm";
import { WhatsAppLogo } from "@/components/WhatsAppLogo";

export default function Home() {
  return (
    <main>
      <div className="min-h-dvh container mx-auto flex flex-col gap-8 items-center justify-center pb-40">
        <WhatsAppLogo />
        <div className="animate-fade-up animate-ease-out">
          <PhoneForm />
        </div>
      </div>
      {/* DIVISOR */}
      <div className="absolute bottom-0">
        <Divisor />
      </div>
    </main>
  );
}
