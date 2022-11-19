// Database
import greydivedb from "../../database/greydivedb.json"

// Router Dom
import { useParams} from "react-router-dom";

export const Test = () => {
  const params = useParams()
  // console.log(params.id);

  const findTest = greydivedb.find((oneTest) => {
    return oneTest.cliente === params.id
  })

  console.log("Cliente", findTest)

  return (
    <div>Test</div>
  )
}
