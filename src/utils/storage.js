const store = new Map();
module.exports = async (userId, tokens) => {
     
    await store.set(`discord-${userId}`, tokens);

}
//async function storeDiscordTokens(userId, tokens) {
  //}
async function getDiscordTokens(userId) {
  return store.get(`discord-${userId}`);
}
