import { MdClose } from "react-icons/md";
const Home = () => {
	return (
		<div>
			<h1 className="text-3xl text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
				Hello world!
				<MdClose
					style={{
						fontSize: "2rem",
					}}
				/>
			</h1>
			<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
				Save Changes
			</button>
		</div>
	);
};

export default Home;
