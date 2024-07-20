import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./NavComponent";
import SearchBar from "./SearchBar";
import CardComponent from "./CardComponent";
import APIRequest from "./APIComponent";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { InfinitySpin } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <NavComponent />
      <SearchBar setSearchValue={setSearchValue} />
      <APIRequest setData={setApi} setLoading={setLoading} />
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <InfinitySpin
            visible={true}
            width="200"
            color="black"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <Row
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="mt-4 justify-content-center gap-4">
          {api
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(searchValue);
            })
            .map((item) => {
              return <CardComponent key={item.id} data={item} />;
            })}
        </Row>
      )}
    </div>
  );
}

export default App;
