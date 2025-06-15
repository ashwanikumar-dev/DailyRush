import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);
  const sortedTodos = [...todos].sort((a, b) => a.isCompleted - b.isCompleted);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    saveToLS(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  return (
    <>
      <Navbar />
      <div
        className="relative mx-3 md:container md:mx-auto my-5 rounded-xl p-5 min-h-[80vh] md:w-[35%] 
  bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shine z-0"></div>
        <div className="relative z-10">
          <h1 className="font-bold text-center text-4xl underline">
            Just do it
          </h1>
          <div className="addTodo my-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Add YOUR TASK</h2>
            <div className="flex">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                placeholder="Add (If you can Complete)"
                className="w-full rounded-full px-5 py-1 focus:outline-blue-600 outline-2 outline-rose-400 text-white bg-stone-950 placeholder:text-amber-200 placeholder:text-sm placeholder:font-semibold"
              />
              <button
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-black mx-2 rounded-full p-4 py-2 text-sm font-bold disabled:bg-gray-700 hover:bg-blue-950 text-white"
              >
                Save
              </button>
            </div>
          </div>
          <input
            className="my-4"
            id="show"
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
          />
          <label className="mx-2" htmlFor="show">
            Show Finished
          </label>
          <div className="h-[2px] bg-black opacity-35 w-[90%] mx-auto my-3"></div>
          <h2 className="text-2xl font-bold text-center">Your Task</h2>
          <div className="todos">
            {todos.length === 0 && (
              <div className="m-5">No Tasks to display</div>
            )}
            {sortedTodos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className={"todo flex my-3 justify-between"}
                  >
                    <div className="flex gap-5">
                      <input
                        name={item.id}
                        onChange={handleCheckbox}
                        type="checkbox"
                        checked={item.isCompleted}
                        id=""
                      />
                      <div
                        className={`font-semibold ${
                          item.isCompleted
                            ? "line-through text-gray-400"
                            : "text-black"
                        }`}
                      >
                        {item.todo}
                      </div>
                    </div>
                    <div className="buttons flex h-full">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="bg-stone-950 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                        className="bg-stone-950 hover:bg-violet-950 p-2 py-1 md:text-lg text-sm font-bold text-white rounded-md mx-1"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
