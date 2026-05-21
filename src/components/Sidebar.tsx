import { Link } from "react-router-dom";

interface MenuItem {
  name: string;

  //   Omit,Record,Union,Interface, classed based interface union, AND, OR in ts
  path: string;
}

interface SidebarProps {
  items: MenuItem[];
}

function Sidebar({ items }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="block p-2 hover:bg-gray-700 rounded"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
