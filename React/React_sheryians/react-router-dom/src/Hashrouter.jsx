import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";

export const Hashrouter = () => {
  return (
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}
