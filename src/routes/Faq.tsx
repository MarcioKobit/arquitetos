import Collapse from "../components/Collapse";
import NavBar from "../components/NavBar";

const Faq = () => {
	const arr = [
		{
			topic: "Sobre os benefícios",
			data: [
				{
					title: "Como resgatar seus pontos?",
					subtitle: "Como resgatar seus pontos?",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae egestas dolor. Aliquam molestie mi id eros pharetra imperdiet. Nulla tincidunt vitae tortor nec semper. Proin rutrum risus lectus, ut pulvinar arcu consequat sed. Mauris eu turpis id tortor fermentum accumsan. Vivamus libero ante, faucibus sit amet dapibus ac, auctor sit amet justo. Cras ultricies, mauris ac auctor tincidunt, turpis tellus porta lacus, eu placerat tellus odio nec ex. Aliquam ex lacus, laoreet a dolor a, dapibus accumsan purus. Suspendisse iaculis pretium arcu, eget lobortis tellus volutpat sed. Sed pharetra velit at elit lacinia convallis. Ut vestibulum convallis egestas. Sed scelerisque sagittis leo nec ullamcorper. Sed sit amet ornare metus.Nam et placerat diam. Sed interdum massa ut dapibus convallis. Etiam luctus nibh in ante varius, in commodo erat placerat. Curabitur sagittis, sapien vitae efficitur viverra, elit ligula malesuada enim. Sollicitudin accumsan nunc nunc nec erat. In hac habitasse platea dictumst.",
				},
				{
					title: "Como resgatar seus pontos?",
					subtitle: "Como resgatar seus pontos?",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae egestas dolor. Aliquam molestie mi id eros pharetra imperdiet. Nulla tincidunt vitae tortor nec semper. Proin rutrum risus lectus, ut pulvinar arcu consequat sed. Mauris eu turpis id tortor fermentum accumsan. Vivamus libero ante, faucibus sit amet dapibus ac, auctor sit amet justo. Cras ultricies, mauris ac auctor tincidunt, turpis tellus porta lacus, eu placerat tellus odio nec ex. Aliquam ex lacus, laoreet a dolor a, dapibus accumsan purus. Suspendisse iaculis pretium arcu, eget lobortis tellus volutpat sed. Sed pharetra velit at elit lacinia convallis. Ut vestibulum convallis egestas. Sed scelerisque sagittis leo nec ullamcorper. Sed sit amet ornare metus.Nam et placerat diam. Sed interdum massa ut dapibus convallis. Etiam luctus nibh in ante varius, in commodo erat placerat. Curabitur sagittis, sapien vitae efficitur viverra, elit ligula malesuada enim. Sollicitudin accumsan nunc nunc nec erat. In hac habitasse platea dictumst.",
				},
				{
					title: "Como resgatar seus pontos?",
					subtitle: "Como resgatar seus pontos?",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae egestas dolor. Aliquam molestie mi id eros pharetra imperdiet. Nulla tincidunt vitae tortor nec semper. Proin rutrum risus lectus, ut pulvinar arcu consequat sed. Mauris eu turpis id tortor fermentum accumsan. Vivamus libero ante, faucibus sit amet dapibus ac, auctor sit amet justo. Cras ultricies, mauris ac auctor tincidunt, turpis tellus porta lacus, eu placerat tellus odio nec ex. Aliquam ex lacus, laoreet a dolor a, dapibus accumsan purus. Suspendisse iaculis pretium arcu, eget lobortis tellus volutpat sed. Sed pharetra velit at elit lacinia convallis. Ut vestibulum convallis egestas. Sed scelerisque sagittis leo nec ullamcorper. Sed sit amet ornare metus.Nam et placerat diam. Sed interdum massa ut dapibus convallis. Etiam luctus nibh in ante varius, in commodo erat placerat. Curabitur sagittis, sapien vitae efficitur viverra, elit ligula malesuada enim. Sollicitudin accumsan nunc nunc nec erat. In hac habitasse platea dictumst.",
				},
				{
					title: "Como resgatar seus pontos?",
					subtitle: "Como resgatar seus pontos?",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae egestas dolor. Aliquam molestie mi id eros pharetra imperdiet. Nulla tincidunt vitae tortor nec semper. Proin rutrum risus lectus, ut pulvinar arcu consequat sed. Mauris eu turpis id tortor fermentum accumsan. Vivamus libero ante, faucibus sit amet dapibus ac, auctor sit amet justo. Cras ultricies, mauris ac auctor tincidunt, turpis tellus porta lacus, eu placerat tellus odio nec ex. Aliquam ex lacus, laoreet a dolor a, dapibus accumsan purus. Suspendisse iaculis pretium arcu, eget lobortis tellus volutpat sed. Sed pharetra velit at elit lacinia convallis. Ut vestibulum convallis egestas. Sed scelerisque sagittis leo nec ullamcorper. Sed sit amet ornare metus.Nam et placerat diam. Sed interdum massa ut dapibus convallis. Etiam luctus nibh in ante varius, in commodo erat placerat. Curabitur sagittis, sapien vitae efficitur viverra, elit ligula malesuada enim. Sollicitudin accumsan nunc nunc nec erat. In hac habitasse platea dictumst.",
				},
			],
		},
		{
			topic: "Alterar dados da sua conta",
			data: [
				{
					title: "Alterar dados da sua conta?",
					subtitle: "Alterar dados da sua conta?",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae egestas dolor. Aliquam molestie mi id eros pharetra imperdiet. Nulla tincidunt vitae tortor nec semper. Proin rutrum risus lectus, ut pulvinar arcu consequat sed. Mauris eu turpis id tortor fermentum accumsan. Vivamus libero ante, faucibus sit amet dapibus ac, auctor sit amet justo. Cras ultricies, mauris ac auctor tincidunt, turpis tellus porta lacus, eu placerat tellus odio nec ex. Aliquam ex lacus, laoreet a dolor a, dapibus accumsan purus. Suspendisse iaculis pretium arcu, eget lobortis tellus volutpat sed. Sed pharetra velit at elit lacinia convallis. Ut vestibulum convallis egestas. Sed scelerisque sagittis leo nec ullamcorper. Sed sit amet ornare metus.Nam et placerat diam. Sed interdum massa ut dapibus convallis. Etiam luctus nibh in ante varius, in commodo erat placerat. Curabitur sagittis, sapien vitae efficitur viverra, elit ligula malesuada enim. Sollicitudin accumsan nunc nunc nec erat. In hac habitasse platea dictumst.",
				},
			],
		},
	];

	const handleTopicText = (text: string, isGreen: boolean) => {
		let textSplit = text.split(" ");
		return isGreen ? textSplit[textSplit.length - 1] : textSplit.slice(0, -1).join(" ");
	};

	return (
		<>
			<NavBar />
			{/* <div className="h-8 bg-green-600"></div> */}
			<div className="flex flex-col items-center justify-center font-inter mt-8 md:mt-56">
				<div className={`flex absolute top-32 font-bold tracking-wide text-center text-4xl text-green-600`}>Dúvidas</div>
			</div>
			<div className="overflow-x-hidden mt-32 md:mt-0">
				{arr.map((session, index) => {
					return (
						<div key={index}>
							<div className="flex font-light text-3xl text-zinc-400 pt-12 pl-5 md:pl-20 mb-4">
								{handleTopicText(session.topic, false)} <span className="text-green-600 font-bold ml-2">{handleTopicText(session.topic, true)}</span>
							</div>
							{arr[index].data.map((question, questionIndex) => (
								<Collapse key={questionIndex} title={question.title} subtitle={question.subtitle} text={question.text} />
							))}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Faq;
