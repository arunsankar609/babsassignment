import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../constants/constants";
import { addFavorites, allMsg, viewMsgs } from "../slice/messageSlice";
const ReadMessages = () => {
  const dispatch = useDispatch();
  const [data1, setData] = useState([data]);
  const [showMsg, setShowMsg] = useState([]);
  const Msg = useSelector((state) => state.messages.readMessages);
  const MsgConst = useSelector((state) => state.messages.allMessages);
  console.log(Msg, "msg");
  const addToFavorites = (id) => {
    const updatedMessages = Msg.map((message) => {
      if (message.id === id && message.favorites === false) {
        return { ...message, favorites: true };
      }
    });

    dispatch(addFavorites(updatedMessages));
  };
  const deleteMsg = (id) => {
    const viewMsg1 = MsgConst.filter((msg) => msg.id !== id);
    dispatch(viewMsgs([]));
    dispatch(allMsg(viewMsg1))
  };
  return (
    <div className="w-[40%] bg-slate-300 text-white">
      {Msg.map((msg) => (
        <div key={msg.id} className="p-2 m-2 bg-slate-300 text-white">
          <div>
            <button className="bg-green-900 text-white rounded-lg" onClick={() => addToFavorites(msg.id)}>
              Add to favorites
            </button>
            <button className="bg-green-900 text-white mx-3 rounded-lg" onClick={() => deleteMsg(msg.id)}>Delete</button>
          </div>
          <p className="font-semibold text-gray-800 mt-5">{msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadMessages;
