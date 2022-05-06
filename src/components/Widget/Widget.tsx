import React, { useState } from "react";

import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

import WidgetForm from "./WidgetForm";

const Widget: React.FC = () => {
  return (
    <>
      <Popover className="popover">
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>

        <Popover.Button className="widget group">
          <ChatTeardropDots className="w-6 h-6" />

          <span className="widget-span">
            <span className="pl-2"></span>
            Feedback
          </span>
          
        </Popover.Button>
      </Popover>
    </>
  );
};

export default Widget;
