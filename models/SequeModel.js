module.exports = (sequelize,DataTypes) => {

    const Post = sequelize.define('Post',{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:'Quick Brown Fox Jump Over the Lazy Dogs'
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:'Please write something on the board'
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:'Nuruzzaman'
        }
    })

    return Post
}
