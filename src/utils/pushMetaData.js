const fetch = require("node-fetch")
module.exports = async (options = {}) => {
if(!options) throw TypeError("[ERROR] Options required for this method.")
    const url = `https://discord.com/api/v10/users/@me/applications/${options.id}/role-connection`;
//  const accessToken = await getAccessToken(options.userId, options.tokens);
 const met = options.metadata
    const body = {
    platform_name: 'Droles By Nicat.dcw',
    met
  };
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${options.accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Error pushing discord metadata: [${response.status}] ${response.statusText}`);
  }
}
