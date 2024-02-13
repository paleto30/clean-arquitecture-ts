import { connect } from "mongoose";
import config from "./config";



const MONGO_URI = config.mongo_uri;




async function mongoConection(): Promise<void> {
    try {
        const DB_URI = <string>MONGO_URI;
        await connect(DB_URI);
    } catch (error) {
        console.log(error);
    }
}



export default mongoConection;