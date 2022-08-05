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

var pdf = new jsPDF('p', 'mm', 'f4');
const mytext = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ";


const renderPdf = ()=>{
	pdf.
};

export default function Home() {
  return (
	<Container alignItems="center">
	  <h1>LKU Form Otomatis</h1>
	  <Text>masukan manual atau tata cara penggunaan web ini</Text>
	  <br></br><br></br>
	  
	  <Textarea
	  labelPlaceholder="1.Pendahuluan"
	  fullWidth="true"
	  minRow={3}
	  maxRow={10}
	  />
      <Button
	  onPress={()=>{
		  console.log("clicked");
		  renderPdf();
	  }}
	  >Submit!</Button>
    </Container>
  );
}
