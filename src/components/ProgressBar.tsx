interface Props {
	progress: number;
	points?: number;
	height?: string;
	width?: string;
	text?: string;
}

const ProgressBar = ({ progress, height, width, text, points }: Props) => {
	return (
		<div className={`bg-gray-200 rounded-full overflow-hidden relative ${height ? height : "h-5"} ${width && width} flex items-center`}>
			<div className="h-full bg-green-400 rounded-full" style={{ width: `${progress}%` }}></div>
			{points ? <p className={`absolute top-0 left-3 bottom-0 m-auto flex items-center ${text ? text : "text-sm"} text-gray-600`}>{points.toLocaleString("pt-BR")} pontos</p> : null}
			<p className={`absolute top-0 right-3 bottom-0 m-auto flex items-center ${text ? text : "text-sm"} text-gray-500`}>{`${progress < 100 ? progress : 100}%`}</p>
		</div>
	);
};

export default ProgressBar;
