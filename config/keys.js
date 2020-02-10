if(process.env.Node_env == "production"){
    module.exports = require('./prod')
}
else{
    module.exports = require('./dev')
}