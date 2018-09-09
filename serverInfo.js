const API = 'https://api.guildwars2.com/v2/worlds?ids=1003'
// const API = 'http://localhost:3000/'



module.exports{

    refresh(){
        return fetch(API)

    }
}
