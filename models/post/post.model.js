
module.exports = (sequelize,Sequelize) => {
    const post = sequelize.define('post',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        createdBy:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        title:{
            type: Sequelize.STRING,
        },
        article:{
            type: Sequelize.STRING,
        },
        category:{
            type: Sequelize.STRING,
        }
    })
    return post
}