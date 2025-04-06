import { BarChart3, Activity } from 'lucide-react';
import { useState } from 'react';
import colors from '../styles';
import { stats, salesData, projectMetrics, recentSales, teamStatus} from '../DataSource';

function Dashboard() {
  

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <div className="container mx-auto px-4 py-8" style={{ paddingTop: 150 }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text" style={{ color: colors.textPrimary }}>Dashboard</h1>

      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1a1f3d] p-6 rounded-lg s-card"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text text-sm" style={{ color: colors.textSecondary }}>{stat.title}</p>
                <p className="text-2xl font-bold text mt-1" style={{ color: colors.textPrimary }}>{stat.value}</p>
              </div>
              <div className="text" style={{ color: colors.primary }}>{stat.icon}</div>
            </div>
            <div className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-[#1a1f3d] rounded-lg p-6 service-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold" style={{ color: colors.textPrimary }}>Sales Overview</h2>
            <BarChart3 className="w-6 h-6" style={{ color: colors.primary }} />
          </div>
          <div className="relative h-64 p-2 " >
            {/* Garis Latar Belakang */}
            <div className="absolute inset-4 flex flex-col justify-between bg-[#1a1f3d] pb-6 ">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="border-t border-gray-300 w-full opacity-50">
                </div>
              ))}
            </div>

            {/* Grafik Batang */}
            <div className="relative h-full flex items-end justify-between">
              {salesData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-2"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}>
                  {hoverIndex === index && (
                    <div className="absolute -translate-y-8 text-sm text-white bg-transparent px-2 py-1 rounded shadow-md transition-all duration">
                      {data.value}%
                    </div>
                  )}

                  <div
                    className="w-8 rounded-t transition-all duration-300 data-table"
                    style={{ height: `${data.value * 2}px` }} // Skala px untuk proporsionalitas
                  ></div>
                  <span className="text-gray-400 mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Metrics */}
        <div className="bg-[#1a1f3d] rounded-lg p-6 ser-card">
          <div className='service-card2'>


            <h2 className="text-xl font-bold text mb-6" style={{ color: colors.textPrimary }}>Project Metrics</h2>
            <div className="space-y-6">
              {projectMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between s-card">
                  <div className="flex items-center space-x-3">
                    <div className="text" style={{ color: colors.primary }}>{metric.icon}</div>
                    <span className="text" style={{ color: colors.textSecondary }}>{metric.title}</span>
                  </div>
                  <span className="text font-bold" style={{ color: colors.textPrimary }}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Team Status */}
        <div className="bg-[#1a1f3d] rounded-lg p-6 s-card">
          <h2 className="text-xl font-bold text-white mb-6">Team Status</h2>
          <div className="space-y-4">
            {teamStatus.map((member, index) => (
              <div key={index} className="flex items-center justify-between bg-[#020817] p-4 rounded-lg s-card">
                <div>
                  <p className="text-white font-medium">{member.name}</p>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Activity className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-gray-400">{member.tasks} tasks</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${member.status === 'Active' ? 'bg-green-500/20 text-green-500' :
                      member.status === 'In Meeting' ? 'bg-yellow-500/20 text-yellow-500' :
                        member.status === 'Working' ? 'bg-blue-500/20 text-blue-500' :
                          'bg-gray-500/20 text-gray-400'
                    }`}>
                    {member.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-[#1a1f3d] rounded-lg p-6 s-card">
          <h2 className="text-xl font-bold text-white mb-6">Recent Sales</h2>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="bg-[#020817] p-4 rounded-lg s-card">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{sale.client}</p>
                    <p className="text-gray-400 text-sm">{sale.package}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-500 font-bold">{sale.amount}</p>
                    <p className="text-gray-400 text-sm">{sale.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;