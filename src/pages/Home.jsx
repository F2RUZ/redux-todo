import React, { useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/todoApi";

const Home = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleAddTodo = async (title) => {
    if (title.trim()) {
      await addTodo({ title, completed: false });
    }
  };

  const handleToggle = async (todo) => {
    await updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          To-Do List
        </Typography>

        <TodoForm onAdd={handleAddTodo} />

        {isLoading ? (
          <Box textAlign="center" mt={3}>
            <Typography color="text.secondary">Yuklanmoqda...</Typography>
          </Box>
        ) : (
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </Paper>
    </Container>
  );
};

export default Home;
