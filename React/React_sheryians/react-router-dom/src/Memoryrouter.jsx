import { MemoryRouter, Routes, Route } from "react-router-dom";

export const Memoryrouter = () => {
  return (
     <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </MemoryRouter>
  )
}
