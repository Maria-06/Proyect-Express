//importamos la conexión a la base de datos 
import db from "../database/Database.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    title_blogs: {type: DataTypes.STRING},
    content_blogs: {type: DataTypes.STRING}
})

export default BlogModel