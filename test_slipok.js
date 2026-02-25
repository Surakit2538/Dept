const fetch = require('node-fetch'); // or native fetch
async function test() {
  const r = await fetch('https://api.slipok.com/api/line/apikey/59702/quota', {
    headers: { 'x-authorization':'SLIPOK4D5KB1A' }
  });
  console.log(await r.json());
}
test();
