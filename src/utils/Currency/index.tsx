type CurrencyProps = {
  amount: number
  includeCents?: boolean
}

export const Currency = ({ amount, includeCents }: CurrencyProps) => {
  const numFormat = new Intl.NumberFormat("default", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: includeCents ? 2 : 0,
  })

  return <>{numFormat.format(amount)}</>
}
