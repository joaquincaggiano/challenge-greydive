// React Hooks
import { useState, useEffect } from "react";

// Database
import greydivedb from "../../database/greydivedb.json";

// Router
import { useNavigate } from "react-router-dom";

// Css
import styles from "../../css/TestList.module.css";

export const TestList = () => {
  const navigate = useNavigate();

  const [dataTest, setDataTest] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
    if (greydivedb.length !== 0) {
      const testsData = greydivedb.map((oneData) => {
        return {
          name: oneData.cliente,
          escenario: oneData.escenario,
        };
      });
      setDataTest(testsData);
      setisLoading(false);
    }
  }, []);

  // console.log("TEST", dataTest);

  return (
    <>
      {!isLoading && (
        <div className={styles.testBox}>
          {dataTest.map((oneTest, i) => (
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
      )}
    </>
  );
};
