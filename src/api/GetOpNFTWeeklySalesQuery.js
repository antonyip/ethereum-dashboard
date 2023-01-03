export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(PRICE_USD) as weekly_sales_volume,
  avg(weekly_sales_volume) over (order by day_date) as avg_sales_volume
from
  ethereum.core.ez_nft_sales
group by
  1
order by
  1
`