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
  Textarea,
} from "@nextui-org/react";

import {jsPDF} from "jspdf";
import { 
Document,
Packer,
Paragraph,
TextRun,
Footer,
Header,
PageNumber,
NumberFormat,
PageOrientation
}from "docx";
import { saveAs } from 'file-saver'

// variable 
//var pdf = new jsPDF('p', 'mm', 'f4');
//const mytext = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ";

//function
const textHeader = new Paragraph({
	text: "SMF - Senat Mahasiswa Fakultas\nSMK sekolah menengah kejuruan",
	alignment: "right",
});

const doc = new Document({
	sections: [
	{
		// headers content
		headers: 
		{
			default: new Header({
				children: 
				[
					textHeader
				],
			}),
		},
		
		// children  content
		children: 
		[
			new Paragraph({
                children: [new TextRun("Hello World")],
            }),
		],
	}],
});

const saveDoc = () => {
	Packer.toBlob(doc).then((blob) => {
		// saveAs from FileSaver will download the file
		saveAs(blob, "example.docx");
	});
};


export default function Home() {
  
  // local variable
  const refPendahuluan 	= useRef();
  const refNamaKegiatan = useRef();
  const refIsi 			= useRef();
  
  // textarea Holder variable
  const [pendahuluan, setPendahuluan] 	= useState("");
  const [namaKegiatan, setNamaKegiatan] = useState("");
  const [isi, setIsi] 					= useState("");
  
  return (
	<Container 
	alignItems="center"
	style={{
		marginBottom: "100px"
		
	}}
	>
		{/*===Header Section===*/}
		<Container
		style={{
			borderBottom: "4px solid red",
			margin: "10px 0px 10px 0px",
		}}
		>
			<h1>LKU Form Otomatis</h1>
			<Text style={{}} >masukan manual atau tata cara penggunaan web ini</Text>
		</Container>
		
		{/*===Body Section===*/}
		<Container>
			
			{/*Pendahuluan*/}
			<h3>Pendahuluan.</h3>
			<Spacer y={2}/>
			<Textarea
			  ref={refPendahuluan}
			  labelPlaceholder="Pendahuluan"
			  fullWidth="true"
			  minRow={3}
			  maxRow={10}
			/>
			
			{/*nama kegiatan*/}
			<Spacer y={2}/>
			<h3>Nama Kegiatan</h3>
			<Spacer y={2}/>
			<Textarea
			  ref={refNamaKegiatan}
			  labelPlaceholder="Nama Kegiatan"
			  fullWidth="true"
			  minRow={2}
			  maxRow={10}
			/>
			  
			{/*ISI*/}
			<Spacer y={2}/>
			<h3>Isi</h3>
			<Spacer y={2}/>
			<Textarea
			  ref={refIsi}
			  labelPlaceholder="Isi"
			  fullWidth="true"
			  minRow={4}
			  maxRow={20}
			/>
			
			<Spacer y={2}/>
			<Button
			auto
			ghost
			size="lg"
			onPress={()=>{
				//setPendahuluan(refPendahuluan.current.value);
				//console.log(pendahuluan);
				saveDoc();
			}}
			>Submit!</Button>
			  
			<Text>{pendahuluan}</Text>
			
		</Container>
	  
	  
    </Container>
  );
}

