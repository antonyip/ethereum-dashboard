export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(GAS_PRICE * GAS_USED) / pow(10,18) as weekly_tx_fees_collected,
  avg(GAS_PRICE * GAS_USED) as avg_tx_fees_collected_per_tx_in_gwei
from
  ethereum.core.fact_transactions
group by
  1
order by
  1
`