
module.exports = (sequelize,Sequelize) => {
    const user = sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type: Sequelize.STRING
        },
        phone_number:{
            type: Sequelize.STRING,
            unique: true,
        },
        email:{
            type:Sequelize.INTEGER
        },
    })
    return user
}