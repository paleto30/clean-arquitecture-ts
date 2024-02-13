import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routerGetway from './router';
import mongoConection from './User/infraestructure/config/mongoConexion';

const PORT = process.env.PORT || 6000;

const app = express();

app.use(cors());
app.use(express.json());

mongoConection().then(() => console.log(`Conexion ${process.env.MONGO_URI}`));

app.use('/api/v1', routerGetway);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})