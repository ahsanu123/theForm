import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import { 
Breadcrumb, 
Layout, 
Menu,
Input,
Form,
Button
} from 'antd';

import {
DesktopOutlined,
FileOutlined,
PieChartOutlined,
TeamOutlined,
UserOutlined,
HeartFilled,
}from '@ant-design/icons';

import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Proposal Trovi', '0', <HeartFilled />),
  getItem('Laporan Magang', '1', <HeartFilled />),
  getItem('Rekomendasi Magang', '2', <HeartFilled />),
  
];

const data = {
	"judul": "LAPORAN PERTANGGUNGJAWABAN KEGIATANELEKTRO VIRTUAL (TROVI)",
	"detailJudul": "BIDANG IV DEPARTEMEN KADERISASI DAN INFORKOM\nSENAT MAHASISWA FAKULTAS\nFAKULTAS TEKNIK ELEKTRONIKA DAN KOMPUTER\nUNIVERSITAS KRISTEN SATYA WACANA\nSALATIGA\n2022",
	"pendahuluan": "lorem ipsum dolor sit amet abc de fg hij 12345 1234 4 4 4!!!! 2 !@($*&@^(@)@*",
	
};




const App = () =>{
  // variable
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('0');
  const [judul, setJudul] = useState(null);
  const [detailJudul, setDetailJudul] = useState(null);
  const [pendahuluan, setPendahuluan] = useState(null);
  
  const refJudul = useRef(null);
  const refDetailJudul = useRef(null);
  const refPendahuluan = useRef(null);
  
  // function 
  const changeMenu = (menu) =>{
	  setSelectedOption(menu.key);
  }
  const MenuContent = props =>{
	  if(selectedOption === '0'){
		  return (
			<Form>
			
			  <h2> Judul</h2>
			  <Form.Item >
			    <TextArea 
				rows={4} 
				placeholder="Judul"
				ref={refJudul}
				value={judul}
				onChange={(text)=>{
					setJudul(text.target.value);
					
				}}
				/>
			  </Form.Item>
			  
			  <h2> Detail Judul</h2>
			  <Form.Item >
			    <TextArea 
				rows={4} 
				placeholder="Detail Judul"/>
			  </Form.Item>
			  
			  <h2> Pendahuluan</h2>
			  <Form.Item >
			    <TextArea 
				rows={4} 
				placeholder="Pendahuluan"/>
			  </Form.Item>
			  
			</Form>
		  );
	  }
	  if(selectedOption === '1'){
		  return (<Form> <h1>Laporan Magang</h1> </Form>);
	  }
	  if(selectedOption === '2'){
		  return (<Form> <h1>Rekomendasi Magang</h1> </Form>);
	  }
  }
  
  const buttonSubmit = async() =>{
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};

		fetch('/api', requestOptions)
		.then((res) => {
			return res.blob();
		})
		.then((blob) => {
			const href = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = href;
			link.setAttribute('download', 'output.docx');
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		})
		.catch((err) => {
			return Promise.reject({ Error: 'Something Went Wrong', err });
		})
  }
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu 
		theme="dark" 
		defaultSelectedKeys={['0']} 
		mode="inline" 
		items={items} 
		onClick={changeMenu}
		/>
      </Sider>
	  
	  <Layout className="site-layout">
	    <Header>
		  <h1 style={{color: 'white', fontSize: 24}} > The Form, Generator DOCX otomatis</h1>
		</Header>
		
		<Content style={{margin: '30px', marginRight: '20px'}} >
		  <div>
		  {/**<MenuContent/>**/}
			{selectedOption === '0' ? <h1>Proposal Trovi</h1>
			:selectedOption === '1' ? <h1>Laporan Magang</h1>
			:<h1>Rekomendasi Magang</h1>
			}
			<Form>
			
			  <h2> Judul</h2>
			  <Form.Item >
			    <TextArea 
				rows={4} 
				placeholder="Judul"
				ref={refJudul}
				value={judul}
				onChange={(text)=>{
					setJudul(text.target.value);
					data["judul"] = text.target.value;
					//console.log(data["judul"]);
				}}
				/>
			  </Form.Item>
			  
			  <h2> Detail Judul</h2>
			  <Form.Item >
			    <TextArea 
				rows={4} 
				placeholder="Detail Judul"
				ref={refDetailJudul}
				value={detailJudul}
				onChange={(text)=>{
					setDetailJudul(text.target.value);
					data["detailJudul"] = text.target.value;
					//console.log(data["judul"]);
				}}
				/>
			  </Form.Item>
			  
			  <h2> Pendahuluan</h2>
			  <Form.Item >
			    <TextArea 
				rows={4} 
				placeholder="Pendahuluan"
				ref={refPendahuluan}
				value={pendahuluan}
				onChange={(text)=>{
					setPendahuluan(text.target.value);
					data["pendahuluan"] = text.target.value;
					//console.log(data["judul"]);
				}}
				/>
			  </Form.Item>
			  
			  <Button
			  type="primary"
			  size="large"
			  onClick={buttonSubmit}
			  >
		        Submit
			  </Button>
			  
			</Form>
		  </div>
		</Content>
	    <Footer
          style={{
            textAlign: 'left',
          }}
        >
          Made With  ❤️ By Ah...
        </Footer>
	  </Layout>
      
    </Layout>
  );
};

ReactDOM.render( <App/>, document.getElementById('root'));