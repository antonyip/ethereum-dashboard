export const myQuery = `
with
  latest_txs as (
    select
      max(block_timestamp::timestamp) as max_timestamp,
      FROM_ADDRESS
    from
      ethereum.core.fact_transactions
    group by
      2
  ),
  time_diff as (
    select
      datediff('day', max_timestamp, CURRENT_TIMESTAMP) as account_age,
      FROM_ADDRESS
    from
      latest_txs
  )
select
  count_if(account_age < 2) as "1 day old",
  count_if(
    account_age >= 2
    and account_age < 7
  ) as "1 week old",
  count_if(
    account_age >= 7
    and account_age < 30
  ) as "1 month old",
  count_if(
    account_age >= 30
    and account_age < 365
  ) as "1 year old",
  count_if(
    account_age >= 365
    and account_age < 730
  ) as "2 year old",
  count_if(account_age >= 730) as "others"
from
  time_diff
`