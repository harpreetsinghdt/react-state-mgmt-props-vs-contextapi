import React from 'react'
import ContextProvider from "./ContextProvider";
import SiblingComponentA from './SiblingComponentA';
import SiblingComponentB from './SiblingComponentB';
import SiblingComponentC from './SiblingComponentC';
import ThemeButton from './ThemeButton';
import '../css/style.css';

export default function ContextApi() {
  return (
    <div className="app">
      <ContextProvider>
        <SiblingComponentA />
        <SiblingComponentB />
        <SiblingComponentC />
        <ThemeButton />
      </ContextProvider>
    </div>
  )
}