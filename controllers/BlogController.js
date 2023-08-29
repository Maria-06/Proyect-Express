//importamos el Modelo
import BlogModel from "../models/BlogModel.js";

//Metodos para la CRUD

//Crear Registro

//Consultar Todo
export const getAllBlogs = async (req,res) =>{
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Consulta Especifica
export const getBlog=(req,res)=>{
    try {
        BlogModel.findAll(
            where
        )
    } catch (error) {
        
    }
}

//Actualizar Registro

//Eliminar Registro