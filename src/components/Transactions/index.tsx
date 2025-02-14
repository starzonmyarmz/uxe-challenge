import { useTransactions } from "../../hooks/use_transactions"
import { Pane } from "../../elements/Pane"
import { Currency } from "../../utils/Currency"

import "./Transactions.scss"

export const Transactions = () => {
  const { transactions, calculateBalance } = useTransactions()
  const startingBalance = 3250.2
  const balance = calculateBalance(startingBalance)

  return (
    <Pane size="lg" title="Transactions">
      <div className="transactions">
        <div className="mt-1">
          <p>Balance:</p>
          <h2 className="mt-05">
            <Currency amount={balance} includeCents />
          </h2>
        </div>
        <ul className="slats-list mt-1">
          {transactions
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ description, amount, category, date }, index) => {
              return (
                <li key={index} className="slat">
                  <div className="slat--details flex flex-between flex-middle">
                    <div>
                      <div className="flex flex-baseline gap-05">
                        <h3 className="slat--title">{description}</h3>
                        <p className="transaction--category">{category}</p>
                      </div>
                      <p className="transaction--date">{date}</p>
                    </div>
                    <p
                      className={
                        amount > 0
                          ? "transaction--positive"
                          : "transaction--negative"
                      }
                    >
                      <Currency amount={amount} includeCents />
                    </p>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </Pane>
  )
}
