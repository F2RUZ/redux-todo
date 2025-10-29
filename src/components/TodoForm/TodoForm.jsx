import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { isEmpty } from "../../utils/helpers";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(title)) {
      setError(true);
      return;
    }

    onAdd(title);
    setTitle("");
    setError(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        mt: 2,
        mb: 3,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Yangi vazifa kiriting..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={error}
        helperText={error ? "Iltimos, vazifa nomini kiriting!" : ""}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ minWidth: { sm: "120px" }, py: { xs: 1.5, sm: 0 } }}
      >
        Qo‘shish
      </Button>
    </Box>
  );
};

export default TodoForm;
