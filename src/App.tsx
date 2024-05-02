import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainScreen from "./page/mainScreen/mainScreen";
import GroupProduct from "./page/groupProducts/groupProduct";
import InfoInProduct from "./page/infoInProducts/infoInProduct";
import Review from "./page/reviews/reviews";
import ComparisonProduct from "./page/comparison/comparisonProduct";
import Error from "./page/error/error";

const router = createBrowserRouter([
  { path: "/", element: <MainScreen /> },
  { path: "/groupProduct", element: <GroupProduct /> },
  { path: "/infoInProduct", element: <InfoInProduct /> },
  { path: "review", element: <Review /> },
  { path: "/comparison", element: <ComparisonProduct /> },
  { path: "/error", element: <Error /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
