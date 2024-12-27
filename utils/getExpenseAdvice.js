// utils/getFinancialAdvice.js
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized Expense Ease financial advice
const getExpenseAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Based on the following Expense Ease financial data:
      - Total Budget: ${totalBudget} ETB 
      - Expenses: ${totalSpend} ETB 
      - Incomes: ${totalIncome} ETB
      Provide detailed Expense Ease financial advice in 2 sentence to help the user manage their Expense Easeces more effectively.
    `;

    // Send the prompt to the OpenAI API
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: userPrompt }],
    });

    // Process and return the response
    const advice = chatCompletion.choices[0].message.content;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching Expense Ease financial advice:", error);
    return "Sorry, I couldn't fetch the Expense Ease financial advice at this moment. Please try again later.";
  }
};

export default getExpenseAdvice;
