// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let Exchange = {};
    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }
    if (currency <= 0) {
        return {};
    }
    if (currency / 50 >= 1) {
        Exchange.H = Math.floor(currency / 50);
        currency = currency % 50;
    }
    if (currency / 25 >= 1) {
        Exchange.Q = Math.floor(currency / 25);
        currency = currency % 25;
    }
    if (currency / 10 >= 1) {
        Exchange.D = Math.floor(currency / 10);
        currency = currency % 10;
    }
    if (currency / 5 >= 1) {
        Exchange.N = Math.floor(currency / 5);
        currency = currency % 5;
    }
    if (currency < 5 && currency > 0) {
        Exchange.P = currency;
    }
    return Exchange;
}
