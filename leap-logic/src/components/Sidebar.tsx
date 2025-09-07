import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import { 
  FaHome, 
  FaBoxes, 
  FaChartBar, 
  FaCheckCircle, 
  FaSyncAlt, 
  FaWarehouse, 
  FaTruck, 
  FaClipboardList, 
  FaLightbulb, 
  FaBell, 
  FaFileAlt, 
  FaCog 
} from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const { currentRole } = useRole();

  // Full list of navigation items with paths and icons
  const navItems = [
    { name: 'Overview', path: '/overview', icon: <FaHome /> },
    { name: 'Production', path: '/production', icon: <FaBoxes /> },
    { name: 'Downtime & Losses', path: '/downtime', icon: <FaChartBar /> },
    { name: 'Quality', path: '/quality', icon: <FaCheckCircle /> },
    { name: 'Assembly Recon', path: '/assembly-recon', icon: <FaSyncAlt /> },
    { name: 'Inventory', path: '/inventory', icon: <FaWarehouse /> },
    { name: 'Logistics', path: '/logistics', icon: <FaTruck /> },
    { name: 'Scheduler', path: '/scheduler', icon: <FaClipboardList /> },
    { name: 'AI Hub', path: '/ai-hub', icon: <FaLightbulb /> },
    { name: 'Alerts & Briefs', path: '/alerts', icon: <FaBell /> },
    { name: 'Reports', path: '/reports', icon: <FaFileAlt /> },
    { name: 'Admin & Setup', path: '/admin', icon: <FaCog /> },
  ];

  return (
    <aside className="w-60 bg-white border-r border-border-color flex flex-col p-4">
      <div className="flex items-center gap-2 mb-8 pl-2">
        <div className="bg-primary-blue text-white w-9 h-9 flex items-center justify-center rounded-lg text-lg font-bold">LL</div>
        <h1 className="text-lg font-bold text-text-dark">LOGIC LEAP</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2.5 rounded-md cursor-pointer transition-colors text-sm font-medium w-full ${
                    isActive 
                      ? 'bg-blue-100 text-primary-blue' 
                      : 'text-text-light hover:bg-gray-100'
                  }`
                }
              >
                <span className="text-base w-5 flex justify-center">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="pt-4 border-t border-border-color">
         <div className="p-2.5">
            <p className="text-xs text-text-light">Current Role:</p>
            <p className="text-sm font-semibold text-text-dark">{currentRole}</p>
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;