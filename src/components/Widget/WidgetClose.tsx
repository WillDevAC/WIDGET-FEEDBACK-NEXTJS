import React from 'react';

import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

const WidgetCloseButton: React.FC = () => {
  return (
    <Popover.Button className="Widget-close" title='Fechar formulario de Feedback'>
      <X weight='bold' className='w-4 h-4' />
    </Popover.Button>
  );
}

export default WidgetCloseButton;