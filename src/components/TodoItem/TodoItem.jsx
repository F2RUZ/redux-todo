import React from "react";
import {
  ListItemText,
  IconButton,
  Checkbox,
  Paper,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, onToggle, onDelete, createdAt }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 1.5,
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1 }}>
        <Checkbox
          edge="start"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <ListItemText
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed
              ? theme.palette.text.secondary
              : theme.palette.text.primary,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: { xs: 1, sm: 0 },
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {createdAt}
        </Typography>
        <IconButton edge="end" color="error" onClick={() => onDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default TodoItem;
