// Mock Data
export const mockCoins = [
  {
    id: '90',
    symbol: 'BTC',
    name: 'Bitcoin',
    nameid: 'bitcoin',
    rank: 1,
    price_usd: '25767.96',
    percent_change_24h: '0.25',
    percent_change_1h: '0.06',
    percent_change_7d: '-7.84',
    price_btc: '1.00',
    market_cap_usd: '501726497779.56',
    volume24: 7226105206.242357,
    volume24a: 7356567443.02128,
    csupply: '19470946.00',
    tsupply: '19470946',
    msupply: '21000000',
  },
  {
    id: '80',
    symbol: 'ETH',
    name: 'Ethereum',
    nameid: 'ethereum',
    rank: 2,
    price_usd: '1629.92',
    percent_change_24h: '0.46',
    percent_change_1h: '0.06',
    percent_change_7d: '-6.27',
    price_btc: '0.063259',
    market_cap_usd: '199462253448.59',
    volume24: 2954626985.866759,
    volume24a: 3136379114.4967775,
    csupply: '122375302.00',
    tsupply: '122375302',
    msupply: '',
  },
  {
    id: '518',
    symbol: 'USDT',
    name: 'Tether',
    nameid: 'tether',
    rank: 3,
    price_usd: '1.00',
    percent_change_24h: '-0.03',
    percent_change_1h: '0.01',
    percent_change_7d: '0.02',
    price_btc: '0.000039',
    market_cap_usd: '83646891381.52',
    volume24: 22404308497.646423,
    volume24a: 24054753912.04373,
    csupply: '83638374850.00',
    tsupply: '86715788906.061',
    msupply: '',
  },
  {
    id: '2710',
    symbol: 'BNB',
    name: 'Binance Coin',
    nameid: 'binance-coin',
    rank: 4,
    price_usd: '214.26',
    percent_change_24h: '-0.18',
    percent_change_1h: '-0.03',
    percent_change_7d: '-6.02',
    price_btc: '0.008316',
    market_cap_usd: '35739530873.18',
    volume24: 123822005.29851863,
    volume24a: 148176155.89678153,
    csupply: '166801148.00',
    tsupply: '192443301',
    msupply: '200000000',
  },
  {
    id: '33285',
    symbol: 'USDC',
    name: 'USD Coin',
    nameid: 'usd-coin',
    rank: 5,
    price_usd: '1.00',
    percent_change_24h: '-0.04',
    percent_change_1h: '0.00',
    percent_change_7d: '0.04',
    price_btc: '0.000039',
    market_cap_usd: '27290283607.64',
    volume24: 862595544.9736891,
    volume24a: 805199427.5701298,
    csupply: '27280065610.00',
    tsupply: '27280065610.89',
    msupply: '',
  },
  {
    id: '58',
    symbol: 'XRP',
    name: 'XRP',
    nameid: 'ripple',
    rank: 6,
    price_usd: '0.501728',
    percent_change_24h: '-0.21',
    percent_change_1h: '-0.15',
    percent_change_7d: '-7.01',
    price_btc: '0.000019',
    market_cap_usd: '21528898380.80',
    volume24: 551713491.458351,
    volume24a: 631115839.7190605,
    csupply: '42909539227.00',
    tsupply: '99991841593',
    msupply: '100000000000',
  },
  {
    id: '46971',
    symbol: 'STETH',
    name: 'Staked Ether',
    nameid: 'staked-ether',
    rank: 7,
    price_usd: '1628.19',
    percent_change_24h: '0.52',
    percent_change_1h: '-0.01',
    percent_change_7d: '-6.23',
    price_btc: '0.063192',
    market_cap_usd: '12859482233.06',
    volume24: 1181433.0661734976,
    volume24a: 1136452.3769057447,
    csupply: '7898034.00',
    tsupply: '7898034.1684088',
    msupply: '7898034.1684088',
  },
];

export const mockDetails = [
  {
    id: '90',
    symbol: 'BTC',
    name: 'Bitcoin',
    nameid: 'bitcoin',
    rank: 1,
    price_usd: '25767.96',
    percent_change_24h: '0.25',
    percent_change_1h: '0.06',
    percent_change_7d: '-7.84',
    price_btc: '1.00',
    market_cap_usd: '501726497779.56',
    volume24: 7226105206.242357,
    volume24a: 7356567443.02128,
    csupply: '19470946.00',
    tsupply: '19470946',
    msupply: '21000000',
  },
];

//  add an empty test block to satisfy Jest so It doesn't return a failing test
describe('Mock Coins', () => {
  test('empty test block', () => {
    expect(true).toBe(true);
  });
});
