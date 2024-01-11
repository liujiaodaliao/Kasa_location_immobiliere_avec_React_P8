import Chevron from "../../assets/arrow_back.svg";
import { useState, useRef, useEffect,} from "react"; //import des hooks de base react
import "./Collapse.css";

	// 使用 useState 来创建两个状态变量 toggle 和 calculatedHeight，
function Collapse(props) {
	const [toggle, setToggle] = useState(false); //  defini le state du toggle ( false par défaut)
	const [calculatedHeight, setCalculatedHeight] = useState(); // je definis le state de la hauteur du collapse
	const refHeight = useRef();//并使用 useRef 创建了 refHeight 以存储对 toggle 元素的引用，在折叠展开时获取元素的滚动高度

    // useEffect 钩子在组件挂载时执行，捕获 collapse_toggle 元素的初始高度。使用 setCalculatedHeight 函数存储在 calculatedHeight 状态中。

	useEffect(() => {
		setCalculatedHeight(`${refHeight.current.scrollHeight}px`); 
		console.log("Calculated height:", refHeight.current.scrollHeight);
	}, [toggle]);

	const toggleState = () => {
		// défini la fonction toggleState qui modifie la valeur toggle au clic 切换 toggle 状态的函数
		console.log('Toggle state event triggered!');
		setToggle(!toggle);
		setCalculatedHeight(`${refHeight.current.scrollHeight}px`);
	};

	return (
		// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style

		// <div className="collapse">
		<div
		className={`collapse ${toggle ? "expanded" : ""}`}
		style={{ marginBottom: toggle ? `${calculatedHeight}` : "0" }}
	    >
			<div onClick={toggleState} className="collapse_visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={`${
					toggle ? "collapse_toggle animated" : "collapse_toggle"
				  }`}
				style={{ height: toggle ? `${calculatedHeight}` : "0" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}


export default Collapse;