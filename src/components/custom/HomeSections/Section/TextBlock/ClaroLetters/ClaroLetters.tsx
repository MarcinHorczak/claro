interface ClaroLettersProps {
  letterIndex: number;
}

const CLARO = "CLARO";

export const ClaroLetters = ({ letterIndex }: ClaroLettersProps) => (
  <div className="flex gap-1 text-input">
    {CLARO.split("").map((letter, index) => (
      <p
        key={index}
        className={`text-[0.75rem] ${index === letterIndex ? "font-bold text-primary" : ""}`}
      >
        {letter}
      </p>
    ))}
  </div>
);
