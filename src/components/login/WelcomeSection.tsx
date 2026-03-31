function Title() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[678.5px]" data-name="h2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[-2px] tracking-[-0.9px] whitespace-nowrap">Vitalitas</p>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[56px] w-[448px]" data-name="p">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-0 not-italic text-[#d4d4d8] text-[18px] top-[-1px] w-[435px]">Sua jornada para um estilo de vida mais saudável começa aqui. Conecte-se e alcance seus objetivos.</p>
    </div>
  );
}

export default function WelcomeSection() {
  return (
    <div className="absolute h-[115px] left-[50px] top-[811px] w-[678px]" data-name="motion.div">
      <Title />
      <Description />
    </div>
  );
}
