// Database
import greydivedb from "../../database/greydivedb.json";

// Router
import { useNavigate } from "react-router-dom";

// Css
import styles from "../../css/TestList.module.css";

export const TestList = () => {
  const navigate = useNavigate();

  const testsData = greydivedb.map((oneData) => {
    return {
      name: oneData.cliente,
      escenario: oneData.escenario,
    };
  });
  console.log("TEST", testsData);

  return (
    <div className={styles.testBox}>
      {testsData.map((oneTest, i) => (
        <div
          className={styles.card}
          key={i}
          onClick={() => navigate(`/${oneTest.name}`)}
        >
          <div className={styles.front}>
            <h2>{oneTest.name[0].toUpperCase() + oneTest.name.slice(1)}</h2>
          </div>
          <div className={styles.back}>
            <p>{oneTest.escenario}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
