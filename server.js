const express = require('express');
const fileUpload = require('express-fileupload');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const db = new sqlite3.Database('./vagas_de_trabalho.db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

app.post('/save-job', (req, res) => {
    const { jobType, jobTitle, jobDescription, jobLink } = req.body;
    const jobImage = req.files ? req.files.jobImage.data : null;

    db.run(`INSERT INTO vagas (tipo_vaga, titulo_vaga, imagem_vaga, descricao_vaga, link_vaga) VALUES (?, ?, ?, ?, ?)`,
        [jobType, jobTitle, jobImage, jobDescription, jobLink],
        function(err) {
            if (err) {
                console.error(err.message);
                res.status(500).send({ message: 'Error saving job' });
            } else {
                res.send({ message: 'Job saved successfully!', id: this.lastID });
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
