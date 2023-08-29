import Sequelize from 'sequelize'

const db =  new Squelize('appexpress','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db