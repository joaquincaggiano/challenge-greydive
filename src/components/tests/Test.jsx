// Database
import greydivedb from "../../database/greydivedb.json";

// Router Dom
import { useParams } from "react-router-dom";

// Css
import styles from "../../css/Test.module.css";

// React player
import ReactPlayer from "react-player";

// Bootstrap
import Card from "react-bootstrap/Card";

export const Test = () => {
  const params = useParams();

  const findTest = greydivedb.find((oneTest) => {
    return oneTest.cliente === params.id;
  });

  // Convertir string con la primera letra Mayúscula
  const toUpperCaseString = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  console.log("Cliente", findTest);

  return (
    <>
      <h1 className="text-center fw-bold my-3">TEST</h1>
      <h2>
        <b>Cliente:</b> {toUpperCaseString(findTest.cliente)}
      </h2>

      <ReactPlayer
        url={findTest.linkVideo}
        controls
        loop
        width="100%"
        height="100%"
      />

      <h3 className={styles.timeClass}>
        Tiempo del Test:{" "}
        <p className="d-inline text-white">{findTest.timeTest}</p>
      </h3>

      <h2 className="mt-5 mb-md-4 text-center fw-bold fs-1">Transcripción</h2>
      <div className={styles.transcripcionClass}>
        <p className="fs-4">{toUpperCaseString(findTest.transcripcion)}</p>
      </div>

      <h2 className="mt-5 text-center fw-bold fs-1">Tareas</h2>
      <div className="text-lg-center">
        <p className="fs-4 p-2">
          <b className="fs-3">Escenario:</b> {findTest.escenario}
        </p>
      </div>
      <div className="container">
        <div className="row align-items-center">
          {findTest.preguntas.map((oneQuestion, i) => {
            return (
              <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                <h3>Tarea {i + 1}:</h3>
                <Card className={styles.cardStyle}>
                  <Card.Body>
                    <Card.Title>{oneQuestion.texto}</Card.Title>
                    <Card.Text className={`${styles.timeClass} mt-4`}>
                      Duración de la tarea:{" "}
                      <p className="d-inline text-white">
                        {oneQuestion.tiempo}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
