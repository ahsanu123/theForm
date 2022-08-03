import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Input,
  Spacer,
  Text,
  Link,
  Textarea 
} from '@nextui-org/react';

import {jsPDF} from "jspdf";

var doc = new jsPDF();


const renderPdf = ()=>{
	 return (
    <Card css={{ mw: "400px" }}>
      <Card.Body>
        <Text>A basic card</Text>
      </Card.Body>
    </Card>
  );
};

export default function Home() {
  return (
	<Container alignItems="center">
	  <h1>LKU Form Otomatis</h1>
	  <Text>masukan manual atau tata cara penggunaan web ini</Text>
	  <br></br>
	  
	  <Textarea
	  labelPlaceholder="1.Pendahuluan"
	  fullWidth="true"
	  minRow={3}
	  maxRow={10}
	  />
      <Button
	  onPress={()=>{
		  console.log("123");
	  }}
	  >Submit!</Button>
    </Container>
  );
}
