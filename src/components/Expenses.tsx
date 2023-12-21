import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

type Props = {
  expenses: expense[];
};
type expense = { id: string; title: string; amount: number; date: Date };

function Expenses(props: Props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
