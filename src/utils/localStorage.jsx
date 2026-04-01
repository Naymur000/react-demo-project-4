export const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2026-05-01",
        category: "Work",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email client",
        description: "Send proposal to client",
        date: "2026-04-28",
        category: "Communication",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting",
        description: "Discuss project updates",
        date: "2026-05-02",
        category: "Meeting",
      },
    ],
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix bugs",
        description: "Resolve UI bugs",
        date: "2026-05-01",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code review",
        description: "Review teammate code",
        date: "2026-04-29",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy app",
        description: "Deploy latest build",
        date: "2026-04-27",
        category: "Deployment",
      },
    ],
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design UI",
        description: "Create dashboard layout",
        date: "2026-05-03",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update icons",
        description: "Replace old icons",
        date: "2026-04-30",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "User testing",
        description: "Test UI with users",
        date: "2026-05-04",
        category: "Testing",
      },
    ],
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database backup",
        description: "Backup all data",
        date: "2026-05-01",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize query",
        description: "Improve DB performance",
        date: "2026-04-28",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server migration",
        description: "Move to new server",
        date: "2026-04-26",
        category: "Infrastructure",
      },
    ],
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write documentation",
        description: "Create API docs",
        date: "2026-05-02",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update README",
        description: "Improve project README",
        date: "2026-04-29",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Research tools",
        description: "Find better dev tools",
        date: "2026-05-03",
        category: "Research",
      },
    ],
  },
];

export const admin = {
  id: 101,
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("employees")
  console.log(JSON.parse(data))
};
