const api = require('./api');
setInterval(async () => {
    const result = await api.depth();
    console.log(`Highest Buy: ${result.bids[0][0]}`);
    console.log(`Lowest Sell: ${result.asks[0][0]}`);

    const buy = parseInt(result.bids[0][0]);
    const sell = parseInt(result.asks[0][0]);
    if(sell < 200000) {
        console.log('Hora de comprar !!!!');
        console.log('Hora de comprar !!!!');
    }
    else if(buy > 23000000) {
        console.log('Hora de vender !!!!!');
        console.log('Hora de vender !!!!!');
    }
    console.log(await api.depth());
}, process.env.CRAWLER_INTERVAL)