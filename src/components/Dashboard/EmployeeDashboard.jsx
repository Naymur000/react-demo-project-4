import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';


const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-[#1c1c1c] h-screen w-screen '>
            <Header></Header>
            <TaskListNumbers></TaskListNumbers>
        </div>
    );
};

export default EmployeeDashboard;