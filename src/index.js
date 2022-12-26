const fetch = require("node-fetch")
const post = require("./utils/post")
const update = require("./utils/updateMetaData")
const push = require("./utils/pushMetaData")
const storage = require("./utils/storage")
const {blue, bgGreen} = require("colorette")
const crypto = require("crypto")


module.exports = class Client {
    constructor({CLIENT_TOKEN,secret, CLIENT_ID}){
        
        if(!CLIENT_TOKEN) throw TypeError("[ERROR] Client Token missing in constructor ")
        if(!CLIENT_ID) throw TypeError("[ERROR] Client ID missing in constructor ")
       this.token = CLIENT_TOKEN;
        this.id = CLIENT_ID;
        const url = `https://discord.com/api/v10/applications/${this.id}/role-connections/metadata`;
 this.endpoint = url;
        console.log(bgGreen(blue(`• Client`) + ` has Connected!.`))
    }
 add(options = {}){
    post({
        key: options.key,
        token: this.token,
        body: options.body,
        id: this.id,
        url: this.endpoint
    })
     this.body = options.body;
}
    generateCallBack(options = {}){
        const state = crypto.randomUUID();
if(!options.callback) throw TypeError("[ERROR] Callback url is required for this method.")
  const url = new URL('https://discord.com/api/oauth2/authorize');
  url.searchParams.set('client_id', this.id);
  url.searchParams.set('redirect_uri', options.callback);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('state', state);
  url.searchParams.set('scope', 'role_connections.write identify');
  url.searchParams.set('prompt', 'consent');
  return { state, url: url.toString() }
    }
    updateMetaData(userId){
        if(!userId) throw TypeError("[ERROR] User Id is required for this method.")

        update(userId)
    }
    pushMetaData(userId,body,tokens,id, accessToken){
          push({
        userId: userId,
        body: body,
        id: id,
        token: tokens,
        accessToken: accessToken      
    })
    }
    getData(){
        return {
            token: this.token,
            url: this.endpoint,
            id: this.id,
            metadata: this.body,
            Date: Date.now()
        }
    }
    storeDiscordTokens(userId, tokens){
        storage(userId,tokens)
    }
}
