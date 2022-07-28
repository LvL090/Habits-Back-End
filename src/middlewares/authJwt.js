import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from '../models/Role'

const unauthorized = "No dispones de la autorización adecuada";

export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) return res.status(401).json({ message: unauthorized });

        const token = authHeader && authHeader.split(" ")[1];

        if(!token) return res.status(403).json({message: "Usuario no encontrado"})
    
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id
        
        const user = await User.findById(req.userId, {password: 0})
        
        if (!user) return res.status(404).json({message: "Usuario no encontrado"})
    
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json({message: unauthorized})
    }
};

export const isSameUserOrAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ message: unauthorized });

    const token = authHeader && authHeader.split(" ")[1];

    if(!token) return res.status(403).json({message: "Usuario no encontrado"})

    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id
    
    const user = await User.findById(req.userId, {password: 0})
    const roles = await Role.find( {_id: {$in: user.roles} } )
    
    if (!user) return res.status(404).json({message: "Usuario no encontrado"})
    
    for (let i=0; i< roles.length; i++) {
        if (roles[i].name === 'admin') {
            next()
            return;
        }
    }

    if (req.userId !== req.params.id) return res.status(401).json({message: unauthorized})

    next()
  } catch (error) {
      console.error(error)
      return res.status(401).json({message: unauthorized})
  }
}

export const isUser =async(req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find( {_id: {$in: user.roles} } )
    
    for (let i=0; i<roles.length; i++) {
        if (roles[i].name === 'user') {
            next()
            return;
        }
    }

    return res.status(403).json({message: unauthorized})
    
}

export const isAdmin =async(req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find( {_id: {$in: user.roles} } )
    console.log(roles);
    
    for (let i=0; i< roles.length; i++) {
        if (roles[i].name === 'admin') {
            next()
            return;
        }
    }

    return res.status(403).json({message: unauthorized})
}