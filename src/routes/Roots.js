// Router
import { Routes, Route } from "react-router-dom";

// Components
import { TestList } from "../components/ui/TestList";
import { Test } from "../components/ui/Test";

function Roots() {
  return (
    <Routes>
      <Route path="/" element={<TestList />} />
      <Route path="/:id" element={<Test />} />
    </Routes>
  );
}

export default Roots;
