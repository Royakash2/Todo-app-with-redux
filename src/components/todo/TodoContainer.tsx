import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px]  ">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center"> 
      <p>There is no task pending</p>
     </div> */}
       <div className="bg-white p-5 h-full w-full rounded-lg space-y-4">
       <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
       </div>
      </div>
    </div>
  );
};

export default TodoContainer;
