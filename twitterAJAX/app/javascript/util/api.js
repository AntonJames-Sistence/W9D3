const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-CSRF-Token': csrfToken,
    ...options.headers
  };


  // return await fetch(url, options);
  const response = await fetch(url, options);
  if(response.ok){
    return response.json();
  } else {
    throw new Error(response);
  }
  
}

export function followUser(id){
  let url = `/users/${id}/follow`
  return customFetch(url, { method: "POST" });

}

export function unfollowUser(id){
  let url = `/users/${id}/follow`
  return customFetch(url, { method: "DELETE" });
}



