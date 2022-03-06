import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Footer, Content } = Layout;
import { CustomizationMenu } from "../components/customize/CustomizationMenu";
export default function Default({ children }) {
	return (
		<>
			<Layout className="layout">
				<Header>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
						{new Array(6).fill(null).map((_, index) => {
							const key = index + 1;
							return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
						})}
					</Menu>
				</Header>
				<Content style={{ padding: "0 50px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<main>{children}</main>
				</Content>
				<Footer style={{ textAlign: "center" }}>Ant Design ©2018</Footer>
			</Layout>
			<CustomizationMenu />
		</>
	);
}
