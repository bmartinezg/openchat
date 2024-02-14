export const PhoneForm = () => {
  const endpoint = "https://api.whatsapp.com/send/?phone=34669769235&text&type=phone_number&app_absent=0";

  return (
    <form className="flex flex-col min-w-[300px] gap-2">
      <input
        placeholder="Número de teléfono"
        className="placeholder-style font-bold text-center border-2 rounded-lg border-primary py-2 focus:border-cyan-500"
        type="tel"
      />
      <button className="bg-primary font-bold text-white rounded-lg py-2">Abrir Chat</button>
    </form>
  );
};
