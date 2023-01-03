export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  count(1) as num_blocks
from
  ethereum.core.fact_blocks
group by
  1
order by
  1
`