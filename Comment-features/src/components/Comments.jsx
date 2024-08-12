import React, { useState } from "react";
import Action from "./Action";

const Comments = ({ comment }) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false)

  const onAddComment = () => {};

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer_input first_input"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type"
            />

            <Action
              className="reply comment"
              type="COMMENT"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <div className="data">
              <span className="cmpreply" style={{ wordWrap: "break-word" }}>
                {" "}
                {comment.name}
              </span>

              <div style={{ display: "flex", marginTop: "5px" }}>
                {editMode ? (
                  <>
                    <Action className="reply" type="SAVE" />
                    <Action
                      className="reply"
                      type="CANCEL"
                      handleClick={() => {
                        setEditMode(false);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Action className="reply" type="REPLY" />
                    <Action
                      className="reply"
                      type="EDIT"
                      handleClick={() => {
                        setEditMode(true);
                      }}
                    />
                    <Action className="reply" type="DELETE" />
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <div
        style={{
          paddingLeft: "20px",
        }}
      >
        {comment?.items?.map((cmnt) => {
          return <Comments key={cmnt.id} comment={cmnt} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
