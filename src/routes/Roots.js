// Router
import { Routes, Route } from "react-router-dom";

// Components
import { TestList } from "../components/ui/TestList";
import { Test } from "../components/ui/Test";
import { NotFound } from "../components/404/NotFound";

function Roots() {
  return (
    <Routes>
      <Route path="/" element={<TestList />} />
      <Route path="/:id" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Roots;
