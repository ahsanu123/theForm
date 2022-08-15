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
	"isi": "lorem ipsum dolor sit amet abc de fg hij 12345 1234 4 4 4!!!! 2 !@($*&@^(@)@*",
	
};

app.get('/api', async(req, res)=>{
	
	const handler = new TemplateHandler();
	const doc = await handler.process(templateFile, data);
	fs.writeFileSync(pathOutput, doc);
	//res.send(pathOutput );
	res.download(pathOutput);
});
app.use(express.static('dist'));

app.listen(3000, () => console.log('Listening on port 3000!'));