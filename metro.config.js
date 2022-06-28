// metro.config.js
module.exports = {
resolver: {
    extraNodeModules: {
        stream: require.resolve('readable-stream'),
    } 
},
};