"use strict"

async function send_GET(request) {
  if(typeof request !== 'string') {return new UnvalidValueError(request)}

  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Request to url ${response.url}\n\rfailed with status ${response.status}`);
    }
    return await response.json();

  } catch (error) {
    console.log(error);
    throw new Error('Network error occurred');
    
  } finally {
    await dontSpamRequest(100); //server can block my request if i will be spam
  }
}


function dontSpamRequest(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}