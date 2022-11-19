// Router
import { Routes, Route } from "react-router-dom";

// Components
import { TestList } from "../components/tests/TestList";
import { Test } from "../components/tests/Test";

function Roots() {
  return (
    <Routes>
      <Route path="/" element={<TestList />} />
      <Route path="/:id" element={<Test />} />
    </Routes>
  );
}

export default Roots;
