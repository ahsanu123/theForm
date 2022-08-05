import {useRef, useState} from "react";
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
} from "@nextui-org/react";

import {jsPDF} from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";

// variable 
var pdf = new jsPDF('p', 'mm', 'f4');
const mytext = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ";

//function
export default function Home() {
  const refPendahuluan = useRef();
  const [pendahuluan, setPendahuluan] = useState("");
  
  return (
	<Container alignItems="center">
	  <h1>LKU Form Otomatis</h1>
	  <Text>masukan manual atau tata cara penggunaan web ini</Text>
	  <br></br><br></br>
	  
	  <Textarea
	  ref={refPendahuluan}
	  labelPlaceholder="1.Pendahuluan"
	  fullWidth="true"
	  minRow={3}
	  maxRow={10}
	  />
	  
	  <br></br>
      <Button
	  onPress={()=>{
		  setPendahuluan(refPendahuluan.current.value);
		  console.log(pendahuluan);
	  }}
	  >Submit!</Button>
	  
	  <Text>{pendahuluan}</Text>
	  
    </Container>
  );
}
