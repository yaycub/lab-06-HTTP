module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  const method = arr[0];
  const path = arr[1];
  const body = rawRequest.split('\r\n\r\n')[1];

  if(body){
    return { method, path, body };
  } else {
    return { method, path }; 
  } 
};
