"use client"
import { useState } from "react"

export default function SettingsPage() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState("profile")
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    projectUpdates: true,
    deadlineReminders: true,
    teamNotifications: false,
  })

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@company.com",
    role: "admin",
    department: "Engineering",
    phone: "+1 (555) 123-4567",
    timezone: "UTC-8",
    language: "English",
  })

  const [security, setSecurity] = useState({
    twoFactorEnabled: false,
    sessionTimeout: "30",
    passwordLastChanged: "2024-01-15",
  })

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleProfileChange = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSecurityChange = (key, value) => {
    setSecurity((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const tabs = [
    { id: "profile", name: "Profile", icon: "user" },
    { id: "notifications", name: "Notifications", icon: "bell" },
    { id: "security", name: "Security", icon: "shield" },
    { id: "preferences", name: "Preferences", icon: "cog" },
    { id: "integrations", name: "Integrations", icon: "link" },
  ]

  const renderTabIcon = (iconType) => {
    const iconClasses = "w-5 h-5"
    switch (iconType) {
      case "user":
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
        )
      case "bell":
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        )
      case "shield":
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        )
      case "cog":
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        )
      case "link":
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Settings</h2>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors border ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent hover:border-gray-200"
                }`}
              >
                {renderTabIcon(tab.icon)}
                <span className="ml-3">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
              <p className="text-sm text-gray-600 mt-1">Manage your account settings and preferences</p>
            </div>
            <button className="btn-blue flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save Changes
            </button>
          </div>
        </div>

        {activeTab === "profile" && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{profile.name.charAt(0)}</span>
                  </div>
                  <div>
                    <button className="btn-blue mr-3">Change Photo</button>
                    <button className="btn-gray">Remove</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => handleProfileChange("name", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileChange("email", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select
                      value={profile.role}
                      onChange={(e) => handleProfileChange("role", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="engineer">Engineer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      value={profile.department}
                      onChange={(e) => handleProfileChange("department", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => handleProfileChange("phone", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={profile.timezone}
                      onChange={(e) => handleProfileChange("timezone", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                      <option value="UTC-7">Mountain Time (UTC-7)</option>
                      <option value="UTC-6">Central Time (UTC-6)</option>
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-4">Communication Channels</h3>
                  <div className="space-y-4">
                    {Object.entries({
                      email: "Email Notifications",
                      push: "Push Notifications",
                      sms: "SMS Notifications",
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{label}</p>
                          <p className="text-sm text-gray-500">Receive notifications via {key}</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange(key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border ${
                            notifications[key] ? "bg-blue-600 border-blue-700" : "bg-gray-200 border-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications[key] ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-4">Notification Types</h3>
                  <div className="space-y-4">
                    {Object.entries({
                      projectUpdates: "Project Updates",
                      deadlineReminders: "Deadline Reminders",
                      teamNotifications: "Team Notifications",
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{label}</p>
                          <p className="text-sm text-gray-500">Get notified about {label.toLowerCase()}</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange(key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border ${
                            notifications[key] ? "bg-blue-600 border-blue-700" : "bg-gray-200 border-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications[key] ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button
                    onClick={() => handleSecurityChange("twoFactorEnabled", !security.twoFactorEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border ${
                      security.twoFactorEnabled ? "bg-blue-600 border-blue-700" : "bg-gray-200 border-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        security.twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-gray-900">Session Timeout</p>
                  </div>
                  <select
                    value={security.sessionTimeout}
                    onChange={(e) => handleSecurityChange("sessionTimeout", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="240">4 hours</option>
                  </select>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Password</p>
                      <p className="text-sm text-gray-500">Last changed: {security.passwordLastChanged}</p>
                    </div>
                    <button className="btn-blue">Change Password</button>
                  </div>
                </div>
                <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-900">Danger Zone</p>
                      <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                    </div>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white border border-red-700 hover:bg-red-700 hover:border-red-800 transition-all duration-200">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Application Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={profile.language}
                    onChange={(e) => handleProfileChange("language", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Light", "Dark", "Auto"].map((theme) => (
                      <button
                        key={theme}
                        className="p-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dashboard Layout</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Compact", "Comfortable"].map((layout) => (
                      <button
                        key={layout}
                        className="p-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      >
                        {layout}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Third-party Integrations</h2>
              <div className="space-y-4">
                {[
                  { name: "Slack", description: "Get notifications in your Slack workspace", connected: true },
                  { name: "GitHub", description: "Sync repositories and track commits", connected: false },
                  { name: "Jira", description: "Import and sync project tickets", connected: true },
                  { name: "Google Calendar", description: "Sync deadlines and meetings", connected: false },
                ].map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-gray-600">{integration.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{integration.name}</p>
                        <p className="text-sm text-gray-500">{integration.description}</p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                        integration.connected
                          ? "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300"
                          : "bg-blue-600 text-white border-blue-700 hover:bg-blue-700 hover:border-blue-800"
                      }`}
                    >
                      {integration.connected ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
