// Assumptions
const dailyFeeRevenue = 20000; // In dollars
const initialFeeRevenue = dailyFeeRevenue * 365; // Convert daily revenue to annual
const growthRate = 0.10; // 10% annual growth during projection period
const years = 5; // 5-year projection
const discountRate = 0.15; // 15% discount rate
const terminalGrowth = 0.03; // 3% perpetual growth beyond projection period into the future
const totalTokens = 10_000_000_000; // 10 billion tokens in float

function discountedCashFlow(feeRevenue, growthRate, discountRate, years, terminalGrowth, totalTokens) {
    let cashFlows = [];
    for (let t = 1; t <= years; t++) {
        feeRevenue *= (1 + growthRate);
        let discountedValue = feeRevenue / Math.pow((1 + discountRate), t);
        cashFlows.push(discountedValue);
    }

    // Terminal Value Calculation
    let terminalValue = (feeRevenue * (1 + terminalGrowth)) / (discountRate - terminalGrowth);
    let discountedTerminalValue = terminalValue / Math.pow((1 + discountRate), years);

    // Summing present values
    let totalValue = cashFlows.reduce((acc, val) => acc + val, 0) + discountedTerminalValue;

    // Calculate price per token
    let pricePerToken = totalValue / totalTokens;

    return { cashFlows, discountedTerminalValue, totalValue, pricePerToken };
}

// Run DCF model
const result = discountedCashFlow(initialFeeRevenue, growthRate, discountRate, years, terminalGrowth, totalTokens);

// Print results
console.log("Projected Discounted Cash Flows: $", result.cashFlows);
console.log("Discounted Terminal Value: $", result.discountedTerminalValue.toLocaleString());
console.log("Total Present Value (Enterprise Value): $", result.totalValue.toLocaleString());
console.log("Implied Price Per Token: $", result.pricePerToken);
