const fetch = require("node-fetch")
const { magenta, yellow} = require("colorette")
module.exports = async ({token,key,id, body, url}) => {
        if(!body) throw TypeError("[SETUP_ERROR] Body Required for this method.")
        const response = await fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bot ${token}`,
  },
});
if (response.ok) {
  const data = await response.json();
 // console.log(data);
console.log(magenta(`[SUCCESSFULLY] • ${yellow('Data')} synchorized (Added)`))

} else {
  //throw new Error(`Error pushing discord metadata schema: [${response.status}] ${response.statusText}`);
  const data = await response.text();
  console.log(yellow(data));
}
}
