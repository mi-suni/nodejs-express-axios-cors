// server.js

const express = require('express')
const cors = require('cors')

const app= express()

app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
  allowedHeaders: 'Content-Type' 
}))

app.use(express.json())
app.use(express.text())

let data = { message: '여러분 화이팅!' };

app.options('/', (req, res) => {
  res.status(204).send();
  return;
})

app.get('/', (req, res) => {
  return res.status(200).json(data);
})

app.post('/', (req, res) => {
  data.message = req.body;
  return res.status(200).send(`받은 POST 데이터: ${req.body}`);
})

app.put('/', (req, res) => {
  data.message = req.body;
  return res.status(200).send(`업데이트된 데이터: ${req.body}`);
})

app.delete('/', (req, res) => {
  data = {};
  return res.status(200).send('데이터가 삭제되었습니다.');
})

// const server = http.createServer((req, res) => {
//   if (req.method === 'OPTIONS') {
//     res.writeHead(204, headers);
//     res.end();
//     return;
//   }

//   if (req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json', ...headers });
//     res.end(JSON.stringify(data));
//   }

//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       data.message = body;
//       res.writeHead(200, headers);
//       res.end(`받은 POST 데이터: ${body}`);
//     });
//   }

//   if (req.method === 'PUT') {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       data.message = body;
//       res.writeHead(200, headers);
//       res.end(`업데이트된 데이터: ${body}`);
//     });
//   }

//   if (req.method === 'DELETE') {
//     data = {};
//     res.writeHead(200, headers);
//     res.end('데이터가 삭제되었습니다.');
//   }
// });

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
