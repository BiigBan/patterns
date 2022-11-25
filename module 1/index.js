const express = require('express');
const mongoose = require('mongoose');
const patternRouter = require('./routes/pattern.routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/pattern", patternRouter);

async function start() {
    try {
        app.listen(PORT, () => {
            console.log('server started')
        })
    } catch (error) {
        console.log(error);
    }
}


start()