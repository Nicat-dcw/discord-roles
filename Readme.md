<h1 align="center" color="blue">
Discord Roles
</h1>

## Light Weight Linked Roles Package with Discord API Interaction.

### Start:
```js
const { Client } = require("discord-roles")
const client = new Client({
    CLIENT_TOKEN: "", // Enter your Discord Bot Token
    CLIENT_ID: "" // Enter your Discord Bot ID
})
```

### Adding MetaData:
```js
client.add({
      body: [
        {
       key: 'cake',
    name: 'Make a Cake',
    description: 'Days since baking their first cake',
    type: 6, // Check discord developer portal
    },
        {
        key: 'eat',
    name: 'eat food for your health',
    description: 'Health first importance in life',
    type: 7, // Check discord developer portal
    }
  
})
```

### Update MetaData & Push MetaData:
```js
client.updateMetaData("") // Enter Discord ID
client.pushMetaData({
        userId: "", // User Id goes here
        metadata: "", // Metadata here
        id: "", // Discord ID goes here
        token: "",
        accessToken: "" // User AccessToken goes here
    })
```

### Generating Callback URL:
```js
 const { url, state } = client.generateCallBack({
      callback:"" // Check Discord Developer Portal for Callback URL
  });

```

### Setting values to Storage:
```js
client.storeDiscordTokens("key", "value") // Example userId, token
```


# 🥰 Made By Nicat.dcw 



  


