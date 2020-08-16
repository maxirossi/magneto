class Response{
    
    constructor(){
        this.errorBody = { "success" : false };
        this.successBody = { "success" : true };
    }
    
    success(req, res, data = null, body = '',  statusCode = 200){
        body == '' || body === null ? body = this.successBody : body;
        if ( data ){ body.data = data; }
        res.status( statusCode )
            .send( body )
    }

    error(req, res, data, body = '', statusCode = 500){
        body == '' || body === null ? body = this.errorBody : body;
        if ( data ){ body.data = data; }
        res.status( statusCode )
            .send( body )
    }
}

module.exports = {
    Response
}