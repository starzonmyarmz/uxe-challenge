type CurrencyProps = {
  amount: number
}

const numFormat = new Intl.NumberFormat("default", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export const Currency = ({ amount }: CurrencyProps) => {
  return (
    <>
      {numFormat.format(amount)}
    </>
  )
}
