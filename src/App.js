import { useEffect, useState } from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";
import MenuData from "./data/MenuData";

function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);

  const pagination = (allFood) => {
    const foodPerPage = 3;

    // จำนวนเลขหน้า = จน.ทั้งหทด / จน.ข้อมูลแต่ละหน้า
    // Math.ceil คือ คำสั่งสำหรับปัดทศนิยมขึ้นให้เป็นเลขจำนวนเต็ม ได้ทั้งเต็มบมเต็มลบ
    const pages = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage; // [0-2] , 1*3 = [3] , [6] , ...
      return MenuData.slice(start, start + foodPerPage);
      // start -> 0, 3, 6, 9, 12
      // start + foodPerPage -> 3, 6, 9, 12, 15
    });
    return newFood;
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setFoodData(paginate[page]);
  }, [page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {foodData.map((food, index) => {
          return <FoodCard key={index} {...food} />;
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => handlePage(index)}
              className={`page-btn ${index === page ? "active-btn" : null}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
