import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from '../../components/Host/Host';
import Tag from '../../components/Tag/Tag';
import Rate from '../../components/Rate/Rate';

import "./Location.css"
// carrousel-轮播图 collapse-折叠组件 host-主机信息 rate-评分 tag-标签 axios-获取图片数据

function Location() {
	// 从 React Router 获取路由参数和导航函数
	const params = useParams();
	const navigate = useNavigate();
	const [pickedAppart, setPickedAppart] = useState();

	// 使用状态钩子和副作用钩子来获取数据
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("/location.json");
			//fetch api avec AXIOS  发送异步请求获取数据
			const picked = res.data.find(({ id }) => id === params.id);
			//在获取到数据后，通过 id 参数查找匹配的元素
			// res.data.map(() => setPickedAppart(picked));
			setPickedAppart(picked);
			//将每个元素都设置为 pickedAppart
			if (picked === undefined) {
				navigate("/404", { state: { message: "Can't get data" } });
				//若未找到匹配元素，导航到 404 页面 la page 404 , URL de logement invalide
			}
		};
		getData();
		// 调用异步函数
	}, [params.id, navigate]); // array vide du useEffect pour ne lancer qu'une seule fois

	// vérifier la valeur 检查是否有空值，有则停止，避免错误，quip为数组
	const slidePics = pickedAppart && pickedAppart.pictures;
	const tags = pickedAppart && pickedAppart.tags;
	const equipments = pickedAppart && pickedAppart.equipments;
	const equip =
		pickedAppart && equipments.map((item, index) => (
			<li key={index} className="equipList">{item}</li>
		));

	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (<Tag key={tag} tag={tag} />))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container">
							<Host
								hostName={pickedAppart.host.name}
								hostPic={pickedAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={pickedAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={pickedAppart.description} //字符串
					/>
					<Collapse 
						aboutTitle="Équipements" 
						aboutText={equip}  //数组
					/>
				</div>
			</div>
		)
	);
}

export default Location;
