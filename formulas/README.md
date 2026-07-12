# Valuation Formulas

*DCF* - `token_dcf.js`

Discounted Cash Flow is forward-looking & accounts for time-value of money where future cash flows are discounted by factors like volatility, likelihood of success or failure, etc. `token_dcf.js` is a rough formula for translating this to crypto token valuation.

  Higher discount rates = moonshots with greater growth rates
  Lower discount rates = established business with slower growth rates.

Typical Discount Rates by Sector:

  - 6-8%: Stable, low-beta companies paying dividends (utilities, consumer staples ex: Coca-Cola, P&G)
      Depends on:
      - Risk-free rate (U.S. Treasury yield)
      - Equity risk premium (extra return demanded for stocks over bonds)
      - Stock volatility (beta) (higher beta = higher discount rate)
  - 8-12%: Mature, low-risk companies with dividend growth (Apple, Microsoft, McDonald's)
  - 10-15%: High-yield or risky dividend stocks (REITs, energy stocks)
  - 12-20%: High-beta growth tech stocks w cash-flow uncertainty but still generating revenue (emerging market telecoms, early-stage AI & cloud companies, ex: Tesla, Snowflake)
  - 20-50%: VC-backed startups & speculative crypto projects

*SYV* - `token_syv.js`

Staking Yield Valuation is an attempt to apply the DCF model to crypto token staking yield. This first rough version does not account for protocols that burn or buy back tokens, or conversely have inflation. You have to also consider additional custody risks (hacks) and performance risks (slashing etc) to your discount rate for staking yield on cryptoassets. Does not account for additional cash flows like MEV.

*PE Ratio* - `token_pe.js`

Price:Earnings Ratio is current/ backward-looking. It tells investors how much they are paying for each dollar of earnings reported on a stock. A basic P/E formula is simple:

  `P/E Ratio = Price Per Share % Earnings Per Share`

  Higher P/E ratios = higher growth expectations = higher DCF valuation
  Lower P/E ratios = undervalued or lower-growth companies = lower DCF valuation

The script for this staking token formula is very rudimentary, doesn't account for diff fees going to diff actors (ex: staked validators get higher APR than staked delegators). Also does not account for token inflation or buy-backs, burns, etc at protocol level (which would affect price) nor additional revenue for ex: MEV.

Typical PE Ratios by Sector:

  - 5-15: Cyclical stocks (energy, industrials, ex: Exxon, Caterpillar)
  - 10-15: Low-growth, defensive stocks paying dividends (utilities, consumer staples ex: Coca-Cola, P&G)
  - 10-20: Mature dividend stocks (Johnson & Johnson, Verizon)
  - 15-25: Mature low-risk companies with dividend growth (Apple, Microsoft, McDonald's)
  - 25-50+: High-growth tech stocks (Tesla, Nvidia)
  - Negative or Infinite: Speculative or unprofitable stocks (Rivian, Snowflake)

