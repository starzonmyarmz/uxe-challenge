import { ChangeEvent, useState } from "react"
import { useCards } from "../../hooks/use_cards"
import { Pane } from "../../elements/Pane"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { CreditCard, DebitCard } from "../../icons"
import type { Card } from "../../types"

import "./Wallet.scss"

export const Wallet = () => {
  const { cards, addCard } = useCards()
  const [number, setNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiration, setExpiration] = useState("")
  const [type, setType] = useState<Card["type"]>("credit")

  const handleAddCard = () => {
    addCard({ type, number, cvc, expiration })
    setNumber("")
    setCvc("")
    setExpiration("")
    setType("credit")
  }

  return (
    <Pane size="sm" title="My Wallet">
      <div className="card-form">
        <div className="card-form--row">
          <label htmlFor="name">Card Number:</label>
          <Input
            id="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            placeholder="1111 1111 1111 1111"
            type="text"
            inputMode="numeric"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="cvc">CVC:</label>
          <Input
            id="cvc"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvc(e.target.value)
            }
            placeholder="xxx"
            type="text"
            inputMode="numeric"
            value={cvc}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="expiration">Expiration:</label>
          <Input
            id="expiration"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setExpiration(e.target.value)
            }
            placeholder="mm/yyyy"
            type="text"
            value={expiration}
          />
        </div>

        <fieldset className="card-type">
          <legend>Card Type:</legend>
          <div className="card-type--options">
            <label>
              <input
                type="radio"
                onChange={() => setType("credit")}
                className={`${type === "credit" ? "selected" : ""}`}
                checked={type === "credit"}
              />
              Credit
            </label>
            <label>
              <input
                type="radio"
                onChange={() => setType("debit")}
                className={`${type === "debit" ? "selected" : ""}`}
                checked={type === "debit"}
              />
              Debit
            </label>
          </div>
        </fieldset>
        <Button onClick={handleAddCard} text="Add Card" />
      </div>

      <ol className="slats-list">
        {cards.map(({ type, number, cvc, expiration }, index) => {
          return (
            <li className="slat" key={index}>
              <div className="slat--icon">
                {type === "credit" ? <CreditCard /> : <DebitCard />}
              </div>

              <div className="slat--details">
                <h2 className="card--number">{number}</h2>
                <div className="flex">
                  <p className="card--cvc">{cvc}</p>
                  <p className="card--expiration">{expiration}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Pane>
  )
}
