export const myQuery = `
select
  date_trunc('week', hour)::date as day_date,
  avg(price) as weekly_price,
  avg(weekly_price) over (order by day_date) as avg_price
from
  ethereum.core.fact_hourly_token_prices
where
  TOKEN_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
group by
  1
order by
  1

`