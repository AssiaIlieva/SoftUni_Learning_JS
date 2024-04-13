function requestValidator(obj){
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidSymbol = ['<', '>', '\\', '&', `"`, `'`]

    if(!validMethods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method')
    };
    if(!obj.uri || !obj.uri === '*' || !obj.uri.match(uriPattern)){
        throw new Error('Invalid request header: Invalid URI');
    };
    if(!validVersion.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    };
    if(!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message');
    };
    for(let el of obj.message){
        if(invalidSymbol.includes(el)){
            throw new Error('Invalid request header: Invalid Message');
        };
    };
    return obj;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  )
  requestValidator({
    method: 'OPTIONS',
    uri: '&copy;',
    version: 'HTTP/1.2',
    message: '-recursive'
  }
  )
