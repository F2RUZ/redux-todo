import React from "react";
import { List, Typography, Paper } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";
import { formatDate } from "../../utils/helpers";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos || todos.length === 0) {
    return (
      <Typography align="center" color="text.secondary" mt={3}>
        Vazifalar mavjud emas 😌
      </Typography>
    );
  }

  return (
    <Paper elevation={0} sx={{ mt: 3 }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            createdAt={formatDate(todo.createdAt)}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
