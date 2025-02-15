import { ChangeEvent, useState } from "react"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { Pane } from "../../elements/Pane"
import { Currency } from "../../utils/Currency"
import { VisuallyHidden } from "../../utils/VisuallyHidden"
import {
  Add,
  DiningOut,
  Food,
  HealthFitness,
  Housing,
  Transportation,
  Clothing,
} from "../../icons"

import "./Budget.scss"

const icons = {
  diningout: DiningOut,
  food: Food,
  healthandfitness: HealthFitness,
  housing: Housing,
  transportation: Transportation,
  clothing: Clothing,
}

const summary = [
  {
    name: "Monthly Income",
    amount: 4000,
  },
  {
    name: "Allocated",
    amount: 2500,
  },
  {
    name: "Remaining",
    amount: 1500,
  },
]

const categories = [
  {
    name: "Transportation",
    limit: 400,
    icon: <Transportation aria-hidden="true" />,
  },
  {
    name: "Housing",
    limit: 1500,
    icon: <Housing aria-hidden="true" />,
  },
  {
    name: "Food",
    limit: 500,
    icon: <Food aria-hidden="true" />,
  },
  {
    name: "Dining Out",
    limit: 500,
    icon: <DiningOut aria-hidden="true" />,
  },
  {
    name: "Health and Fitness",
    limit: 200,
    icon: <HealthFitness aria-hidden="true" />,
  },
]

const categoryOptions = [
  {
    name: "Transportation",
    icon: <Transportation aria-hidden="true" />,
  },
  {
    name: "Housing",
    icon: <Housing aria-hidden="true" />,
  },
  {
    name: "Food",
    icon: <Food aria-hidden="true" />,
  },
  {
    name: "Dining Out",
    icon: <DiningOut aria-hidden="true" />,
  },
  {
    name: "Health and Fitness",
    icon: <HealthFitness aria-hidden="true" />,
  },
  {
    name: "Clothing",
    icon: <Clothing aria-hidden="true" />,
  },
]

export const Budget = () => {
  // Toggle between budget and new category state
  const [budgetState, setBudgetState] = useState("budget")

  // States for New Category form
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [limit, setLimit] = useState("")

  // Cancel form submission
  function resetForm() {
    setName("")
    setCategory("")
    setLimit("")
    setBudgetState("budget")
  }

  // Submit form
  function submitForm() {
    const Icon = icons[category.toLowerCase().replace(/\s/g, "")]

    categories.push({
      name: name,
      icon: <Icon aria-hidden="true" />,
      limit: limit,
    })

    resetForm()
  }

  return (
    <>
      {/* Looking at the Budget view */}
      {budgetState === "budget" && (
        <Pane size="md" title="Budget">
          <ul className="budget-summary">
            {summary.map(({ name, amount }, index) => (
              <li key={index}>
                {name}
                <h2 className="mt-05">
                  <Currency amount={amount} />
                </h2>
              </li>
            ))}
          </ul>

          <h2 className="categories-title">Categories</h2>
          <ol className="slats-list">
            {categories.map(({ limit, icon, name }, index) => (
              <li key={index} className="slat">
                <div className="slat--icon">{icon}</div>
                <div className="slat--details flex flex-between flex-baseline">
                  <h3 className="slat--title wght-normal">{name}</h3>
                  <p>
                    <Currency amount={limit} />
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Button
            variant="outline"
            onClick={() => setBudgetState("new")}
            className="w-100%"
          >
            <Add /> New category
          </Button>
        </Pane>
      )}

      {/* Looking at the New Category view */}
      {budgetState === "new" && (
        <Pane size="md" title="New category">
          <div className="category-form">
            <div className="category-form--row">
              <label htmlFor="name">Category name:</label>
              <Input
                id="name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                type="text"
                value={name}
              />
            </div>

            <div className="category-form--row">
              <div className="radio-choices">
                <legend>Icon:</legend>
                <ul>
                  {categoryOptions.map(({ name, icon }, index) => (
                    <li key={index}>
                      <label className="radio-choice">
                        <VisuallyHidden>{name}</VisuallyHidden>
                        {icon}
                        <input
                          type="radio"
                          name="icon"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCategory(e.target.value)
                          }
                          value={name}
                          checked={name === category}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="category-form--row">
              <label htmlFor="limit">Limit:</label>
              <Input
                id="limit"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLimit(e.target.value)
                }
                type="text"
                value={limit}
              />
            </div>

            <div className="category-form--actions">
              <Button
                text="Cancel"
                variant="outline"
                onClick={resetForm}
                className="w-100%"
              />
              <Button
                text="Add new category"
                onClick={submitForm}
                className="w-100%"
              />
            </div>
          </div>
        </Pane>
      )}
    </>
  )
}
