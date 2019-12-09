module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  const method = arr[0];
  const path = arr[1];
  const body = arr[4].split('\n')[2];

  if(body){
    return { method, path, body };
  } else {
    return { method, path }; 
  } 
};
