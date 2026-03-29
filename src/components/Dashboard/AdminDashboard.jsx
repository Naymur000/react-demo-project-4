import React from "react";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen container mx-auto">
      <Header></Header>

      <div>
        <form className="p-10 flex flex-wrap w-full bg-gray-900 items-start justify-between">
          <div className="py-2">
            <div>
              <h3>Task Title</h3>
              <input
                className="bg-gray-400 text-black font-black px-10 py-1 border rounded-md mb-5"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input
                className="bg-gray-400 text-black font-black px-10 py-1 border rounded-md mb-5"
                type="date"
              />
            </div>
            <div>
              <h3>Assign to</h3>
              <input
                className="bg-gray-400 text-black font-black px-10 py-1 border rounded-md mb-5"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input
                className="bg-gray-400 text-black font-black px-10 py-1 border rounded-md mb-5"
                type="text"
                placeholder="design, dev, etc"
              />
              <br />
            </div>
          </div>

          <div>
            <h3>Description</h3>
            <textarea
              className="bg-gray-400 rounded-xl text-black font-medium"
              font-black
              px-10
              py-1
              cols={60}
              rows={10}
            ></textarea>
            <button className="block mx-auto mt-4 bg-orange-600 p-2 text-xl font-black rounded-md">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
