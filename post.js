import * as fs from 'fs';
import { TemplateHandler } from 'easy-template-x';

// 1. read template file
const templateFile = fs.readFileSync('post.docx');

// 2. process the template
const data = {
    "judul": "LAPORAN PERTANGGUNGJAWABAN KEGIATAN\nELEKTRO VIRTUAL (TROVI)",
	"detail judul": "BIDANG IV DEPARTEMEN KADERISASI DAN INFORKOM\nSENAT MAHASISWA FAKULTAS\nFAKULTAS TEKNIK ELEKTRONIKA DAN KOMPUTER\nUNIVERSITAS KRISTEN SATYA WACANA\nSALATIGA\n2022",
	"pendahuluan": "Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa untuk berkat anugerah dan karunia yang telah dilimpahkan kepada kami, sehingga kami dapat melaksanakan kegiatan Electro Virtual (TROVI).\n}Terima kasih kami ucapkan kepada semua pihak yang telah membantu sehingga kegiatan ini dapat terselenggara dengan baik dan lancar. Kami berharap kegiatan ini dapat berguna bagi mahasiswa baru untuk beradaptasi dengan lingkungan yang baru berupa penyesuaian baik dalam akademik FTEK, norma, serta nilai-nilai yang dianut.\nKami meminta maaf jika terdapat kekurangan dan kesalahan baik yang disengaja maupun tidak disengaja. Kami berharap Laporan Pertanggungjawaban Kegiatan ini dapat menjadi tolak ukur untuk mengadakan kegiatan sejenis berikutnya",
	//"nama kegiatan": "Elektro Virtual (TROVI)",
	//"penutup": "Demikian laporan pertanggungjawaban kegiatan Elektro Virtual (TROVI) Fakultas Teknik Elektronika dan Komputer Universitas Kristen Satya Wacana yang kami buat. Kami harap laporan pertanggungjawaban ini dapat menjadi masukan dan bahan pertimbangan yang bermanfaat untuk pelaksanaan kegiatan sejenis di masa mendatang. Terima Kasih",
};

const handler = new TemplateHandler();
const doc = await handler.process(templateFile, data);

// 3. save output
fs.writeFileSync('out.docx', doc);