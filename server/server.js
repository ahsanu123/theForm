import * as fs from 'fs';
import { TemplateHandler } from 'easy-template-x';
import express from 'express';
import path from 'path';
import FileSaver from 'file-saver';

const app = express();

const pathInput = path.resolve("contohDocx","lpjKegiatan.docx");
const pathOutput = path.resolve("contohDocx","output.docx")
const templateFile = fs.readFileSync(pathInput);

const data = {
	"judul": "LAPORAN PERTANGGUNGJAWABAN KEGIATANELEKTRO VIRTUAL (TROVI)",
	"detailJudul": "BIDANG IV DEPARTEMEN KADERISASI DAN INFORKOM\nSENAT MAHASISWA FAKULTAS\nFAKULTAS TEKNIK ELEKTRONIKA DAN KOMPUTER\nUNIVERSITAS KRISTEN SATYA WACANA\nSALATIGA\n2022",
	"isi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\nsoftware like Aldus PageMaker including versions of Lorem Ipsum.",
	
};

app.get('/api', async(req, res)=>{
	
	const handler = new TemplateHandler();
	const doc = await handler.process(templateFile, data);
	fs.writeFileSync(pathOutput, doc);
	//res.send(pathOutput );
	res.download(pathOutput);
});
app.get('/data', (req, res) => {
	res.download(pathOutput, 'output.docx');
});
app.use(express.static('dist'));

app.listen(3000, () => console.log('Listening on port 3000!'));