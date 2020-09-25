import * as React from 'react';
import {useState} from "react";

interface Props {
 children: (count: number, setCount:  React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null
};

export const Couter: React.FC<Props> = ({children}) => {
 const [count, setCount] = useState(0)
 return (
  <div>
   {children(count, setCount)}
  </div>
 );
};