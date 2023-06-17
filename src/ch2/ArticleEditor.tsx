import React, { useState, useCallback, ChangeEvent } from "react";

const ArticleEditor = ({ id }: { id: string }) => {
  const [summary, setSummary] = useState("");

  const submitChange = useCallback(
    async (summary: string) => {
      try {
        // Make a POST request to update the article item
        await fetch(`/api/articles/${id}`, {
          method: "POST",
          body: JSON.stringify({ summary }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        // handling errors
      }
    },
    [id]
  );

  const handleSummaryChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setSummary(event.target.value);
    },
    []
  );

  return (
    <div>
      <h2>Edit Article</h2>
      <textarea value={summary} onChange={handleSummaryChange} />
      <button onClick={() => submitChange(summary)}>Save</button>
    </div>
  );
};

export default ArticleEditor;
