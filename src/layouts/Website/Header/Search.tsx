import { InputBase } from "@mui/material";
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
	return (
		<InputBase
			sx={{
				bgcolor: "#131E2A",
				borderRadius: "100px",
				p: 1,
				px: 2,
				fontWeight: "400",
				letterSpacing: "2px",
				color: "#5c91b4",
				"& svg": {
					color: "primary.main",
				},
				width: { xs: "100%", md: "unset" },
			}}
			placeholder={"Search"}
			startAdornment={
				<RiSearch2Line style={{ marginRight: "0.7rem", fontSize: "2rem" }} />
			}
		/>
	);
};

export default Search;
