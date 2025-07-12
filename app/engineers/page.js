"use client"
import { useState, useEffect } from "react"
import EngineerCard from "../../components/EngineerCard"
import AddEngineerModal from "../../components/modals/AddEngineerModal"

export default function Engineers() {
  const [user, setUser] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [engineers, setEngineers] = useState([
    {
      id: 1,
      firstName: "Alex",
      lastName: "Rodriguez",
      email: "alex.rodriguez@company.com",
      location: "San Francisco",
      experienceLevel: "senior",
      department: "Frontend",
      utilization: 95,
      efficiency: 98,
      availability: "40h/week available",
      skills: ["React", "Node.js", "TypeScript"],
      currentProjects: 0,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 2,
      firstName: "Maria",
      lastName: "Kim",
      email: "maria.kim@company.com",
      location: "Seattle",
      experienceLevel: "lead",
      department: "DevOps",
      utilization: 88,
      efficiency: 96,
      availability: "40h/week available",
      skills: ["Docker", "Kubernetes", "AWS"],
      currentProjects: 0,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 3,
      firstName: "James",
      lastName: "Wilson",
      email: "james.wilson@company.com",
      location: "New York",
      experienceLevel: "principal",
      department: "AI/ML",
      utilization: 92,
      efficiency: 94,
      availability: "40h/week available",
      skills: ["Python", "TensorFlow", "PyTorch"],
      currentProjects: 0,
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleAddEngineer = (engineerData) => {
    const newEngineer = {
      id: engineers.length + 1,
      ...engineerData,
      utilization: 0,
      efficiency: 0,
      currentProjects: 0,
      avatar: "/placeholder.svg?height=64&width=64",
    }
    setEngineers([...engineers, newEngineer])
    setShowAddModal(false)
  }

  if (!user) {
    return <div className="p-6">Loading...</div>
  }

  // Engineers can only see limited view
  if (user.role === "engineer") {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Access Restricted</h3>
          <p className="mt-1 text-sm text-gray-500">You don't have permission to view the engineers directory.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Engineers</h1>
            <p className="text-sm text-gray-600">Manage engineering team members and their skills</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add Engineer</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {engineers.map((engineer) => (
          <EngineerCard key={engineer.id} engineer={engineer} />
        ))}
      </div>

      {engineers.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No engineers</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your first engineer.</p>
          <div className="mt-6">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Add Engineer
            </button>
          </div>
        </div>
      )}

      {showAddModal && <AddEngineerModal onClose={() => setShowAddModal(false)} onSubmit={handleAddEngineer} />}
    </div>
  )
}
