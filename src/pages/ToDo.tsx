import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";


const ToDo = () => {
    return (
        <Container>
            <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>
            <TodoContainer/>
        </Container>
    );
};

export default ToDo;