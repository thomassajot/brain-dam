Data stored in relational DB are stored as tables.  
**Most Relation DB supports SQL, which is a major reason why you want to use a Relational DB. Do not under estimate the importance of the query you want to be able to run on the DB.**

# ACID
SQL DB must support ACID transactions:
- Atomicity: this dictates that multiple sub-operation in a command will all succeed or all fail.
- Consistency: There are no stale stale in a DB where a future transaction does not know that a past transaction has executed.
- Isolation: 
- Durability: The effect of a transaction are permanent (for example data stored on disk) 

# Database Index
You can create an auxiliary data structure in your DB that is optimize for a given query. 

There are many indexes possible:
- Bitmap indexes
- Reverse indexes
- Dense indexes

### Example table
For example if we want to build an index related to the query to find all the customer that have the maximum amount:

| customer_name | processed_at | amount |
|---------------|--------------|--------|
| Clement       | 2019-12-01   | 10     |
| Antoine       | 2019-11-16   | 200    | 
| Simon         | 2020-02-02   | 9001   |
| Meghan        | 2020-02-01   | 700    |

We can sort this DB by the Amount column in the index, and then use this new index to quickly answer this query.

Having an auxiliary DB will increase the memory cost and the write cost since we have to write to the original DB and the index.

Example query for creating an index:
```SQL
CREATE INDEX table_idx_name on existing_table(column);
```