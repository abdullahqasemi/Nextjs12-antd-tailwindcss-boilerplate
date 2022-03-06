import "antd/dist/antd.css";
import "antd/dist/antd.variable.min.css";
import "../styles/globals.css";

import Default from "../layouts/Default";
import { ConfigProvider } from "antd";
function MyApp({ Component, pageProps }) {
	return (
		<ConfigProvider>
			<Default theme="dark">
				<Component {...pageProps} />
			</Default>
		</ConfigProvider>
	);
}

export default MyApp;
