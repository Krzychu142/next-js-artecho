import { PlusOutlined } from "@ant-design/icons";
import React from "react";

const SingleProductContent = () => {
  return (
    <section className="flex flex-col items-start gap-4 my-4 px-4">
      <p>
        Description of poster #. Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <button className="mx-auto w-full max-w-96 p-2 border-2 border-custom-blue rounded-3xl duration-200 ease-in-out flex items-center justify-center gap-2 font-medium hover:bg-black hover:text-white">
        Add to cart
        <PlusOutlined
          className="text-custom-blue "
          style={{ fontSize: "24px", textShadow: "0 0 2px #000" }}
        />
      </button>
    </section>
  );
};

export default SingleProductContent;
