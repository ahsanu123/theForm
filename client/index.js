import React, { useState, useRef,useEffect } from 'react';
import ReactDOM from 'react-dom';

import { 
Avatar,
List,
Skeleton,
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
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const { Header, Footer, Sider, Content } = Layout;

const App = () =>{
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
	fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
		console.log(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
		
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        //window.dispatchEvent(new Event('resize'));
      });
	};
	
	const fetching = () =>{
	  fetch('/data')
      .then((res) => res.json())
      .then((res) => {
		console.log(res);
      });
	};
	
	const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
	
	
  
  return(
	<Layout>
      <Header style={{color:'white',fontSize: 25}}>LIST TOP 10</Header>
      <Content style={{marginLeft: 15, marginRight: 15}} >
		<List
		  loading={initLoading}
		  itemLayout="horizontal"
		  loadMore={loadMore}
		  dataSource={list}
		  renderItem={(item) => (
			<List.Item
			  actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
			>
			  <Skeleton avatar title={false} loading={item.loading} active>
				<List.Item.Meta
				  avatar={<Avatar src={item.picture.large} />}
				  title={<a href="https://ant.design">{item.name?.last}</a>}
				  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
				/>
				<div>content</div>
			  </Skeleton>
			</List.Item>
		  )}
		/>
		 <Button onClick={fetching}>fetch</Button>
	  </Content>
      <Footer>Made With  ❤️ By Ah...</Footer>
    </Layout>
    
  );
};

ReactDOM.render( <App/>, document.getElementById('root'));