const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodetest', 'root', '1114', {
    host: '104.199.239.95',
    dialect: 'mysql',

    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }

});

var db        = {};

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});




/**
 * 노트 모데 정의합니다sdlkflsddkflk
 * @type {Model}
 */
const Note = sequelize.define('note', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }

});

// force: true will drop the table if it already exists
Note.sync({force: false}).then(() => {
    // Table created
    return Note.create({
        title: '고경준 천재님이십니다sdlfksdlfksdlkf',
        content: 'contesdjfksdjf------------>'
    });
});


/**
 * user모델 정의합니다sdlfksdlkflsdkflk
 * @type {Model}
 */
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
User.sync({force: false}).then(() => {
    // Table created
    return User.create({
        firstName: '경준',
        lastName: '고고고고고고'
    });
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User  = User;


module.exports = db;



