'use client';

import { Input, Textarea } from '@nextui-org/react';
import * as React from 'react';

function page() {
  return (
    <div className="container mx-auto flex max-w-3xl flex-col py-10">
      <div className="flex flex-col space-y-4">
        <Input type="text" label="Buyer Name" />
        <Textarea type="text" label="Buyer Name" />
      </div>
    </div>
  );
}

export default page;
