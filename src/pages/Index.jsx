import { useState } from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  Flex, 
  Heading, 
  HStack, 
  IconButton, 
  Input, 
  List, 
  ListItem, 
  Spacer, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack w="100%">
          <Input 
            placeholder="Add a new todo" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </HStack>
        <List spacing={3} w="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="md">
              <Flex align="center">
                <Checkbox 
                  isChecked={todo.completed} 
                  onChange={() => toggleTodo(index)} 
                  mr={3}
                />
                <Box as="span" flex="1" textDecoration={todo.completed ? "line-through" : "none"}>
                  {todo.text}
                </Box>
                <Spacer />
                <IconButton 
                  aria-label="Delete todo" 
                  icon={<FaTrash />} 
                  onClick={() => deleteTodo(index)} 
                  colorScheme="red" 
                  size="sm"
                />
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;