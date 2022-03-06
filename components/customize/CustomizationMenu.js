import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { SketchPicker } from "react-color";
import { ConfigProvider } from "antd";
export const CustomizationMenu = () => {
	const [visible, setVisible] = useState(false);
	const [state, setState] = React.useState({
		theme: "light",
	});
	const [color, setColor] = useState({
		primaryColor: "#1890ff",
		errorColor: "#ff4d4f",
		warningColor: "#faad14",
		successColor: "#52c41a",
		infoColor: "#1890ff",
	});

	const showDrawer = () => {
		setVisible(true);
	};
	const options = [
		{ label: "Light", value: "light" },
		{ label: "Dark", value: "Dark" },
	];
	const changeTheme = (e) => {
		setState({
			theme: e.target.value,
		});
	};
	const onClose = () => {
		setVisible(false);
	};

	const onColorChange = (nextColor) => {
		const mergedNextColor = {
			...color,
			...nextColor,
		};
		setColor(mergedNextColor);
		ConfigProvider.config({
			theme: mergedNextColor,
		});
	};

	return (
		<>
			<Button
				shape="round"
				icon={<SettingOutlined />}
				className="customization-btn pr-10"
				type="primary"
				onClick={showDrawer}
				size="middle"
			></Button>
			<Drawer
				title="Customize"
				width={300}
				placement="right"
				onClose={onClose}
				visible={visible}
			>
				<div>
					<p className="text-base font-semibold">Theme:</p>
					<Radio.Group
						options={options}
						onChange={changeTheme}
						value={state.theme}
						optionType="button"
						buttonStyle="solid"
					/>
				</div>
				<div className="mt-4">
					<p className="text-base font-semibold">Primary Color:</p>
					<SketchPicker
						className="w-full"
						presetColors={["#1890ff", "#25b864", "#ff6f00"]}
						color={color.primaryColor}
						onChange={({ hex }) => {
							onColorChange({
								primaryColor: hex,
							});
						}}
					/>
				</div>
				<div className="mt-4">
					<p className="text-base font-semibold">Error Color:</p>
					<SketchPicker
						className="w-full"
						presetColors={["#1890ff", "#25b864", "#ff6f00"]}
						color={color.errorColor}
						onChange={({ hex }) => {
							onColorChange({
								errorColor: hex,
							});
						}}
					/>
				</div>
				<div className="mt-4">
					<p className="text-base font-semibold">Success Color:</p>
					<SketchPicker
						className="w-full"
						presetColors={["#1890ff", "#25b864", "#ff6f00"]}
						color={color.successColor}
						onChange={({ hex }) => {
							onColorChange({
								successColor: hex,
							});
						}}
					/>
				</div>
				<div className="mt-4">
					<p className="text-base font-semibold">Warning Color:</p>
					<SketchPicker
						className="w-full"
						presetColors={["#1890ff", "#25b864", "#ff6f00"]}
						color={color.warningColor}
						onChange={({ hex }) => {
							onColorChange({
								warningColor: hex,
							});
						}}
					/>
				</div>
				<div className="mt-4">
					<p className="text-base font-semibold">Info Color:</p>
					<SketchPicker
						className="w-full"
						presetColors={["#1890ff", "#25b864", "#ff6f00"]}
						color={color.infoColor}
						onChange={({ hex }) => {
							onColorChange({
								infoColor: hex,
							});
						}}
					/>
				</div>
			</Drawer>
			<style jsx global>{`
				.customization-btn {
					position: fixed;
					top: 60%;
					right: -20px;
				}
			`}</style>
		</>
	);
};
