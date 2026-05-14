import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area,
  AreaChart,
} from "recharts";

function Dashboard() {
  const stats = [
    {
      label: "Total Customers",
      value: "1,248",
      change: "+12% this month",
    },
    {
      label: "Total Properties",
      value: "312",
      change: "+4% this month",
    },
    {
      label: "Active Leads",
      value: "86",
      change: "-2% this month",
    },
    {
      label: "Closed Deals",
      value: "24",
      change: "+8% this month",
    },
  ];

  // Customer Trends Data
  const customerTrendsData = [
    { month: "Jan", customers: 800, leads: 60 },
    { month: "Feb", customers: 920, leads: 72 },
    { month: "Mar", customers: 1050, leads: 78 },
    { month: "Apr", customers: 1150, leads: 82 },
    { month: "May", customers: 1248, leads: 86 },
  ];

  // Properties by Type
  const propertiesByType = [
    { name: "Residential", value: 156, fill: "#3b82f6" },
    { name: "Commercial", value: 89, fill: "#ef4444" },
    { name: "Industrial", value: 45, fill: "#10b981" },
    { name: "Land", value: 22, fill: "#f59e0b" },
  ];

  // Lead Status Distribution
  const leadStatusData = [
    { name: "Qualified", value: 35, fill: "#10b981" },
    { name: "In Progress", value: 32, fill: "#f59e0b" },
    { name: "Pending", value: 15, fill: "#3b82f6" },
    { name: "Lost", value: 4, fill: "#ef4444" },
  ];

  // Sales Performance
  const salesPerformanceData = [
    { month: "Week 1", sales: 15000, target: 16000 },
    { month: "Week 2", sales: 18000, target: 16000 },
    { month: "Week 3", sales: 14000, target: 16000 },
    { month: "Week 4", sales: 22000, target: 16000 },
  ];

  const getChangeColor = (changeText) => {
    if (changeText.startsWith("+")) {
      return {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        badge: "bg-emerald-100",
      };
    } else if (changeText.startsWith("-")) {
      return {
        bg: "bg-red-50",
        text: "text-red-700",
        badge: "bg-red-100",
      };
    }

    return {
      bg: "bg-slate-50",
      text: "text-slate-700",
      badge: "bg-slate-100",
    };
  };

  const getChangeIcon = (changeText) => {
    if (changeText.startsWith("+")) {
      return <ArrowTrendingUpIcon className="h-4 w-4" />;
    } else if (changeText.startsWith("-")) {
      return <ArrowTrendingDownIcon className="h-4 w-4" />;
    }

    return null;
  };

  return (
    <div className="min-h-screen space-y-6 bg-slate-100 p-6">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Dealer CRM Dashboard
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Overview</h2>

            <p className="mt-1 text-sm text-slate-300">
              Track your business metrics and analytics
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm">
            Updated just now
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const colorScheme = getChangeColor(stat.change);

          return (
            <article
              key={stat.label}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Section */}
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>

                <div className={`rounded-xl p-2 ${colorScheme.badge}`}>
                  <div className={colorScheme.text}>
                    {getChangeIcon(stat.change)}
                  </div>
                </div>
              </div>

              {/* KPI Value */}
              <p className="mt-6 text-4xl font-bold text-slate-900">
                {stat.value}
              </p>

              {/* Change Indicator */}
              <div
                className={`mt-4 inline-flex items-center gap-2 rounded-xl px-3 py-2 ${colorScheme.bg}`}
              >
                <span className={colorScheme.text}>
                  {getChangeIcon(stat.change)}
                </span>

                <span className={`text-sm font-semibold ${colorScheme.text}`}>
                  {stat.change}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer & Leads Trends */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-6 text-lg font-bold text-slate-900">
            Customer & Leads Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={customerTrendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="customers"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: "#f59e0b", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Performance */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-6 text-lg font-bold text-slate-900">
            Sales Performance vs Target
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                }}
              />
              <Legend />
              <Bar dataKey="sales" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="target" fill="#94a3b8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Properties by Type */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-6 text-lg font-bold text-slate-900">
            Properties by Type
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertiesByType}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {propertiesByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Distribution */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-6 text-lg font-bold text-slate-900">
            Lead Status Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {leadStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
