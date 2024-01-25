import React from "react";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner"; 
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.css";

function Home() {
  // 使用 useState 钩子来创建一个名为 data 的状态变量，初始值为空数组
  const [data, setData] = useState([]);
  useEffect(() => {
    // 使用 useEffect 钩子来在组件挂载时执行异步操作，获取数据并更新状态
    // 通过 axios 发送 GET 请求，获取本地 JSON 文件的数据
    axios.get("/location.json").then((res) => {
      console.log(res.data); // 添加这行日志语句
      setData(res.data);
    });
   
}, []);


  return (
  //或者使用短语法 <></>（需要 React 版本16.2及以上）
  <section className="homeContainer"> 
    <Banner />
    <div className="cardsContainer">
    {/* 使用 map 方法遍历数据数组，为每个数据项创建卡片 */}
				{data.map((appartement, id) => (
					<div className="cardLocation" key={id}>
            {/* 使用 Link 组件创建链接，链接到特定的位置页面 */}
						<Link className="linkCardLocation" to={`/location/${appartement.id}`}>
              {/* 渲染 Cards 组件，并传递 cover 和 title 属性 */}
							<Cards cover={appartement.cover} title={appartement.title} />
						</Link>
					</div>
				))}
		</div>
  </section>
  );
}

export default Home;