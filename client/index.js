import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { 
Breadcrumb, 
Layout, 
Menu,
Input,
Form
} from 'antd';

import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;


const App = () =>{
	const [collapsed, setCollapsed] = useState(false);
	return (
		
		<Layout>
			<Header>Header</Header>
			<Layout>
				<Sider>Sider</Sider>
				<Content>
				
					<Form
					labelCol={{
					  span: 4,
					}}
					wrapperCol={{
					  span: 14,
					}}
					layout="horizontal"
				    >
					<Form.Item label="TextArea">
					  <TextArea rows={4} />
					</Form.Item>
					</Form>
				
				</Content>
				<Footer>Footer</Footer>
			</Layout>
        </Layout>
	);
};

ReactDOM.render( <App/>, document.getElementById('root')
);