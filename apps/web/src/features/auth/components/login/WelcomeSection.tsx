export default function WelcomeSection() {
  return (
    <div className="flex flex-col gap-4">
      {/* welcome-title: font-size via clamp() + override 4K no LoginPage.css */}
      <h2 className="welcome-title font-bold text-white">
        Vitalitas
      </h2>
      {/* welcome-description: font-size via clamp() + override 4K no LoginPage.css */}
      <p className="welcome-description font-light leading-relaxed text-[#d4d4d8] max-w-sm">
        Sua jornada para um estilo de vida mais saudável começa aqui. Conecte-se e alcance seus objetivos.
      </p>
    </div>
  );
}
