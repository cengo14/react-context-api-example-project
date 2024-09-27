import { useContext } from "react";
import { ProductContext } from "./../context/ProductContext";
import Loader from "../component/Loader";
import Error from "../component/Error";
import Card from "../component/Card";

const Home = () => {
  const { data, err, isLoading } = useContext(ProductContext);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : err ? (
        <Error err={err} />
      ) : (
        data && (
          <div className="wrapper">
            {data.products.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )
      )}
    </div>
  );
};
export default Home;
