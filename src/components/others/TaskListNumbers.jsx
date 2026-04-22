const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="w-[45%] bg-red-400 px-9 p-6 rounded-2xl">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] bg-blue-400 px-9 p-6 rounded-2xl">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] bg-green-400 px-9 p-6 rounded-2xl">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] bg-yellow-400 px-9 p-6 rounded-2xl">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
