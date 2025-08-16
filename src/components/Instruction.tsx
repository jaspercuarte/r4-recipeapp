import React from "react";
import type { InstructionType } from "./RecipeInformation";

type InstructionProps = {
  instruction: InstructionType;
};

const Instruction: React.FC<InstructionProps> = ({ instruction }) => {
  return (
    <div className="border border-zinc-200 p-4 rounded-xl cursor-pointer text-zinc-500  hover:border-zinc-400 hover:text-zinc-950 transition-all">
      <h4 className="font-semibold text-2xl mb-4">Step {instruction.number}</h4>
      <p>{instruction.step}</p>
    </div>
  );
};

export default Instruction;
