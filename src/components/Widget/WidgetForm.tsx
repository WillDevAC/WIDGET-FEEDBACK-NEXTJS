import React from "react";

import WidgetCloseButton from "./WidgetClose";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "/images/bug.svg",
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: "/images/idea.svg",
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: "/images/other.svg",
      alt: "Imagem de um balão de pensamento",
    },
  },
};

const WidgetForm: React.FC = () => {
  return (
    <div className="widget-form">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <WidgetCloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button className="widget-form-button" key={key}>
              <img src={value.image.source} alt={value.image.alt} />
              <button>{value.title}</button>
            </button>
          );
        })}
      </div>

      <footer>
        Feito com ♥ por
        <a className="underline underline-offset-2" href="#">
          Will Silva
        </a>
      </footer>
    </div>
  );
};

export default WidgetForm;
