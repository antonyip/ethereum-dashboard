export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(GAS_PRICE * GAS_USED) / pow(10,18) as sum_fee,
  avg(GAS_PRICE * GAS_USED) / pow(10,18) as avg_fee
from
  ethereum.core.fact_transactions
group by
  1
order by
  1
`