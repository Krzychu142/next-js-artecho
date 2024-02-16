import React from "react";

interface SingleProductHeaderProps {
  name: string;
}

const SingleProductHeader: React.FC<SingleProductHeaderProps> = ({ name }) => {
  return (
    <header className="px-4 flex flex-wrap flex-col gap-4">
      <h2 className="text-2xl font-bold">{name}</h2>
    </header>
  );
};

export default SingleProductHeader;
