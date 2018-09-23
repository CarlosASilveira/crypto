
const rp = require('request-promise');

module.exports.marketcapglobal = function(err,res){

  const requestOptions = {
    method: 'GET',
    uri: 'https://api.coinmarketcap.com/v2/global/',
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    json: true,
    gzip: true
  };

  rp(requestOptions).then(res => {
    /*console.log('BTC Market %:', res.data.bitcoin_percentage_of_market_cap);
    console.log('Total Market USD', res.data.quotes.USD.total_market_cap);
    console.log('Volume 24h USD', res.data.quotes.USD.total_volume_24h);
    console.log('timestamp', res.metadata.timestamp);*/

    console.log('timestamp', res.metadata.timestamp)
    
    var mktc_db = {
      'btc_market_percent' :  res.data.bitcoin_percentage_of_market_cap ,
      'total_market_usd' :  res.data.quotes.USD.total_market_cap ,
      'vol_market_usd' :  res.data.quotes.USD.total_volume_24h ,
      'timestamp' :  res.metadata.timestamp 
    };

  }).catch((err) => {
    console.log('API call error:', err.message);
  });


}