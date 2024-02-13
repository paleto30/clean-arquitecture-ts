import fs from 'fs';


export function escribirLogs(log: string) {

    const logs = log + '\n';

    fs.appendFile('src/User/infraestructure/logs/UserLogs.log', logs, (err) => {
        if (err) {
            console.log(`Error al escribir el log: ${err}`);
        }
    });
}