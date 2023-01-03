export const myQuery = `
select
  count(1) as num_txs
from
  ethereum.core.fact_transactions
`