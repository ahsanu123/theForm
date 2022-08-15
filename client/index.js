import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { 
Breadcrumb, 
Layout, 
Menu,
Input,
Form
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
	"isi": "lorem ipsum dolor sit amet abc de fg hij 12345 1234 4 4 4!!!! 2 !@($*&@^(@)@*",
	
};

const App = () =>{
  // variable
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('1');
  
  // function 
  const changeMenu = (menu) =>{
	  setSelectedOption(menu.key);
	  data["judul"]= "google"+menu.key;
	  console.log(data["judul"]);
  }
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu 
		theme="dark" 
		defaultSelectedKeys={['1']} 
		mode="inline" 
		items={items} 
		onClick={changeMenu}
		/>
      </Sider>
	  
	  <Layout className="site-layout">
		<Content>
		  <p>Selected menu: {selectedOption}, {items[selectedOption].label}</p>
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