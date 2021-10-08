module.exports = (app)=>{
    app.use((reg, res, next)=>{
        res.removeHeader('Cross-Origin-Resource-Policy');
        res.removeHeader('Cross-Origin-Embedder-Policy');
        next();
    });
};